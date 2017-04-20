class User < ApplicationRecord
  has_many :prescriptions, inverse_of: :user
  has_many :reminders, through: :prescriptions
  accepts_nested_attributes_for :prescriptions

  has_secure_password
  has_secure_token

  validates :email, presence: true,
                    uniqueness: true,
                    format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/ }
  validates :phone, presence: true, format: { with: /\A\+?1? ?\(?\d{3}\)? ?\-?\d{3}\-? ?\d{4}\z/ }
  validates_length_of :display_name, maximum: 20, too_long: 'Pick a shorter display name'
  validates_length_of :phone, is: 17

end
