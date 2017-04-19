desc "Sends reminders"
task reminder_spooler: :environment do

  Reminder.where('transmit_time < ?', DateTime.now).each do |reminder|
    binding.pry
    message = Twilio::REST::Client.new
              .account.messages.create({
                from: ENV['TWILIO_PHONE'],
                to:   reminder.prescription.user.phone,
                body: "It's time to take your #{reminder.prescription.dosage} #{reminder.prescription.name}! Tell us you took it: http://localhost:3000/reminder?t=#{reminder.single_use_token}"
              })
    puts message.sid
  end











  #psuedocode begin

    # every 10 minutes
      # check reminder events for date and times within the next 30 minutes
      # mark all of these queued
    # end

    # probably needs a second scheduler that catches the queue when the primary scheduler fails?

  #pseudocode end

  # argument_1 = args.arg_1
  # include Rails.application.routes.url_helpers; puts "user profile is #{profile_path}"

  # Reminder notification: Drug name, Physical Description, Dosage, with food (etc.), Caution, a button for Ignore, a button for I've Taken This which has a one-time token which lives on Queue table


end
