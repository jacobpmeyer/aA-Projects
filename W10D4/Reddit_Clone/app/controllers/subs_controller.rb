class SubsController < ApplicationController
  def index
    @subs = Sub.all
    render :index
  end

  def show

    @sub = Sub.find(params[:id])
    render :show
  end

  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)

    if @sub.save
      flash[:success] = "Sub created successfully!"
      redirect_to sub_url(@sub.id)
    else
      flash.now[:error] = @sub.errors.full_messages
      render :new
    end
  end

  def edit
    @sub = Sub.find(params[:id])
    render :edit
  end
  
  def update
    # sub = current_user.subs.find_by(params[:id])
    @sub = mod_check
    if @sub
      @sub.update(sub_params)
      redirect_to sub_url[@sub.id]
    else
      flash[:errors] = []
    end
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :moderator_id, :discription)
  end

end
