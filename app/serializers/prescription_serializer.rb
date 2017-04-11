class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :active, :status, :name, :description, :physical_description, :caution, :notes, :dosage, :total, :count, :interval, :start_time, :end_time
  has_one :users
end
