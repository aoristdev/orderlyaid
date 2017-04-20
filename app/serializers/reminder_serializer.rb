class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :transmit_time, :created_at, :updated_at
end
