class CreatePrescriptions < ActiveRecord::Migration[5.0]
  def change
    create_table :prescriptions do |t|
      t.references :users, foreign_key: true
      t.boolean :active
      t.string :status
      t.string :name
      t.text :description
      t.text :physical_description
      t.text :caution
      t.text :notes
      t.decimal :dosage
      t.integer :total
      t.integer :count
      t.time :interval
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
