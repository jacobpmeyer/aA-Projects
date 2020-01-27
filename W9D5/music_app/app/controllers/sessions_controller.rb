class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.find_by(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      session[:session_token] = user.reset_session_token!
      redirect_to user_url(user.id)
    else
      flash.now[:errors] = "Wrong email/password combination"
      render :new
    end
  end

  def destroy

  end
end