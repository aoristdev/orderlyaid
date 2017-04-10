# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

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

# response["results"][0]["openfda"]["generic_name|brand_name|substance_name"] == "Omeprazole" (case-insensitive)
# API key for OpenFDA: bBxbkpf6rdhvKOyXSP99gMJj7vKV0Mqs2PqA8Bbq

# https://api.fda.gov/drug/label.json?search=ibuprofen&limit=5  ## results not in sensible order
# https://api.fda.gov/drug/label.json\?search\=openfda.generic_name:ibuprofen  ## doesn't return something like Viagra, but does Naproxen
# https://rxnav.nlm.nih.gov/REST/rxcui.json?name=ibuprofen
# https://rxnav.nlm.nih.gov/REST/rxcui/5640.json


# simple list: require 'net/http'; require 'json';  gimme = -> limit, drug { JSON.parse(Net::HTTP.get(URI("https://api.fda.gov/drug/label.json?search=openfda.brand_name:#{drug}&limit=#{limit.to_s}")))["results"].map{|result| "#{result['openfda']['brand_name'][0]} (#{result['openfda']['generic_name'][0]}) from #{result['openfda']['manufacturer_name'][0]}"} }
# full result: require 'net/http'; require 'json';  gimme = -> limit, drug { JSON.parse(Net::HTTP.get(URI("https://api.fda.gov/drug/label.json?search=openfda.brand_name:#{drug}&limit=#{limit.to_s}")))["results"].map{|result| result.with_indifferent_access}}
# gimme.(5, "ibuprofen")
