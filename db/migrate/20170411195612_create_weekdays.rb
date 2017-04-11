class CreateWeekdays < ActiveRecord::Migration[5.0]
  def change
    create_table :weekdays do |t|
      t.string :day
      t.integer :day_of_the_week

      t.timestamps
    end
  end
end
