require 'tdd'
describe 'my_uniq' do
  let(:array) { [1, 2, 1, 3, 3] }
  it 'removes duplicates from an array' do 
    expect(array.my_uniq).to eq([1, 2, 3])
  end
end

describe 'two_sum' do 
  it 'find all pairs of positions where the elements at those positions sum to zero' do
    expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
  end
end

describe 'my_transpose' do
    rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
            ]
    it "swaps rows with columns" do
        transposed_arr = rows.my_transpose
        expect(transposed_arr[1][0]).to eq(1)
    end
end

describe 'stock_picker' do
  let(:prices) { [5, 8, 2, 10, 23] }
  it 'returns the most profitable pair of days' do 
    expect(stock_picker(prices)).to eq([2, 4])
  end
end
