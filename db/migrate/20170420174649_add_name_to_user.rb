class AddNameToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fullname, :string
    remove_column :users, :forename
    remove_column :users, :surname
    remove_column :users, :username
    remove_column :users, :avatar
    remove_column :users, :patient_name
    remove_column :users, :patient_gender
    remove_column :users, :patient_avatar
    remove_column :users, :patient_dob
    remove_column :prescriptions, :status
  end
end
