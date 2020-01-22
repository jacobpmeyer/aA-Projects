class CommentsController < ApplicationController
  def index
    user_comment = Comment.find_by(user_id: params[:user_id])
    artwork_comment = Comment.find_by(artwork_id: params[:artwork_id])
  
    if user_comment
      render json: user_comment
    elsif artwork_comment
      render json: artwork_comment
    else
      render json: "Not Found"
    end
  end

  def create
    comment = Comment.new(comment_params)

    if comment.save
        render json: comment
    else
        render json: comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :artwork_id)
  end
end