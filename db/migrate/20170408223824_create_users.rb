class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string  :token
      t.string  :username
      t.string  :email
      t.string  :phone
      t.string  :forename
      t.string  :surname
      t.string  :avatar
      t.string  :patient_name
      t.string  :patient_avatar
      t.string  :patient_gender
      t.date    :patient_dob
      t.boolean :active, default: true
      t.string  :password_digest

      t.timestamps
    end
  end
end
