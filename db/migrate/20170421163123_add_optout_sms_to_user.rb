class AddOptoutSmsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :optout_sms, :boolean, default: false
    add_column :users, :optin_email, :boolean, default: false
  end
end
