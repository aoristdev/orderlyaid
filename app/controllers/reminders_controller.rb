class RemindersController < ApplicationController

  before_action :require_user

  def history
    render json: Reminder.where('transmit_time < ?', DateTime.now)
  end

end
