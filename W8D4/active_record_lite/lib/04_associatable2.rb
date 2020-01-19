require_relative '03_associatable'

# Phase IV
module Associatable
  # Remember to go back to 04_associatable to write ::assoc_options

  def has_one_through(name, through_name, source_name)
    opts = assoc_options
    define_method(name) do 
      through_opts = opts[through_name].model_class.assoc_options
      source_names = through_opts[source_name]
      debugger
      self.class.parse_all(source_names)
      p 'hello'
    end
  end
end
