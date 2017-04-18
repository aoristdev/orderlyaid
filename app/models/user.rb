class User < ApplicationRecord
  has_many :prescriptions, inverse_of:  :user
  has_many :reminders, through: :prescriptions
  accepts_nested_attributes_for :prescriptions

  has_secure_password
  has_secure_token

  validates :email, presence: true,
                    uniqueness: true

end
