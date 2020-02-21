class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def index
  end

  def create
    @todo = Todo.new(todo_params)
  end

  def update
  end

  def destroy
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end