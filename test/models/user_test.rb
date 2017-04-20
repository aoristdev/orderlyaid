require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def test_user_invalid_without_email
    user = build(:user, email: "")
    refute user.valid?
  end

  def test_user_invalid_email_address
    user = build(:user, email: "billie123")
    refute user.valid?
  end

  def test_user_email_is_unique
    user = build(:user, email: "asdf@asdf.com")
    user1 = build(:user, email: "asdf@asdf.com")
    assert user.save
    refute user1.save
  end

  def test_user_has_many_prescriptions
    user = build(:user)
    prescription = build(:prescription)
    prescription1 = build(:prescription)
    user.prescriptions << prescription
    user.prescriptions << prescription1
    user.save
    assert user.prescriptions.count == 2
  end

  # def test_user_has_many_reminders
  #   user = build(:user)
  #   reminder = build(:reminder)
  #   reminder1 = build(:reminder)
  #   user.reminders << reminder
  #   user.reminders << reminder1
  #   user.save
  #   assert user.reminders.count == 2
  # end

end
