class ArchivedRemindersSerializer < ActiveModel::Serializer
  attributes :id, :prescription_id,
             :state,
             :transmit_time, :scheduled_time,
             :created_at, :updated_at
end
