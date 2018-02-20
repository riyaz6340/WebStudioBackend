class CreateUserData < ActiveRecord::Migration[5.1]
  def change
    create_table :user_data do |t|
      t.string :email
      t.string :username
      t.string :encrypted_pass
      t.string :salt
      t.string :phone
      t.date :created_on

      t.timestamps
    end
  end
end
