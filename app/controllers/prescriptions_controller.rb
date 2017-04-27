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
    render json: rx.save ? rx : error(rx.errors.full_messages, 400)
  end

  def update
    render json:
      if find_rx.update(rx_params)
        signal('Prescription updated.')
      else
        error(find_rx.errors.full_messages, 400)
      end
  end

  def destroy
    find_rx.destroy
    render json: signal('Prescription deleted.')
  end

  private

  def rx_params
      params.permit(
        :id,
        :name, :description, :physical_description,
        :instructions, :caution, :notes,
        :dosage, :total, :count,
        :interval, :start_time, :end_time, :last_taken, :daily_schedule,
        :created_at, :updated_at
      )
  end

  def find_rx
    @rx = Prescription.find(rx_params[:id])
  end

end
