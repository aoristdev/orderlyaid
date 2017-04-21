class Weekday < ApplicationRecord
  has_many :prescription_to_weekday_joins
  has_many :prescriptions, through: :prescription_to_weekday_joins
end
