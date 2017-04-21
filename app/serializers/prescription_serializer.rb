class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :active, :name, :description, :physical_description, :caution, :notes, :dosage, :total, :count, :interval, :start_time, :end_time, :last_taken, :created_at, :updated_at
end
