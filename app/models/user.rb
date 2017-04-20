class User < ApplicationRecord
  has_many :prescriptions, inverse_of: :user
  has_many :reminders, through: :prescriptions
  accepts_nested_attributes_for :prescriptions

  has_secure_password
  has_secure_token

  validates :email, presence: true,
                    uniqueness: true,
                    format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }
  validates :phone, presence: true,
                    length: { minimum: 17 },
                    format: { with: /\A\+?1? ?\(?\d{3}\)? ?\-?\d{3}\-? ?\d{4}\z/ }
  validates_length_of :display_name, maximum: 30, too_long: 'Pick a shorter display name'

end
