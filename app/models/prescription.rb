class Prescription < ApplicationRecord
  belongs_to :user
  has_many :reminders
  has_many :prescription_to_weekday_joins
  has_many :weekdays, through: :prescription_to_weekday_joins
  before_save :create_reminder

  def create_reminder
    interval   = Hour::Hour.new(self.interval.hour, self.interval.min)
    start_time = Hour::Hour.new(self.start_time.hour, self.start_time.min)
    end_time   = Hour::Hour.new(self.end_time.hour, self.start_time.min)
    # last_taken = self.last_taken
    # window_in_hours = (self.end_time - self.start_time) / 3600
    # window_as_range_in_time = self.start_time..self.end_time
    window_as_range = start_time.to_base10..end_time.to_base10
    # occurrences = (window_in_hours / (interval.hours + interval.minutes_in_base10)).floor
    unless interval.to_base10 == 0
      event = window_as_range.step(interval.to_base10).detect do |ev|
        ev > Hour::Hour.from_time(Time.now).to_base10
      end
    end
    next_event = Hour::Hour.from_base10(event)&.to_time || start_time.on_this_day(Time.now.tomorrow)
    self.reminders << Reminder.new(transmit_time: next_event)
  end
end
