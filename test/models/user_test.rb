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
    user = build(:user, email: "asdf@gmail.com")
    user1 = build(:user, email: "asdf@gmail.com")
    binding.pry
    assert user.save
    # refute user1.save
  end
  #
  # def test_user_has_many_prescriptions
  #   user = build(:user)
  #   prescription = build(:prescription)
  #   prescription1 = build(:prescription)
  #   user.prescriptions << prescription
  #   user.prescriptions << prescription1
  #   user.save
  #   prescription.save
  #   prescription1.save
  #   assert user.prescriptions.count == 2
  # end

end
