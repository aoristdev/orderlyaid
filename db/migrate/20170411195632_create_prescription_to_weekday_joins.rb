class CreatePrescriptionToWeekdayJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :prescription_to_weekday_joins do |t|
      t.references :prescription, foreign_key: true
      t.references :weekday, foreign_key: true

      t.timestamps
    end
  end
end
