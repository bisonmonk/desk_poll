class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :desk_type, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end
  end
end
