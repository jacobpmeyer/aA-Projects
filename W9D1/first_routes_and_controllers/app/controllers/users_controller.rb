class UsersController < ApplicationController
  def index
    user = User.all
    render json: user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(user_params)
    
    if user.save
        render json: user
    else
        render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])

    user.destroy
    render json: 'Succesfully deleted from database'
  end

  def update
    user = User.find(params[:id])
    if user_params[:username]
        user.update_attributes(user_params)
        render json: user
    elsif
        render json: 'Invalid Entry', status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end