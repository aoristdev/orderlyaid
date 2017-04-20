FactoryGirl.define do
  factory :prescription do
    name          { Faker::Company.name }
    instructions  { Faker::Lorem.sentences(2) }
    caution       { Faker::Lorem.sentences(2) }
    notes         { Faker::Lorem.sentences(2) }
    dosage        { Faker::Number.decimal(3) }
    total         { Faker::Number.number(2)  }
    count         { Faker::Number.decimal(2) }
    interval      { "#{rand(0..24)}:#{[0,30].sample}" }
    start_time    { DateTime.now }
    end_time      { DateTime.now + 1 }
    last_taken    { Faker::Time.between(DateTime.now, DateTime.now + 1 ) }
  end
end
