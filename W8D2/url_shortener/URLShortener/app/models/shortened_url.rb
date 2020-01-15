# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#



class ShortenedUrl < ApplicationRecord
    validates :short_url, presence: true, uniqueness: true
    validates :long_url, presence: true, uniqueness: true
    validates :user_id, presence: true


    belongs_to :submitter,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id

    has_many :visits,
        class_name: 'Visit',
        foreign_key: :shortened_url_id,
        primary_key: :id

    has_many :visitors,
        through: :visits,
        source: :visitor

    def self.random_code
        short = SecureRandom.urlsafe_base64

        while ShortenedUrl.exists?(short_url: short)
            short = SecureRandom.urlsafe_base64
        end

        short
    end

    def self.convert_long_url(user, long_url)
        ShortenedUrl.create!(
            long_url: long_url,
            user_id: user.id,
            short_url: ShortenedUrl.random_code
        )
    end

    def num_clicks
        self.visits.count
    end

    def num_uniques
        self.visits.distinct.count
    end

    def num_recent_uniques
        self.num_uniques.where(created_at: (Time.now - 10.minute)..Time.now)
    end
end

