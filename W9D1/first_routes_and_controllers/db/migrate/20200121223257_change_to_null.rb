class ChangeToNull < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:users, :username, from: true, to: false)
  end
end
