require "game"

describe HanoiGame do
    subject(:game) {HanoiGame.new}
    let(:board) {game.instance_variable_get(:@board)}
    describe "#initialize" do 
        it "only give pieces to the first tower" do    
            expect(board[1]).to be_empty
            expect(board[2]).to be_empty
        end

        it "should set @board to be a 2D array" do
            expect(board[0]).to be_a(Array) 
        end
    end

    describe "#board" do
        it "returns the board" do 
            expect(game.board).to eq(board)
        end
    end

    # describe '#prompt' do
    #   it 'asks the user to select a disc' do
    #     allow(game).to receive(:prompt).and_return([])
    #     expect(game.prompt).to be_a(Array)
    #   end
    # end

    describe "move" do 
        let(:array) { [[3, 2, 1], [], []] }
        it "should get the user's input" do
            allow(game).to receive(:prompt).and_return([0, 1])
            game.move
        end

        it 'moves the disc from start_pos to end_pos' do
            allow(game).to receive(:prompt).and_return([0, 1])
            game.move
            expect(game.board).to eq([[3, 2], [1], []])     
        end

        it "raises an error if tried to move on to larger piece" do
            expect {2.times {game.move(0, 1)}}.to raise_error(ArgumentError)   
        end
    end

    describe 'won?' do 
      it "returns true if the player wins the game" do 
        game.instance_variable_set(:@board, [[], [3, 2, 1], []])
        expect(game.won?).to eq(true)
      end
      it "returns false if the game is not won" do 
        expect(game.won?).to eq(false)
      end
    end
end