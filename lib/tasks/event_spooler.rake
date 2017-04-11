desc "This task assesses reminder table entries for readiness and queues them"
task event_spooler: :environment do

  #psuedocode begin

    # every 10 minutes
      # check reminder events for date and times within the next 30 minutes
      # mark all of these queued
    # end

    # probably needs a second scheduler that catches the queue when the primary scheduler fails?

  #pseudocode end

  # rails generate resources Prescription users:references active:boolean status name description:text physical_description:text caution:text notes:text dosage:decimal total:integer count:integer interval:time start_time:time end_time:time
  # rails generate model Weekday day numerical:integer
  # rails generate model PrescriptionToWeekdayJoin prescriptions:references weekdays:references

  # prescription table
    # active:boolean
    # name:string
    # description:text
    # physical_description:text
    # caution:text
    # notes:text
    # dosage(0.5..x):decimal
    # total(60):integer # untracked if 0
    # count(59):integer # untracked if 0
    # interval(72:00:00 for 'every 3 days', 24:00:00 for 'per day', 1:00:00 for 'per hour', 3:00:00 for 'per 3 hours'):time
    # start_time:time
    # end_time:time
    # day([0]/[1,2,3,4,5,6,7]) # might need to be a separate table that counts days of the year
  # end

  # schedule
    # when
      # specific time
        # if it is a specific time, then it is by definition once-per-day; we just create multiple specific-time events if the user manually sets multiple ones
    # per
      # day
      # hour
      # 3 hours
  # end




  # argument_1 = args.arg_1
  # include Rails.application.routes.url_helpers; puts "user profile is #{profile_path}"

  # Reminder notification: Drug name, Physical Description, Dosage, with food (etc.), Caution, a button for Ignore, a button for I've Taken This which has a one-time token which lives on Queue table


end
