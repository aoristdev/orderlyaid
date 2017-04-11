class AddDobGenderToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :gender, :string, default: 'f'
    add_column :users, :dob, :date
  end
end
