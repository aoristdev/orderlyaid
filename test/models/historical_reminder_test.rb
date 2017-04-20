require "test_helper"

describe HistoricalReminder do
  let(:historical_reminder) { HistoricalReminder.new }

  it "must be valid" do
    value(historical_reminder).must_be :valid?
  end
end
