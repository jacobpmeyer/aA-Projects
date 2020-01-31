class SessionsController < ApplicationController
  before_action :ensure_logged_in, only: [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      redirect_to subs_url
    else
      flash.now[:error] = "Email or password is incorrect!"
      render :new
    end
  end

  def destroy
    log_out!
  end
end
