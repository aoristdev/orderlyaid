class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :token
      t.string :username
      t.string :email
      t.string :phone
      t.string :forename
      t.string :surname
      t.string :patient_name

      t.timestamps
    end
  end
end
