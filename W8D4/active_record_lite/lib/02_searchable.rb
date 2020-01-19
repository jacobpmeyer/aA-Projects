require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    keys = params.keys.map { |par| par.to_s + " = ?" }  
    o = DBConnection.execute("SELECT * FROM #{table_name} WHERE #{keys.join('AND')}", params.values)
    self.parse_all(o)
  end
end

class SQLObject
  extend Searchable
end
