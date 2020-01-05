require 'card'

describe Card do 
  subject(:card) { Card.new("ace", "heart") }
  describe '#initialize' do
    it 'initializes with face value and suit as args' do
      card
    end
  end

  describe '#face_value' do 
    it 'returns face value' do
      face = card.instance_variable_get(:@face_value)
      expect(card.face_value).to eq(face)
    end
  end

  describe '#suit' do 
    it 'returns suit' do
      suit = card.instance_variable_get(:@suit)
      expect(card.suit).to eq(suit)
    end
  end
end