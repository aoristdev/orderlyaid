class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :prescription_id, :transmit_time, :daily_schedule, :created_at, :updated_at
end
