class ArtworksController < ApplicationController

  def index 
    artwork = Artwork.find_by(artist_id: params[:user_id])
    # artwork = Artwork.all
    render json: artwork
  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    artwork = Artwork.find(params[:id])
    if artwork.update(artwork_params)
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: 'Destruction successful'
  end

  def favorite
    artwork = Artwork.find(params[:id])
    artwork.favorite ? artwork.favorite = false : artwork.favorite = true 
    
    render json: artwork
  end

  private

  def artwork_params
    params.require(:artwork).permit(:artist_id, :title, :img_url)
  end
end