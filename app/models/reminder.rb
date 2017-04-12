class Reminder < ApplicationRecord
  belongs_to :prescription
  has_secure_token :single_use_token
end
