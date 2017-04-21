class PrescriptionToWeekdayJoin < ApplicationRecord
  belongs_to :prescription
  belongs_to :weekday
end
