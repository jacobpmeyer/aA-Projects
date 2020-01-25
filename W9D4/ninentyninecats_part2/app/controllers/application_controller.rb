class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :login, :logout, :ensure_user_logged_in

  def current_user
    return nil unless session[:session_token]
    User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def ensure_user_logged_in
    unless logged_in?
      flash[:errors] = ['Must be logged in to do that!']
      redirect_to new_session_url
    end
  end
end
