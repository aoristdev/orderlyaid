class CreatePrescriptions < ActiveRecord::Migration[5.0]
  def change
    ignore = {date: [0, 1, 1], seconds: 0, utc: 0}
    midnight = Time.new(*ignore[:date], 00, 00, ignore[:seconds], ignore[:utc])

    create_table :prescriptions do |t|
      t.references :user, foreign_key: true
      t.boolean :active, default: true
      t.string :status
      t.string :name
      t.text :description
      t.text :physical_description
      t.text :instructions
      t.text :caution
      t.text :notes
      t.float :dosage, default: 1.0
      t.integer :total, default: 0
      t.float :count, default: 0.0
      t.time :interval, default: midnight
      t.time :start_time, default: midnight
      t.time :end_time, default: midnight
      t.time :last_taken, default: midnight

      t.timestamps
    end
  end
end
