class ApplicationController < ActionController::Base

  def logged_in?
    !!current_user
  end

  def login!
    
  end
end
