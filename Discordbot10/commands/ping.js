const Discord = require('discord.js')

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
const exampleEmbed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Pong!')


message.channel.send(exampleEmbed);
		
}}
