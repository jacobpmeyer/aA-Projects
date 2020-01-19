require_relative '02_searchable'
require 'active_support/inflector'
require 'byebug'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    @class_name.constantize
  end

  def table_name
    @table_name
  end
end

#  'ActiveModel'.underscore # => "active_model"
class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @table_name = (name.to_s.underscore.downcase.singularize + 's')
    @foreign_key = options[:foreign_key] ? options[:foreign_key] : (name.to_s.underscore + "_id").to_sym
    @primary_key = options[:primary_key] ? options[:primary_key] : :id
    @class_name = options[:class_name] ? options[:class_name] : name.to_s.capitalize
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @table_name = (name.to_s.underscore.downcase.singularize + 's')

    @foreign_key = options[:foreign_key] ? options[:foreign_key] : (self_class_name.to_s.underscore + "_id").to_sym
    @primary_key = options[:primary_key] ? options[:primary_key] : :id
    @class_name = options[:class_name] ? options[:class_name] : name.to_s.singularize.capitalize
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    opts = assoc_options
    opts[name] = BelongsToOptions.new(name, options)
    define_method(name) do 
      fkey = send(opts[name].foreign_key)
      opts[name].model_class.where(opts[name].primary_key => fkey).first
    end
  end

  def has_many(name, options = {})
    opts = assoc_options
    opts[name] = HasManyOptions.new(name, self.to_s, options)
    define_method(name) do
      fkey = send(opts[name].primary_key)
      opts[name].model_class.where(opts[name].foreign_key => fkey)
    end
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
    @assoc ||= {}
  end
end

class SQLObject
  # Mixin Associatable here...
  extend Associatable
end
