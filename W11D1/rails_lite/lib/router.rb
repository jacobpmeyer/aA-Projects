class Route
  attr_reader :pattern, :http_method, :controller_class, :action_name

  def initialize(pattern, http_method, controller_class, action_name)
    @pattern = pattern
    @http_method = http_method
    @controller_class = controller_class
    @action_name = action_name
  end

  # checks if pattern matches path and method matches request method
  def matches?(req)
    method = req.request_method.downcase.to_sym
    pattern.match?(req.fullpath) && method == http_method
  end

  # use pattern to pull out route params (save for later?)
  # instantiate controller and call controller action
  def run(req, res)
    params = pattern.match(req.fullpath)&.captures
    controller = controller_class.new(req, res, params.to_h)
    # controller.send(action_name)
    controller.invoke_action(action_name)
    
    # debugger
  end
end

class Router
  attr_reader :routes

  def initialize
  end

  # simply adds a new route to the list of routes
  def add_route(pattern, method, controller_class, action_name)
  end

  # evaluate the proc in the context of the instance
  # for syntactic sugar :)
  def draw(&proc)
  end

  # make each of these methods that
  # when called add route
  [:get, :post, :put, :delete].each do |http_method|
  end

  # should return the route that matches this request
  def match(req)
  end

  # either throw 404 or call run on a matched route
  def run(req, res)
  end
end
