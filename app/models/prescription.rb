class Prescription < ApplicationRecord
  belongs_to :user
  has_many :reminders
  has_many :prescription_to_weekday_joins
  has_many :weekdays, through: :prescription_to_weekday_joins
end
