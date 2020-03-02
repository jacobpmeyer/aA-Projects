class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    

    # Probably going to have to change this part below after 
    # I figure out how to format the data and why for
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
