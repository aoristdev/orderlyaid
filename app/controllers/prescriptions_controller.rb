class PrescriptionsController < ApplicationController

  before_action :require_user

  def index
    render json: current_user.prescriptions.all
  end

  def show
    render json: Prescription.find(params[:id])
  end
  def create; end
  def update; end
  def destroy; end

  private

  def rx_params
    params.permit(
      :token,
      :id,
      :active,
      :status,
      :name,
      :description,
      :physical_description,
      :caution,
      :notes,
      :dosage,
      :total,
      :count,
      :interval,
      :start_time,
      :end_time,
      :created_at,
      :updated_at,
      :instructions
    )
  end

end
