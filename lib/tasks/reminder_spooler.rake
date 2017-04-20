desc "Sends reminders"
task reminder_spooler: :environment do

  include Rails.application.routes.url_helpers
  Reminder.where('transmit_time < ?', DateTime.now).each do |reminder|
    message = Twilio::REST::Client.new
              .account.messages.create({
                from: ENV['TWILIO_PHONE'],
                to:   reminder.prescription.user.phone,
                body: "It's time to take your #{reminder.prescription.dosage} #{reminder.prescription.name}! Tell us you took it: #{reminder_path}?t=#{reminder.single_use_token}"
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


end
