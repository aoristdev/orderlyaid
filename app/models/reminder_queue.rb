class ReminderQueue < ApplicationRecord
  belongs_to :prescriptions
  has_secure_token
end
