desc "This task assesses reminder table entries for readiness and queues them"
task reminder_spooler: :environment do

  #psuedocode begin

    # every 10 minutes
      # check reminder events for date and times within the next 30 minutes
      # mark all of these queued
    # end

    # probably needs a second scheduler that catches the queue when the primary scheduler fails?

  #pseudocode end

  # rails generate model ReminderQueue prescriptions:references transmit_time

  # deftable ReminderQueue

  # end

  # argument_1 = args.arg_1
  # include Rails.application.routes.url_helpers; puts "user profile is #{profile_path}"

  # Reminder notification: Drug name, Physical Description, Dosage, with food (etc.), Caution, a button for Ignore, a button for I've Taken This which has a one-time token which lives on Queue table


end
