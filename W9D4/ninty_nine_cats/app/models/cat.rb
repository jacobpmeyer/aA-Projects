require 'action_view'
require 'action_view/helpers'

class Cat < ApplicationRecord
  
  include ActionView::Helpers::DateHelper
  
  COLORS = %w(white brown red black grey mixie bald)
  
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: COLORS,
    message: "%{value} is not a valid color" }
  validates :sex, inclusion: { in: %w(M F),
    message: "%{value} is not a valid sex" }
  
  def age 
    distance_of_time_in_words_to_now(birth_date)
  end 

  def color_options
    COLORS
  end
end