class Prescription < ApplicationRecord
  belongs_to :user
  has_many :reminders
  has_many :archived_reminders

  validates :name, presence: {
                     message: 'You must provide a name for this prescription.'
                   },
                   length: {
                     maximum: 30,
                     message: 'A prescription name cannot be longer than 30 characters.'
                   }
  validates :dosage, presence: {
                       message: 'You must provide a dosage for this prescription.'
                     },
                     numericality: {
                       less_than: 31,
                       message: 'We will not accept a dosage larger than 30.'
                     }
  validates :total, presence: {
                      message: 'You must provide a total pill count for this prescription.'
                    },
                    numericality: {
                      only_integer: true,
                      less_than: 1001,
                      message: 'We will not accept a total pill count larger than 1000.'
                    }
  validates :interval,   presence: {
                           message: 'You must provide an interval for this prescription.'
                         },
                         format: hours = {with: /\d\d{,2}:[0-5]\d/}
  validates :start_time, presence: {
                           message: 'You must provide an start time for this prescription.'
                         },
                         format: hours
  validates :end_time,   presence: {
                           message: 'You must provide an end time for this prescription.'
                         },
                         format: hours

  # with_options if: ->(rx) { Hour::Hour.from_time(rx.interval).to_seconds.zero? } do |daily_set_time|
  #   daily_set_time.validates :start_time, if: ->(rx) { rx.start_time == rx.end_time }
  #                                         # message: 'Once-a-day prescriptions must have a set time (identical start_time and end_time values).'
  # end

  # validates :last_taken

  before_save :create_reminder

  def create_reminder
    interval = Hour::Hour.new(self.interval.hour, self.interval.min).to_base10
    start_time = Hour::Hour.new(self.start_time.hour, self.start_time.min)
    start_time_today_in_time =
      [Hour::Hour.from_time(self.last_taken).on_this_day,
       Hour::Hour.from_time(self.start_time).on_this_day].max
    start_time_today_in_hour = Hour::Hour.from_time(start_time_today_in_time)
    end_time = Hour::Hour.new(self.end_time.hour, self.start_time.min)

    schedule =
      lambda do |range|
        range.step(interval).map do |event|
          Hour::Hour.from_base10(event).on_this_day
        end
      end

    next_event =
      unless interval.zero?
        window_as_range =
          unless start_time.to_base10 == end_time.to_base10
            start_time.to_base10..end_time.to_base10
          else
            0.0...24.0
          end
        daily_schedule = schedule[window_as_range] || [start_time.on_this_day]

        window_today_as_range = (start_time_today_in_hour.to_base10..end_time.to_base10) || 0.0...24.0
        todays_schedule = schedule[window_today_as_range]
        todays_schedule.detect{ |event| event > Time.now }
      else
        daily_schedule = [start_time.on_this_day]
        start_time.on_this_day if start_time.on_this_day > Time.now
      end
    next_event ||= start_time.on_this_day.tomorrow

    self.daily_schedule = daily_schedule.join(',')

    self.reminders << Reminder.new(transmit_time: next_event)
  end
end
