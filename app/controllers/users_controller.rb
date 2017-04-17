class UsersController < ApplicationController

  before_action :require_user, except: [:create, :authenticate]

  def create
    user = User.new(user_params)
    render json:
      if user.save
        UserMailer.signup(user).deliver
        user #, include: { prescriptions: { include: :reminders } } # will also need applied to Update, Show, need serializer
      else
        error('User registration failed.', 400)
      end
  end

  def authenticate
    user = User.find_by(username: user_params[:username])
               &.authenticate(user_params[:password])
    render json: user || error
  end

  def show
    render json: current_user || error
  end

  def update
    render json:
      if current_user.update(user_params)
        current_user
      else
        error('User update failed.', 400)
      end
  end

  def deactivate
    current_user.update_attributes(active: false, token: nil)
    render json: signal('User deactivated.')
  end

  def destroy
    current_user.destroy
    render json: signal('User deleted.')
  end

  private

  def user_params
    params.permit(:username, :email, :phone, :forename, :surname, :avatar, :patient_name, :patient_avatar,
                  :password)
  end

end
