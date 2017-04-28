
def generate_partial_prescription
  Prescription.new(
    name: FFaker::HealthcareIpsum.word.first(15),
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
  email: 'davegregg@gmail.com',
  phone: '+1' + '8127839804',
  display_name: 'David Gregg',
  optout_sms: false,
  optin_email: true
)

rx_name = ['Adderall', 'Prilosec', 'Cialis', 'Glucophage', 'Xanax']
rx_description = ['For my ADHD', 'For my heartburn', 'So I can\'t accidentally ignore my wife', 'To lower my blood sugar', 'For anxiety and panic attacks']
rx_physical_description = ['Little sky-blue circles with a symbol that looks like a funky dollar sign', 'Long skinny tubes with a deep-ocean blue-green color which is lighter on the tips', 'Looks like a golden goose egg.', 'Perfect matte white circle with weird tapered edges', 'Small, peach-colored and oblong with what looks like butt cheeks on the back']
rx_instructions = ['Take two in the morning with whole milk or breakfast.', 'Take one three times a day with a meal.', 'Take one as desired, no more frequently than once every 8 hours. I\'ll take my with dinner every night. Let\'s spice things up this week.', 'Take once a day with a meal.', 'Take one just after waking and one just after lunch.']
rx_caution = ['Has to be taken in the morning and early afternoon, otherwise it can cause insomnia.', 'Doesn\'t start working as fast as some other antacids like Tums, Rolaids, or Maalox.', 'Can cause flushing, headache, and dizziness, or sudden hearing and vision changes.', 'Most people will have nausea, indigestion, or diarrhea in the first few weeks. You can minimize this if you take it on a full stomach.', 'Can cause memory problems, drowsiness, dizziness, and confusion.']
rx_note = ['Tastes funny, take with orange fiber drink.', 'Lots of water.', 'Don\'t take if I expect to watch horror.', 'Always check levels first.', 'Can take one more if I have a panic attack. But ALWAYS keep track.']

test_user.prescriptions = rx_name.map.with_index do |rx, i|
  Prescription.new(
    name: rx_name[i],
    description: rx_description[i],
    physical_description: rx_physical_description[i],
    instructions: rx_instructions[i],
    caution: rx_caution[i],
    notes: rx_note[i],
    dosage: [0.5, 1.0, 2.0, 3.0].sample,
    total: pill_count = [*(5..10), 20, 30, 40, 50, 60, 100, 150, 200, 300].sample,
    count: pill_count,
    start_time: Hour::Hour.new([*(4..9)].sample, [0, 15, 30].sample).to_time,
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
    optout_sms: true,
    optin_email: false
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
