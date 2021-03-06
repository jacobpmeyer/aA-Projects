# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ApplicationRecord
  validates :username, presence: true

    has_many :artworks,
        class_name: :Artwork,
        primary_key: :id,
        foreign_key: :artist_id

    has_many :artwork_shares,
      class_name: :ArtworkShare,
      primary_key: :id,
      foreign_key: :viewer_id

    has_many :shared_artworks,
      through: :artwork_shares,
      source: :artwork

    has_many :comments,
      class_name: :Comment,
      primary_key: :id,
      foreign_key: :user_id,
      dependent: :destroy

    has_many :commented_artworks,
      through: :comments,
      source: :artwork

    has_many :likes,
      as: :like
end
