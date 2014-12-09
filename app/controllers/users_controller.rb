class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to "#user"
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new, status: 422
    end
  end
  
  def current_voter
    render json: current_user 
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
