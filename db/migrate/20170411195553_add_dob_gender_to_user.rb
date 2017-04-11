class AddDobGenderToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :patient_gender, :string
    add_column :users, :patient_dob, :date
  end
end
