class RemindersController < ApplicationController

  before_action :require_user

  def show; end

  def state
    archived_reminder = ArchivedReminder.find_by(single_use_token: reminder_params[:t]) ||
                        ArchivedReminder.find(reminder_params[:id]) ||
                        Prescription.find(reminder_params[:prescription_id]).reminders.first ||
    archived_reminder.update_attributes(
      state:
        case reminder_params[:state]
        when 'missed', 'm' then 'Missed'
        else
          archived_reminder.prescription.count -= archived_reminder.prescription.dosage
          archived_reminder.prescription.save!
          'Taken'
        end
    )
    redirect_to '/nav/profile'
  end

  def archived
    binding.pry
    render json: current_user.archived_reminders
  end

  def later_today
    render json:
      current_user.reminders.map do |reminder|
        {
          prescription_id: reminder.prescription.id,
          prescription_name: reminder.prescription.name,
          daily_schedule: reminder.prescription.daily_schedule
        }
      end
  end

  private

  def reminder_params
    reminder_params = params.permit(:prescription_id, :id,
                                    :s, :state,
                                    :t, :single_use_token)
    reminder_params[:state] ||= reminder_params[:s]
    reminder_params[:single_use_token] ||= reminder_params[:t]
  end

end
