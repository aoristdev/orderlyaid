class PrescriptionToWeekdayJoin < ApplicationRecord
  belongs_to :prescriptions
  belongs_to :weekdays
end
