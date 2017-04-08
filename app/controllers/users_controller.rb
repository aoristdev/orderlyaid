class UsersController < ApplicationController

      before_action :find_user, only: [:edit, :show, :update]

      def index
        @users = User.all
        render json: @users
      end

      def show
        @user = User.find(params[:id])
      end

      def new
        @user = User.new
      end

      def create
        @user = User.new(user_params)
        if @user.save
          UserMailer.signup(@user).deliver
          redirect_to @user
        else
          render :new
        end
      end

      def update
        if @user.update(user_params)
          redirect_to @user
        else
          render :edit
        end
      end

    private

    def user_params
      params.require(:user)
            .permit(:username,
                    :email,
                    :phone,
                    :forename,
                    :surname,
                    :avatar,
                    :patient_name,
                    :patient_avatar,
                    :password)
    end

    def find_user
      @user = User.find(params[:id])
    end

end
