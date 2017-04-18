# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

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

%w[Sunday Monday Tuesday Wednesday Thursday Friday Saturday].each_with_index do |name, number|
  Weekday.create!(name: name, number: number + 1)
end

test_user = User.new(
  password: 'merp',
  username: 'turtlebear',
  email: Faker::Internet.email,
  phone: '+1' + Faker::Number.number(10).to_s,
  forename: Faker::Name.first_name,
  surname: Faker::Name.last_name,
  avatar: Faker::Avatar.image,
  patient_name: Faker::Name.name,
  patient_avatar: Faker::Avatar.image
)

test_user.prescriptions << Prescription.new(
  name: 'iApathy by Apple',
  description: 'Eliminates emotions, so you can focus on what matters.',
  physical_description: 'Designer white, egg-shaped, and trimmed with gold, with concave dimple on either end for precision single-finger guidance into your rectum.',
  instructions: 'Administer rectally after your morning pachoulli vape.',
  caution: 'Do not administer in public, around minors, or in the presence of strong magnets.',
  notes: "#{Faker::Name.first_name} doesn't like this one. Grind it up into some food.",
  dosage: [0.5, 1.0, 2.0, 3.0].sample,
  total: pill_count = [*(5..10), 20, 30, 40, 50, 60, 100, 150, 200, 300].sample,
  count: pill_count,
  start_time: Hour::Hour.new([*(4..9)].sample, [0, 15, 30].sample).to_time,
  end_time: Hour::Hour.new([*(19..23)].sample, [0, 15, 30].sample).to_time,
  interval: Hour::Hour.new([*(1..5)].sample, 0).to_time
)
test_user.save!

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
    rx.start_time = Hour::Hour.new([*(4..9)].sample, [0, 15, 30].sample).to_time
    rx.end_time   = Hour::Hour.new([*(19..23)].sample, [0, 15, 30].sample).to_time
    rx.interval   = Hour::Hour.new([*(1..5)].sample).to_time
    rx
  end

  interval_per_day_rx = generate_partial_prescription
  interval_per_day_rx.start_time = Hour::Hour.new("08:30").to_time
  interval_per_day_rx.end_time   = Hour::Hour.new("22:00").to_time
  interval_per_day_rx.interval   = Hour::Hour.new("29:00").to_time

  set_time_per_day_rx = generate_partial_prescription
  set_time_per_day_rx.start_time = Hour::Hour.new("12:30").to_time
  set_time_per_day_rx.end_time   = Hour::Hour.new("12:30").to_time
  set_time_per_day_rx.interval   = Hour::Hour.new("24:00").to_time

  user.prescriptions << random_rxes << [interval_per_day_rx, set_time_per_day_rx]
  user.save!
end

Rx = Prescription

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
