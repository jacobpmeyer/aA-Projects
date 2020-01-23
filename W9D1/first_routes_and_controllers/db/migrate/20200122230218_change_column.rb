class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :favorite
    remove_column :artwork_shares, :favorite
  end
end
