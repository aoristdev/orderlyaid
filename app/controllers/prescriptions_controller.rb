class PrescriptionsController < ApplicationController

  before_action :require_user

  def index
    render json: current_user.prescriptions.all
  end

  def show
    render json: find_rx
  end

# when rx is created or updated reminder cascading

  def create
    rx = Prescription.new(rx_params)

    # calculate next reminder
    # interval   = Hour::Hour.new(rx.interval.hour, rx.interval.min)
    # start_time = Hour::Hour.new(rx.start_time.hour, rx.start_time.min)
    # end_time   = Hour::Hour.new(rx.end_time.hour, rx.start_time.min)
    # last_taken = rx.last_taken
    # window_in_hours = (rx.end_time - rx.start_time) / 60 / 60
    # occurrences = window_in_hours / (interval.hours + interval.minutes_in_base10)
    # binding.pry


    # transmit_time = Time.new
    # if Time.now < rx.start_time
    #   interval_reps = ((rx.end_time - rx.start_time) / rx.interval).round(1)
    #   # interval = Time.now.hour + Time.now.min
    # end

    # rx.reminders << Reminder.new(transmit_time: )
    render json: rx.save! ? rx : error('Prescription could not be created.', 400)
  end

  def update
    render json: if find_rx.update(rx_params)
      signal('Prescription updated.')
    else
      error('Prescription update failed.', 400)
    end
  end

  def destroy
    find_rx.destroy
    render json: signal('Prescription deleted.')
  end

  private

  def rx_params
    rx_params = params.permit(
      :id,
      :user_id,
      :active,
      :status,
      :name,
      :description,
      :physical_description,
      :instructions,
      :caution,
      :notes,
      :dosage,
      :total,
      :count,
      :interval,
      :start_time,
      :end_time,
      :last_taken,
      :created_at,
      :updated_at
    )

    rx_params[:last_taken] = Time.parse(    rx_params[:last_taken])         if rx_params[:last_taken]
    rx_params[:interval]   = Hour::Hour.new(rx_params[:interval]).to_time   if rx_params[:interval]
    rx_params[:start_time] = Hour::Hour.new(rx_params[:start_time]).to_time if rx_params[:start_time]
    rx_params[:end_time]   = Hour::Hour.new(rx_params[:end_time]).to_time   if rx_params[:end_time]
    rx_params
  end

  def find_rx
    @rx = Prescription.find(rx_params[:id])
  end

end
