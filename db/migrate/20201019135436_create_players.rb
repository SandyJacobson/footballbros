class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :number
      t.string :img_url
      t.string :real_team
      t.string :fantasy_team
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
