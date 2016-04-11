class CreateParties < ActiveRecord::Migration
  def change
    create_table :parties do |t|
      t.string :name
      t.date :date
      t.string :time
      t.string :city
      t.string :place
      t.string :boardgames
      t.string :description
      t.integer :max_participant
      t.belongs_to :user, index: true
    end
  end
end
