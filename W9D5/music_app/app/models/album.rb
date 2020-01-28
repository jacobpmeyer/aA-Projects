class Album < ApplicationRecord
  validates :title, :year, :band_id, presence: true
  validates :title, uniqueness: true

  belongs_to :band,
    class_name: :Band,
    primary_key: :id,
    foreign_key: :band_id
end
