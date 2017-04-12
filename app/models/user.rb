class User < ApplicationRecord
  has_many :prescriptions
  has_many :reminders, through: :prescriptions

  has_secure_password
  has_secure_token

  validates :username,  presence: true,
                        uniqueness: true

end
