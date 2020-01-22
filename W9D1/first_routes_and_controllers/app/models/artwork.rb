# == Schema Information
#
# Table name: artworks
#
#  id        :bigint           not null, primary key
#  artist_id :integer          not null
#  title     :string           not null
#  img_url   :string           not null
#

class Artwork < ApplicationRecord
  validates :img_url, presence: true
  validates :title, uniqueness: { scope: :artist_id,
    message: 'An artist must have unique titles'}

    belongs_to :artist,
        class_name: :User,
        primary_key: :id,
        foreign_key: :artist_id

    has_many :artwork_shares,
        class_name: :ArtworkShare,
        primary_key: :id,
        foreign_key: :artwork_id

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer

    has_many :comments,
        class_name: :Comment,
        primary_key: :id,
        foreign_key: :artwork_id,
        dependent: :destroy

    has_many :commenting_users,
        through: :comments,
        source: :user

    has_many :likes,
        as: :like
end
