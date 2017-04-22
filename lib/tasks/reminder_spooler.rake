desc "Sends reminders"
task reminder_spooler: :environment do

  puts 'BEGIN ReminderSpooler'

  include Rails.application.routes.url_helpers

  reminder_state_endpoint = "#{ENV['WEBSITE_URL']}/reminders/state"

  def sms_client(recipient, message)
    Twilio::REST::Client.new.account.messages.create({
      from: ENV['TWILIO_PHONE'],
      to:   recipient.phone,
      body: message
    })
  end

  def send_sms(user, body)
    unless user.optout_sms
      message = sms_client(user, body)
      puts message.sid
    end
  end

  def send_email(user, rx, body, log_message)
    if user.optin_email
      ReminderMailer.refill(user, rx, body).deliver
      puts log_message
    end
  end

  def archive_then_destroy!(reminder)
    ar = ArchivedReminder.new(transmit_time: DateTime.now,
         scheduled_time: reminder.transmit_time,
         single_use_token: reminder.single_use_token)
    reminder.prescription.archived_reminders << ar
    reminder.prescription.save!
    reminder.destroy!
  end

  Reminder.where('transmit_time < ?', DateTime.now).each do |reminder|
    rx = reminder.prescription
    user = rx.user

    if user.optout_sms && !user.optin_email
      user.reminders.each do |rem|
        archive_then_destroy!(rem)
      end
    end

    reminder_taken_url = "#{reminder_state_endpoint}?s=t&t=#{reminder.single_use_token}"
    reminder_missed_url = "#{reminder_state_endpoint}?s=m&t=#{reminder.single_use_token}"
    body = "It's time to take your #{rx.dosage} #{rx.name}!\n\n" +
           "Tell us you took it: #{reminder_taken_url}\n\n" +
           "Tell us you missed it: #{reminder_missed_url}\n\n" +
           "— OrderlyAid"

    send_sms(user, body)
    send_email(user, rx, body, "An email was sent to #{user.email} for reminder with token #{reminder.single_use_token}.")

    if reminder.prescription.count < reminder.prescription.dosage * 7 #TODO: refactor to take total consumption-per-day into account
      send_sms(user, body)
      send_email(user, rx, body, "A refill-reminder email was sent to #{user.email}.")
    end

    archive_then_destroy!(reminder)

  end

  #QUESTION: probably needs a second scheduler that catches the queue when the primary scheduler fails?

  puts 'END ReminderSpooler'

end
