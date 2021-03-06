class UsersController < ApplicationController

  before_action :require_user, except: [:create, :authenticate]

  def create
    user = User.new(user_params)
    # user.prescriptions = Rxify.call(rx_params)
    render json:
      if user.save
        UserMailer.signup(user).deliver
        user
      else
        error(user.errors.full_messages, 400)
      end
  end

  def authenticate
    user   = User.find_by(token: token)
    user ||= User.find_by(email: user_params[:email])
                 &.authenticate(user_params[:password])
    render json: user || error(user.errors.full_messages)
  end

  def show
    render json: current_user || error
  end

  def update
    current_user.prescriptions << Rxify.call(rx_params)
    render json:
      if current_user.update(user_params)
        current_user
      else
        error(current_user.errors.full_messages, 400)
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
    params.permit(:password, :email, :phone, :display_name)
  end

  def rx_params
    params.permit(
      prescriptions_attributes: [
        :id,
        :name, :description, :physical_description,
        :instructions, :caution, :notes,
        :dosage, :total, :count,
        :interval, :start_time, :end_time, :last_taken, :daily_schedule
      ]
    )
  end

end
