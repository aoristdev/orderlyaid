class UsersController < ApplicationController

    before_action :require_user, except: [:create, :authenticate]

    def show
      render json: find_user
    end

    def authenticate
      user = User.find_by(username: params[:username])
                 &.authenticate(params[:password])
      render json: user || error
    end

    def create
      user = User.new(user_params)
      if user.save
        UserMailer.signup(user).deliver
        render json: signal('User registered, and confirmation email on its way.')
      else
        render json: error('User registration failed.', 400)
      end
    end

    def update
      user = find_user
      if user.update(user_params)
        render json: signal('User updated.')
      else
        render json: error('User update failed.', 400)
      end
    end

    private

    def user_params
      params.permit(:id, :username, :email, :phone, :forename, :surname, :avatar, :patient_name, :patient_avatar,
                    :password)
    end

    def find_user
      User.find(params[:id])
    end

end
