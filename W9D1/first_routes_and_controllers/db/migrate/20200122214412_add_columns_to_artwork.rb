class AddColumnsToArtwork < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :favorite, :integer
    add_column :artwork_shares, :favorite, :integer
  end
end
