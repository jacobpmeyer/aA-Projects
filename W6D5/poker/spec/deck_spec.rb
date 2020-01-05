require 'deck'

describe Deck do 
    subject(:deck) {Deck.new}
    let(:card) {double("Card")}
    describe "#initialize" do
        it "creates a deck of 52 cards" do
            expect(deck.cards.length).to eq(52) 
        end
    end

end