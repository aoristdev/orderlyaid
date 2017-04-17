desc "Sends reminders"
task reminder_spooler: :environment do

  # when rx is created or updated reminder cascading
  # where(start_time: (Time.now - 10.minutes)..(Time.now + 20.minutes))

  # ReminderQueue.find_each(batch_size: Prescription.count) do |rx| # reduce Prescription.count to sensible portions for scaling once this query starts to feel expensive
  #
  #   binding.pry
  #
  # end



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
