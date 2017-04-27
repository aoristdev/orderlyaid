class User < ApplicationRecord
  has_many :prescriptions, inverse_of: :user
  has_many :reminders, through: :prescriptions
  has_many :archived_reminders, through: :prescriptions
  accepts_nested_attributes_for :prescriptions

  has_secure_password
  has_secure_token

  validates :email, presence: {
                      message: 'You must provide an email address.'
                    },
                    uniqueness: {
                      message: 'You must provide an unique email address.'
                    },
                    format: {
                      with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i,
                      message: 'You must provide a valid email address.'
                    }
  validates :phone, presence: {
                      message: 'You must provide a phone number.'
                    },
                    length: {
                      maximum: 17,
                      message: 'We will not accept a phone number longer than 17 characters.'
                    },
                    format: {
                      with: /\A\+?1? ?\(?\d{3}\)? ?\-?\d{3}\-? ?\d{4}\z/,
                      message: 'You must provide a valid U.S. phone number.'
                    }
  validates_length_of :display_name, maximum: 30, too_long: 'Pick a shorter display name'

end
