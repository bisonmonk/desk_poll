# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

desk_options = ["basic", "standing", "mega"]

('a'..'z').to_a.each do |char|
  u = User.create({email: "#{char}@building-blocks.com", password_digest: "a;sldkfja;sldfjkd"})
  Vote.create({desk_type: desk_options.sample, user_id: u.id})
end