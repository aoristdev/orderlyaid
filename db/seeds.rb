
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
rx_caution = ['Has to be taken in the morning and early afternoon, otherwise it can cause insomnia. It\'s a controlled medication and should be locked up to prevent potential abuse. Not safe for people with a history of heart problems. For schooled-aged children, the second dose will likely need to be given at school.', 'Doesn\'t start working as fast as some other antacids like Tums, Rolaids, or Maalox. Like with other proton pump inhibitors, long-term use can cause weak or broken bones. Can cause low levels of magnesium in the blood. You might need to take a magnesium supplement if you use Omeprazole long-term. Although the generic is affordable, other medications might still be cheaper than Omeprazole. Can interact with other drugs so be sure your doctor knows all the medicine you\'re taking before starting Omeprazole.', 'Can\'t be taken if you\'ve had a heart attack in the past 3 months, or stroke or heart failure in the past 6 months. Only available as brand name, so it can be expensive. Side effects can be more pronounced if you\'re over age 65. Can cause flushing, headache, and dizziness, or sudden hearing and vision changes. Can\'t use if you\'ve recently taken nitrates like Isordil, Imdur, or nitroglycerin (Nitro-BID, Nitro-Dur, Nitrostat).', 'Most people will have nausea, indigestion, or diarrhea in the first few weeks. You can minimize this if you take it on a full stomach. People with poor kidney function can\'t use it. Only works if your body can still make your own insulin, a hormone that tells your body what to do with sugar, protein, and fat.', 'Processed by the liver, so might not be the best choice if you have liver problems. Can cause memory problems, drowsiness, dizziness, and confusion. Can be habit-forming, so it\'s not typically used for long-term treatment, or for people who\'ve had problems with drug or alcohol abuse. Compared to other benzodiazepines, more likely to cause withdrawal if you take it for a long time and then stop suddenly.']

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
