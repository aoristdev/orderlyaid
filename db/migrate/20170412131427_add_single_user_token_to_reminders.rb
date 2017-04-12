class AddSingleUserTokenToReminders < ActiveRecord::Migration[5.0]
  def change
    add_column :reminders, :single_use_token, :string
  end
end
