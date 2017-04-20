class AddDisplayNameToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :display_name, :string
    remove_column :users, :fullname
  end
end
