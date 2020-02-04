require 'active_support'
require 'active_support/inflector'
require 'active_support/core_ext'
require 'erb'
require 'byebug'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params, :session

  # Setup the controller
  def initialize(req, res)
    @req, @res = req, res
    @params = req.params
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise "double render" if @already_built_response
    @already_built_response = true
    res.set_header("Location", url) 
    res.status = 302
    @session.store_session(res)
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise "double render" if @already_built_response
    @already_built_response = true
    res.set_header("Content-Type", content_type)
    res.write(content)
    @session.store_session(res)
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name) #render :index
    file = template_name.to_s + ".html.erb"
    path = File.dirname(__FILE__).chomp("/lib")
    template = File.join(path, "views", self.class.to_s.underscore, file)
    puts "rendered"

    input = File.read(template)
    output = ERB.new(input)
    render_content(output.result(binding), "text/html")
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send name
    render name unless already_built_response?
  end
end

