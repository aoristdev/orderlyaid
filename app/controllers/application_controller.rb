class ApplicationController < ActionController::API

  private

  def signal(message = 'Success!', status = 200)
    Hash(message: message,
         status:  status)
  end

  def error(message = 'A valid combination of username and password is required.', status = 401)
    Hash(error:  message,
         status: status)
  end

  def find_user
    User.find_by(token: params[:token]) #|| Reminder.find_by(single_use_token: params[:single_use_token]).user
  end

  def current_user
    @current_user ||= find_user if params[:token]
  end

  def require_user
    render json: error if !current_user
  end

end
