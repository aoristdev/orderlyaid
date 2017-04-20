require 'test_helper'

class ReminderTest < ActiveSupport::TestCase

  def test_reminder_belongs_to_prescription
    user = build(:user)
    prescription = build(:prescription)
    user.save
    prescription.save
    user.prescriptions << prescription
    reminder = build(:reminder, transmit_time: prescription.last_taken.advance(:hours => prescription.interval.hour,:minutes => prescription.interval.min))
    reminder.save
    prescription.reminders << reminder
    assert reminder.prescription_id == prescription.id
  end

end
