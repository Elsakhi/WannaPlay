class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :pseudo
      t.integer :age
      t.string :gender
      t.string :address
      t.string :zipcode
      t.string :city
      t.string :description
      t.string :game
    end
  end
end
