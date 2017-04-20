FactoryGirl.define do
  factory :user do
    fullname   { "#{Faker::Name.first_name} #{Faker::Name.last_name}"}
    email     { Faker::Internet.safe_email }
    phone     { Faker::PhoneNumber.phone_number}
    password  "password"
  end
end
