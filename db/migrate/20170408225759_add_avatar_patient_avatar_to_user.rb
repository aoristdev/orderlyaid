class AddAvatarPatientAvatarToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :avatar, :string
    add_column :users, :patient_avatar, :string
  end
end
