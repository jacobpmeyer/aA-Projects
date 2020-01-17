require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @colums unless @colums.nil?
    @colums = DBConnection.execute2("SELECT * FROM #{table_name}")[0]
      .map { |col| col.to_sym }
  end
 
  def self.finalize!
    self.columns.each do |col|
      define_method(col) do 
        self.attributes[col]
      end
      define_method("#{col}=") do |arg|
        self.attributes[col] = arg
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.to_s.tableize
  end

  def self.all
    self.parse_all(DBConnection.execute("SELECT * FROM #{table_name}"))
  end

  def self.parse_all(results)
    results.map { |row| self.send(:new, row) }
  end

  def self.find(id)
    result = DBConnection.execute("SELECT * FROM #{table_name} WHERE id = #{id}")
    result.empty? ? nil : self.new(result[0])
  end

  def initialize(params = {})
    params.each do |col, value|
      raise "unknown attribute '#{col}'" unless self.class.columns.include?(col.to_sym)
      self.send("#{col}=", value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map do |col|
      self.send(col)
    end
  end

  def insert
    col_names = self.class.columns.join(',')
    question_marks = Array.new(self.class.columns.length, '?').join(',')
    DBConnection.execute("INSERT INTO #{self.class.table_name} (#{col_names}) VALUES (#{question_marks})", self.attribute_values)
    self.id = DBConnection.last_insert_row_id
  end

  def update
    col_names = self.class.columns.join('=?,')
    DBConnection.execute(<<-SQL, self.attribute_values)
      UPDATE 
        #{self.class.table_name} 
      SET 
        #{col_names += "= ?"} 
      WHERE
        id = #{id}
    SQL
  end

  def save
    if self.id.nil?
      self.insert
    else
      self.update
    end
  end
end
