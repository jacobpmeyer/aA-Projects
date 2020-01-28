class AlbumsController < ApplicationController
  def index

  end

  def new
    @bands = Band.all
    @album = Album.new
    render :new
  end

  def show
    render :show
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      flash[:success] = "successfully created album!"
      redirect_to bands_url(@album.band_id)
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end
  end

  private
  def album_params
    params.require(:album).permit(:band_id, :title, :year, :live)
  end
end