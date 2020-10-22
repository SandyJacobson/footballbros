# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all
Player.destroy_all
User.destroy_all


@user = User.create!(username: 'admin', email: 'admin@gmail.com', password: '123456')
puts "#{User.count} users created"

@pat_mahomes = Player.create!(name: 'Patrick Mahomes', number: 15, img_url: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_6_desktop_2x/f_auto/chiefs/iwmsg6lhulvntsg327gk.jpg', real_team: 'Kansas City Chiefs', fantasy_team: 'Hebrew Hammaah', user: @user)
@stefon_diggs = Player.create!(name: 'Stefon Diggs', number: 14, img_url: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191020163625-stefon-diggs-file-restricted-1013.jpg', real_team: 'Buffalo Bills', fantasy_team: 'Hebrew Hammaah', user: @user)
@alvin_kamara = Player.create!(name: 'Alvin Kamara', number: 41, img_url: 'https://images.saymedia-content.com/.image/MTcxMjY5ODkwNjM0Njg4NDk0/alvin-kamara.jpg', real_team: 'New Orleans Saints', fantasy_team: 'Kulas Maids', user: @user)
@cmc = Player.create!(name: 'Christin McCaffery', number: 22, img_url: 'https://imageproxy.themaven.net/https%3A%2F%2Fimages.saymedia-content.com%2F.image%2FMTc0NDk4ODMwNjczMjU3ODMy%2Fusatsi_13864130_168388428_lowres.jpg', real_team: 'Carolina Panthers', fantasy_team: 'EEEEElaines Vines', user: @user)
@lamar_jackson = Player.create!(name: 'Lamar Jackson', number: 8, img_url: 'https://www.blackpast.org/wp-content/uploads/Lamar-Jackson-CNN.jpg', real_team: 'Baltimore Ravens', fantasy_team: 'Kulas Maids', user: @user)
@russel_wilson = Player.create!(name: 'Russel Wilson', number: 3, img_url: 'https://www.gstatic.com/tv/thumb/persons/743787/743787_v9_ba.jpg', real_team: 'Seattle Seahawks', fantasy_team: 'd20gs', user: @user)
@aaron_rodgers = Player.create!(name: 'Aaron Rodgers', number: 12, img_url: 'https://cdn.theathletic.com/app/uploads/2018/09/10011737/GettyImages-1030137086-e1536556734155-1024x735.jpg', real_team: 'Greebay Packers', fantasy_team: 'Bill', user: @user)
@derrick_henry = Player.create!(name: 'Derrick Henry', number: 22, img_url: 'https://static01.nyt.com/images/2020/01/16/sports/16nfl-henry-1/merlin_167006550_8cdf9e01-d873-4464-b172-8ef7e450d407-mobileMasterAt3x.jpg', real_team: 'Tennessee Titans', fantasy_team: 'GOLDEN SHOWERS', user: @user)
puts "#{Player.count} players created"

@hebrew_hammaah = Team.create!(name: 'Hebrew Hammaah', manager: 'Sandy J', img_url: 'https://i.imgur.com/CUW6P4g.jpg', players: [@pat_mahomes], user: @user)
@bill = Team.create!(name: 'Bill', manager: 'Bill King', img_url: 'https://www.mercurynews.com/wp-content/uploads/2016/12/bking5.jpg', user: @user)
@kulas_maids = Team.create!(name: 'Kulas Maids', manager: 'Matt Matolko', img_url: 'https://www.secondwavemedia.com/southwest-michigan/galleries/s_miller-davis_matt_motolko-.jpg', user: @user)
@cali = Team.create!(name: 'Cali', manager: 'Calvin Chang', img_url: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iz01E_aJRczc/v1/1000x-1.jpg', user: @user)
@d20gs = Team.create!(name: 'd20gs', manager: 'Billy Butler', img_url: 'https://m.media-amazon.com/images/M/MV5BMTUxNzE5NjE3MF5BMl5BanBnXkFtZTYwNjc4NTkz._V1_UY317_CR2,0,214,317_AL_.jpg', user: @user)
@tacos_bros = Team.create!(name: 'Tacos Bros', manager: 'PJ Targun', img_url: 'https://img.mcla.us/players/18764.jpg', user: @user)
@golden_showers = Team.create!(name: 'GOLDEN SHOWERS', manager: 'Tom Golden', img_url: 'https://tgolden.com/wp-content/uploads/2013/12/mrtomcoat2.jpg', user: @user)
@fox_deluxe = Team.create!(name: 'Fox DeLuxe', manager: 'EJ Fox', img_url: 'https://media4.s-nbcnews.com/j/newscms/2017_10/1929186/170310-balding-man-mn-1200_057ccbf7d0bd3e0847d726e1b1b06c95.fit-760w.jpg', user: @user)
@elaines_vines = Team.create!(name: 'EEEEElaines Vines', manager: 'Matt Ricciardi', img_url: 'https://pbs.twimg.com/profile_images/1221867308064366593/zKLVFk6Q.jpg', user: @user)
@the_great_bambino = Team.create!(name: 'The Great Bambino', manager: 'Jack Bambrick', img_url: 'https://pbs.twimg.com/profile_images/1278792703/image_400x400.jpg', user: @user)
@wijnastity = Team.create!(name: 'Wijnastity', manager: 'Daniel Wijas', img_url: 'https://pbs.twimg.com/profile_images/1286984853/image.jpg', user: @user)
@squirrelrings = Team.create!(name: 'Squirrel3Rings', manager: 'Jack Duffy', img_url: 'https://neuroparadox.files.wordpress.com/2012/03/irish-drunk.jpg', user: @user)
puts "#{Team.count} teams created"

