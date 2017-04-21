require 'test_helper'

class PrescriptionTest < ActiveSupport::TestCase

  def test_prescription_has_many_reminders
    user = build(:user)
    prescription = build(:prescription, interval: "1:00")
    prescription.last_taken = prescription.start_time.advance(:hours => prescription.interval.hour,:minutes => prescription.interval.min)
    user.save
    prescription.save
    reminder = build(:reminder, transmit_time: prescription.last_taken.advance(:hours => prescription.interval.hour,:minutes => prescription.interval.min))
    reminder1 = build(:reminder, transmit_time: prescription.last_taken.advance(:hours => prescription.interval.hour,:minutes => prescription.interval.min))
    # binding.pry
    user.prescriptions << prescription
    prescription.reminders << reminder
    prescription.reminders << reminder1
    assert prescription.reminders.count == 3
  end

  def test_reminder_occurs_after_prescription_start_time
    user = build(:user)
    prescription = build(:prescription)
    reminder = build(:reminder, transmit_time: prescription.last_taken.advance(:hours => prescription.interval.hour,:minutes => prescription.interval.min))
    user.prescriptions << prescription
    prescription.reminders << reminder
    user.save
    prescription.save
    reminder.save
    # binding.pry
    assert prescription.reminders.first.transmit_time > prescription.start_time
    assert prescription.reminders.first.transmit_time == prescription.last_taken.advance(:hours => prescription.interval.hour,:minutes => prescription.interval.min)
  end

  def test_prescription_belongs_to_user
    user = build(:user)
    prescription = build(:prescription)
    user.save
    prescription.save
    user.prescriptions << prescription
    assert prescription.user_id == user.id
  end

end
