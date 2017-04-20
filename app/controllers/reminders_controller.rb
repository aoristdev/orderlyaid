class RemindersController < ApplicationController

  before_action :require_user

  def show; end
  def history
    render json: Reminder.where('transmit_time < ?', DateTime.now)
  end

  def next
    render json: Reminder.where('transmit_time > ?', DateTime.now)
  end

end
