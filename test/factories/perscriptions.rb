FactoryGirl.define do
  factory :prescription do
    name          { Faker::Company.name }
    instructions  { Faker::Lorem.sentences(2) }
    caution       { Faker::Lorem.sentences(2) }
    notes         { Faker::Lorem.sentences(2) }
    dosage        { Faker::Number.decimal(3) }
    total         { Faker::Number.number(2)  }
    count         { Faker::Number.decimal(2) }
    interval      "2017-04-19 22:37:03"
    start_time    "2017-04-19 22:37:03"
    end_time      "2017-04-19 22:37:03"
    last_taken    "2017-04-19 22:37:03"
  end
end
