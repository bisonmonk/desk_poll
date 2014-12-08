class VotesController < ApplicationController
  def new
    @vote = Vote.new
  end
  
  def index
    @votes = Vote.all
    render json: @votes
  end
  
  def show
    @vote = Vote.find(params[:id])
    render :show
  end
  
  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    
    if @vote.save
      render json: @vote
    else
      render json: @vote.errors.full_messages
    end
    
  end
  
  def edit
    @vote = Vote.find(params[:id])
    render :edit
  end
  
  def update
    @vote = Vote.find(params[:id])
    if @vote.update(vote_params)
      render json: @vote
    else
      render json: @vote.errors.full_messages
    end
  end
  
  private
  
  def vote_params
    params.require(:vote).permit(:desk_type, :user_id)
  end
end
