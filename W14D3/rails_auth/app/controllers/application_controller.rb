class ApplicationController < ActionController::Base

  helper_method :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[session_token])
  end

  def ensure_logged_in
    # redirect_to new_session_url unless logged_in?
    # fill this with whatever the correct route is
  end

  def log_in!(user)
    @current_user = user
    session[session_token] = user.reset_session_token!
  end

  def log_out!
    current_user.reset_session_token!
    session[session_token] = nil
    # redirect_to new_session_url
    # Fill this with the correct route
  end

  def logged_in?
    !!current_user
  end

end
