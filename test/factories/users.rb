FactoryGirl.define do
  factory :user do
    forename  { Faker::Name.first_name }
    surname   { Faker::Name.last_name}
    username  { "#{forename}.#{surname}" }
    email     { "#{username}@example.com" }
    phone     { Faker::PhoneNumber.phone_number}
    password  "password"
  end
end
