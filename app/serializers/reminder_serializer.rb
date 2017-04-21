class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :prescription_id, :transmit_time, :created_at, :updated_at
end
