class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    debugger
    user = User.find_by_credentials(
      params[:user][:user_name], 
      params[:user][:password])

    if user 
      session[:session_token] = user.reset_session_token!
      redirect_to cats_url
    else
      flash.now[:errors] = ['User does not exist!']
      render :new
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
    end
    redirect_to new_session_url
  end

  private

end