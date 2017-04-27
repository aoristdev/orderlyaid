class Prescription < ApplicationRecord
  belongs_to :user
  has_many :reminders
  has_many :archived_reminders

  validates :name, presence: true,
                   length: {maximum: 30}
  validates :dosage, presence: true,
                     numericality: {less_than: 30}
  validates :total, presence: true,
                    numericality: {only_integer: true, less_than: 1001}
  validates :count, presence: true,
                    numericality: {less_than: 1001}
  validates :interval,   format: hours = {with: /\d\d{,2}:[0-5]\d/}
  validates :start_time, format: hours
  validates :end_time,   format: hours
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

    # window_in_hours = (self.end_time - self.start_time) / 3600
    # window_as_range_in_time = self.start_time..self.end_time
    # occurrences = (window_in_hours / (interval.hours + interval.minutes_in_base10)).floor


# what if interval is zero?
# what if start_time and end_time are zero?
    next_event =
      unless interval.zero?
        window_as_range = (start_time.to_base10..end_time.to_base10) || (0.0...24.0)
        daily_schedule = schedule[window_as_range] || [start_time.on_this_day]

        window_today_as_range = (start_time_today_in_hour.to_base10..end_time.to_base10) || (0.0...24.0)
        todays_schedule = schedule[window_today_as_range]
        todays_schedule.detect do |event|
          event > Time.now
        end
      else
        daily_schedule = [start_time.on_this_day]
        start_time.on_this_day if start_time.on_this_day > Time.now
      end
    next_event ||= start_time.on_this_day.tomorrow

    self.daily_schedule = daily_schedule.join(',')

    self.reminders << Reminder.new(transmit_time: next_event)
  end
end
