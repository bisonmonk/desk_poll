class SessionsController < ApplicationController
  def new
  end
  
  def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])

    if @user
      sign_in!(@user)
      if @user.admin?
        redirect_to "#admin"
      else
        redirect_to "#user"
      end
    else
      flash.now[:errors] = ["Invalid username/password"]
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
