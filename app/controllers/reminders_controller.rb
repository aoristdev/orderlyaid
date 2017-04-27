class RemindersController < ApplicationController

  before_action :require_user

  def state
    archived_reminder = ArchivedReminder.find_by(single_use_token: reminder_params[:single_use_token]) ||
                        ArchivedReminder.find(reminder_params[:id]) ||
                        Prescription.find(reminder_params[:prescription_id]).archived_reminders.last
    archived_reminder.update_attributes(
      state:
        case reminder_params[:state]
        when 'missed', 'm'
          'Missed'
        else
          archived_reminder.prescription.count -= archived_reminder.prescription.dosage
          archived_reminder.prescription.save!
          'Taken'
        end
    )
    redirect_to 'https://orderlyaid.herokuapp.com/nav/profile'
  end

  def archived
    render json: current_user.archived_reminders
  end

  def later_today
    daily_schedule =
      current_user.reminders.map do |reminder|
        {
          prescription_id: reminder.prescription.id,
          name: reminder.prescription.name,
          daily_schedule:
            reminder.prescription.daily_schedule.split(',').map do |ev|
              ev_in_time = Time.parse(ev)
              Time.now < ev_in_time ? ev_in_time : nil
            end.compact
        }
      end
    remaining_schedule =
      daily_schedule.map do |rx|
        rx[:daily_schedule].map do |ev|
          {
            scheduled_time: ev,
            name: rx[:name],
            prescription_id: rx[:prescription_id]
          }
        end
      end.flatten
    json = remaining_schedule.sort_by{ |key, _| key[:scheduled_time] }
    render json: json
  end

  private

  def reminder_params
    reminder_params = params.permit(:prescription_id, :id,
                                    :s, :state,
                                    :t, :single_use_token)
    reminder_params[:state] ||= reminder_params[:s]
    reminder_params[:single_use_token] ||= reminder_params[:t]
    reminder_params
  end

end
