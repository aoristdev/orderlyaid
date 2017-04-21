FactoryGirl.define do
  factory :user do
    display_name  { "#{Faker::Name.first_name} #{Faker::Name.last_name}"}
    email         { Faker::Internet.safe_email }
    phone         "5555555555"
    password      "password"
  end
end
