class CreateTrains < ActiveRecord::Migration[5.2]
  def change
    create_table :trains do |t|
      t.string :destination
      t.string :newtime
      t.string :newtime24
      t.string :origin
      t.string :remarks_boarding
      t.string :scheduled
      t.string :scheduled24
      t.string :service
      t.string :trainno

      t.timestamps
    end
  end
end
