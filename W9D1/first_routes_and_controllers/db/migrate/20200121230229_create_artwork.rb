class CreateArtwork < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.string :img_url, null: false
    end
  end
end
