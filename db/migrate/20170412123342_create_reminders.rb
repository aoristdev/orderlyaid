class CreateReminders < ActiveRecord::Migration[5.0]
  def change
    create_table :reminders do |t|
      t.references :prescriptions, foreign_key: true
      t.time :transmit_time

      t.timestamps
    end
  end
end
