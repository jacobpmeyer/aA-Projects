class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?
  skip_before_action :verify_authenticity_token

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:sesson_token])
  end

  def ensure_logged_in
    unless logged_in?
      flash[:errors] = ["Sign in for that"]
      redirect_to new_session_url
    end

  end

  def log_in!(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end
  
  def log_out!
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def mod_check
    @sub = Sub.find_by(id: params[:sub_id])
    @sub.moderator.id == current_user.id ? @sub : nil
  end
end
