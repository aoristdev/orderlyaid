class AddDailyScheduleToPrescription < ActiveRecord::Migration[5.0]
  def change
    add_column :prescriptions, :daily_schedule, :string
  end
end
