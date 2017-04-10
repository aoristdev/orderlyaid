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

  def current_user
    @current_user ||= User.find(params[:token]) if params[:token]
  end

  def require_user
    render json: error if !current_user
  end

end
