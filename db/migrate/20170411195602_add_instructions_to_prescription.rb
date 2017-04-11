class AddInstructionsToPrescription < ActiveRecord::Migration[5.0]
  def change
    add_column :prescriptions, :instructions, :text
  end
end
