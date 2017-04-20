class CreateReminders < ActiveRecord::Migration[5.0]
  def change
    create_table :reminders do |t|
      t.references :prescription, foreign_key: true
      t.datetime :transmit_time
      t.string :single_use_token

      t.timestamps
    end
  end
end
