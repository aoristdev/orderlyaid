desc "Sends reminders"
task reminder_spooler: :environment do

  include Rails.application.routes.url_helpers

  sms_client = lambda do |body|
    Twilio::REST::Client.new.account.messages.create({
      from: ENV['TWILIO_PHONE'],
      to:   reminder.prescription.user.phone,
      body: body
    })
  end

  Reminder.where('transmit_time < ?', DateTime.now).each do |reminder|
    message = sms_client.("It's time to take your #{reminder.prescription.dosage} #{reminder.prescription.name}! Tell us you took it: #{reminder_path}?t=#{reminder.single_use_token}")
    reminder.prescription.count -= reminder.prescription.dosage
    reminder.single_use_token = nil
    reminder.save
    puts message.sid

    if reminder.prescription.count < reminder.prescription.dosage * 7
      message = sms_client.("Don't forget to refill your prescription of #{reminder.prescription.name}!. You're running low!")
      puts message.sid
    end
  end


  #psuedocode begin

    # every 10 minutes
      # check reminder events for date and times within the next 30 minutes
      # mark all of these queued
    # end

    # probably needs a second scheduler that catches the queue when the primary scheduler fails?
    # move reminder to history table (or, set status to sent, and add stuff to the WHERE)

  #pseudocode end


end
