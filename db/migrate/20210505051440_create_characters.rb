class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :fullname
      t.date :birthday
      t.string :age

      t.timestamps
    end
  end
end
