# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

def seconds_to_minutes(secs)
  secs / 60
end
def seconds_to_hours(secs)
  secs / 60 / 60
end
def random_duration_in_hours(min = 0, max = 24)
  [*(min...max)].sample.hours
end
def random_duration_in_minutes(min = 0, max = 60, every = 5)
  [*(min...max)].select.with_index{ |_, i| i % every == 0 }.sample.minutes
end
def random_time_within_a_day(min = Time.now)
  Time.at(min + random_duration_in_hours + random_duration_in_minutes)
end
def fake_received_interval
  hour = seconds_to_hours(random_duration_in_hours.seconds)
  minute = seconds_to_minutes(random_duration_in_minutes.seconds)
  Time.parse("#{hour}:#{minute}")
end
def random_time_tomorrow
  hour = seconds_to_hours(random_duration_in_hours.seconds)
  minute = seconds_to_minutes(random_duration_in_minutes.seconds)
  Time.parse("#{Time.now.tomorrow.day} #{hour}:#{minute}")
end
def fake_received_start_time
  Time.parse("#{random_time_within_a_day}")
end
def fake_received_end_time(start)
  Time.parse("#{random_time_within_a_day(start)}")
end
def generate_partial_prescription
  Prescription.new(
    name: FFaker::HealthcareIpsum.word,
    description: FFaker::HealthcareIpsum.sentence,
    physical_description: FFaker::HealthcareIpsum.phrase,
    instructions: FFaker::HealthcareIpsum.sentence,
    caution: FFaker::HealthcareIpsum.phrases,
    notes: "#{Faker::Name.first_name} doesn't like this one. Grind it up into some food.",
    dosage: [0.5, 1.0, 2.0, 3.0].sample,
    total: pill_count = [*(5..10), 20, 30, 40, 50, 60, 100, 150, 200, 300].sample,
    count: pill_count
  )
end

# Time.now.month
# Time.now.day
once_a_day = none = Time.new(0,1,1,   00, 00,   0,0)

%w[Sunday Monday Tuesday Wednesday Thursday Friday Saturday].each_with_index do |name, number|
  Weekday.create!(name: name, number: number + 1)
end

5.times do

  user = User.new(
    password: Faker::Internet.password,
    username: Faker::Internet.user_name,
    email: Faker::Internet.email,
    phone: '+1' + Faker::Number.number(10).to_s,
    forename: Faker::Name.first_name,
    surname: Faker::Name.last_name,
    avatar: Faker::Avatar.image,
    patient_name: Faker::Name.name,
    patient_avatar: Faker::Avatar.image
  )

  random_rxes = (1..5).collect do
    rx = generate_partial_prescription
    rx.interval   = fake_received_interval
    rx.start_time = start_time = fake_received_start_time
    rx.end_time   = fake_received_end_time(start_time)
    rx
  end

  interval_per_day_rx = generate_partial_prescription
  interval_per_day_rx.interval   = fake_received_interval
  interval_per_day_rx.start_time = none
  interval_per_day_rx.end_time   = none

  set_time_per_day_rx = generate_partial_prescription
  set_time_per_day_rx.interval   = once_a_day
  set_time_per_day_rx.start_time = tomorrow = random_time_tomorrow
  set_time_per_day_rx.end_time   = tomorrow

  user.prescriptions << random_rxes << [interval_per_day_rx, set_time_per_day_rx]
  user.save!
end


# gal = Rx.new(name: "Gal Gadot", description: "Multilingual", physical_description: "Attractive", caution: "CAUTION: HOT! DO NOT TOUCH.", total: 60, count: 60)



# response["results"][0]["openfda"]["generic_name|brand_name|substance_name"] == "Omeprazole" (case-insensitive)
# API key for OpenFDA: bBxbkpf6rdhvKOyXSP99gMJj7vKV0Mqs2PqA8Bbq

# https://api.fda.gov/drug/label.json?search=ibuprofen&limit=5  ## results not in sensible order
# https://api.fda.gov/drug/label.json\?search\=openfda.generic_name:ibuprofen  ## doesn't return something like Viagra, but does Naproxen
# https://rxnav.nlm.nih.gov/REST/rxcui.json?name=ibuprofen
# https://rxnav.nlm.nih.gov/REST/rxcui/5640.json


# simple list: require 'net/http'; require 'json';  gimme = -> limit, drug { JSON.parse(Net::HTTP.get(URI("https://api.fda.gov/drug/label.json?search=openfda.brand_name:#{drug}&limit=#{limit.to_s}")))["results"].map{|result| "#{result['openfda']['brand_name'][0]} (#{result['openfda']['generic_name'][0]}) from #{result['openfda']['manufacturer_name'][0]}"} }
# full result: require 'net/http'; require 'json';  gimme = -> limit, drug { JSON.parse(Net::HTTP.get(URI("https://api.fda.gov/drug/label.json?search=openfda.brand_name:#{drug}&limit=#{limit.to_s}")))["results"].map{|result| result.with_indifferent_access}}
# gimme.(5, "ibuprofen")

# 1.+->(*){!_ ? _: 2}.(!())
# => 3
