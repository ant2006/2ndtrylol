const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)

module.exports = {
	name: 'avatar',
    description: 'embed test lol',
	execute(message, args) {;  
        const avatarEmbed = new Discord.MessageEmbed()



.setColor(embedColor)
.setTitle('Your Avatar')
.setAuthor(embedAuthor, icon)
.setURL(message.author.displayAvatarURL)
.setImage(message.author.displayAvatarURL({ format: "png", dynamic: true }))
;

message.channel.send(avatarEmbed);


		
}}
