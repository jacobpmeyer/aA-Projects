class BandsController < ApplicationController
  def index
    @bands = Band.all
    render :index
  end

  def new
    @band = Band.new
    render :new
  end

  def show
    @band = Band.new(band_params)

    if @band.save
      redirect_to band_url(@band.id)
    else
      flash.now[:errors] = @band.errors.full_messages
      render :new, status: 422
    end
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private
  def band_params
    params.require(:band).permit(:name)
  end
end