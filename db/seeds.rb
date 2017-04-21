
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

test_user = User.new(
  password: 'merp',
  email: 'merp@example.com',
  phone: '+1' + '8126712638', #' + Faker::Number.number(10).to_s,
  display_name: Faker::Name.name,
)

rx_name = ['Flintstones', 'Cialis', 'Viagra', 'Durian', 'iApathy by Apple']
rx_description = ['Basically candy.', 'Makes you poop, but happy about it.', 'Makes it so you can\'t ignore your wife.', 'Tastes like expired cantelope rinds and vidalia onion marmalade, but is nonetheless delicious.', 'Eliminates emotions, so you can focus on what matters.']
rx_physical_description = ['Assorted colors, shaped like cartoon characters', 'Looks just like a kiddy poo.', 'Small and blue', 'Yellow and spikey. About the size of a human head.', 'Designer white, egg-shaped, and trimmed with gold, with concave dimples on either end for precision single-finger guidance into your rectum.']
rx_instructions = ['Chew it up, buttercup.', 'Dissolve it in a grain alcohol of your choice.', 'Crush and sniff it.', 'Apply hatchet. Peel open in halves. Scoop with fingers. Shovel into your carcass.', 'Administer rectally after your morning pachoulli vape.']
rx_caution = ['May cause suicidal feelings in small children. Don\'t permit them to grow accustomed to jumping, no matter how adamant they are.', 'May turn skin green, though some patients have reported being happy about this.', 'May cause an erection lasting more than 4 hours. Call your doctor if you aren\'t a pornstar.', 'May pierce skull if falling at high rate of speed.', 'Do not administer in public, around minors, or in the presence of strong magnets.']

test_user.prescriptions = rx_name.map.with_index do |rx, i|
  Prescription.new(
    name: rx_name[i],
    description: rx_description[i],
    physical_description: rx_physical_description[i],
    instructions: rx_instructions[i],
    caution: rx_caution[i],
    notes: "#{Faker::Name.first_name} doesn't like this one. Grind it up into some food.",
    dosage: [0.5, 1.0, 2.0, 3.0].sample,
    total: pill_count = [*(5..10), 20, 30, 40, 50, 60, 100, 150, 200, 300].sample,
    count: pill_count,
    start_time: Hour::Hour.new([*(4..9)].sample, [0, 15, 30].sample).to_time, #Time.parse(0,1,1,[*(4..9)].sample, [0, 15, 30].sample,0,0)
    end_time: Hour::Hour.new([*(19..23)].sample, [0, 15, 30].sample).to_time,
    interval: Hour::Hour.new([*(1..5)].sample, 0).to_time,
    active: pill_count > 0
  )
end
test_user.save!

5.times do
  user = User.new(
    password: Faker::Internet.password,
    email: Faker::Internet.email,
    phone: '+1' + Faker::Number.number(10).to_s,
    display_name: Faker::Name.name,
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
