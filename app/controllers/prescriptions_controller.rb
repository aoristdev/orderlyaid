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
    # binding.pry #Reminder #ex5HaCwEd8sJQmGYfRL4GVSh
    # Time.now.to_s.scan(/.+? (\d\d:\d\d):.+?/) #[["16:32"]].first.first

    #interval
    #start_time (waking hour)
    #end_time (sleeping hour)
    #Time.now

    transmit_time = Time.new
    if Time.now < rx.start_time
      interval_reps = ((rx.end_time - rx.start_time) / rx.interval).round(1)
      # interval = Time.now.hour + Time.now.min
    end

    rx.reminders << Reminder.new(transmit_time: )
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
    params[:interval] = hour_to_time_obj(params[:interval])
    params[:start_time] = hour_to_time_obj(params[:start_time])
    params[:end_time] = hour_to_time_obj(params[:end_time])
    params.permit(
      :id,
      :user,
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
      :created_at,
      :updated_at
    )
  end

  def find_rx
    @rx = Prescription.find(rx_params[:id])
  end

  def hour_to_time_obj(hour)
    Time.new(0,1,1,*hour.split(':'),0,0)
  end

end
