class PrescriptionsController < ApplicationController

  before_action :require_user

  def index
    render json: current_user.prescriptions.all
  end

  def show
    render json: find_rx
  end

  def create
    rx = Rxify.call(rx_params, current_user)
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
      :id, :active, :status,
      :name, :description, :physical_description,
      :instructions, :caution, :notes,
      :dosage, :total, :count,
      :interval, :start_time, :end_time, :last_taken,
      :created_at, :updated_at
    )

    rx_params[:last_taken] =     Time.parse(rx_params[:last_taken])         if rx_params[:last_taken]
    rx_params[:interval]   = Hour::Hour.new(rx_params[:interval]).to_time   if rx_params[:interval]
    rx_params[:start_time] = Hour::Hour.new(rx_params[:start_time]).to_time if rx_params[:start_time]
    rx_params[:end_time]   = Hour::Hour.new(rx_params[:end_time]).to_time   if rx_params[:end_time]
    rx_params
  end

  def find_rx
    @rx = Prescription.find(rx_params[:id])
  end

end
