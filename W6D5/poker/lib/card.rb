
class Card
  attr_reader :suit, :face_value
  def initialize(face_value, suit)
    @face_value = face_value
    @suit = suit
  end

end