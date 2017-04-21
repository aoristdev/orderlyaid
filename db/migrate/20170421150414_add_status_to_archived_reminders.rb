class AddStatusToArchivedReminders < ActiveRecord::Migration[5.0]
  def change
    add_column :archived_reminders, :state, :string, default: 'Unmarked'
  end
end
