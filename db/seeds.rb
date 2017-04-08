# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  User.create!(
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
end
