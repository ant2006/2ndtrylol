const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
module.exports = {
	name: 'invite',
    description: 'embed test lol',



    
	execute(message, args) {;

const inviteEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle('Click me to invite me to your server!')
.setAuthor(embedAuthor)
.setURL('https://discord.com/api/oauth2/authorize?client_id=772558406652788737&permissions=0&scope=bot')
;

message.channel.send(inviteEmbed);
		
}}