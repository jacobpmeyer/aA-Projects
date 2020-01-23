# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do 

  User.destroy_all
  Artwork.destroy_all
  ArtworkShare.destroy_all
  Comment.destroy_all

  user1 = User.create!(username: 'john')
  user2 = User.create!(username: 'sally')
  user3 = User.create!(username: 'johny')
  user4 = User.create!(username: 'jonathan')
  
  art1 = Artwork.create!(artist_id: user1.id, title: 'banana', img_url: 'www.banana.com')
  art2 = Artwork.create!(artist_id: user1.id, favorite: user1.id, title: 'potato', img_url: 'www.potato.com')
  art3 = Artwork.create!(artist_id: user2.id, favorite: user2.id, title: 'tomato', img_url: 'www.tomato.com')
  art4 = Artwork.create!(artist_id: user2.id, title: 'apple', img_url: 'www.apple.com')
  
  share1 = ArtworkShare.create!(artwork_id: art1.id, favorite: user3.id, viewer_id: user3.id)
  share2 = ArtworkShare.create!(artwork_id: art2.id, favorite: user4.id, viewer_id: user4.id)
  share3 = ArtworkShare.create!(artwork_id: art3.id, viewer_id: user3.id)
  share4 = ArtworkShare.create!(artwork_id: art4.id, viewer_id: user4.id)

  com1 = Comment.create!(artwork_id: art1.id, user_id: user1.id, body: 'comment_1')
  com2 = Comment.create!(artwork_id: art2.id, user_id: user2.id, body: 'comment_2')
  com3 = Comment.create!(artwork_id: art1.id, user_id: user2.id, body: 'comment_3')
  com4 = Comment.create!(artwork_id: art2.id, user_id: user1.id, body: 'comment_4')
  
  user1.likes.create!
  user1.likes.create!
  user1.likes.create!
  user1.likes.create!
  user2.likes.create!
  user2.likes.create!
  user2.likes.create!
  user2.likes.create!

  art1.likes.create!
  art1.likes.create!
  art1.likes.create!
  art2.likes.create!
  art2.likes.create!
  art2.likes.create!
  
  com1.likes.create!
  com1.likes.create!
  com1.likes.create!
  com1.likes.create!
  com2.likes.create!
  com2.likes.create!
  com2.likes.create!
  com3.likes.create!
  com3.likes.create!
  com3.likes.create!

end