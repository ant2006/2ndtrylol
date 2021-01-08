const Discord = require('discord.js');
module.exports = {
	name: 'embedpls',
    description: 'embed test lol',
    
	execute(message, args) {;

const exampleEmbed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle(message.author.username)
.setAuthor('urgay')
.setImage(message.author.avatarURL)
;

message.channel.send(exampleEmbed);
		
}}
