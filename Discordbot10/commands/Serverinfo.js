const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)
module.exports = {
	name: 'serverinfo',
    description: 'embed test lol',
    
	execute(message, args) {

        const guild = message.guild;
        
        var onlineCount = guild.members.cache.filter(m => m.presence.status === 'online').size
        var offlineCount = guild.members.cache.filter(m => m.presence.status === 'offline').size
        var idleCount = guild.members.cache.filter(m => m.presence.status === 'Idle').size


const serverinfoEmbed = new Discord.MessageEmbed()
.setColor(embedColor)
.setAuthor(embedAuthor, icon)
.setTitle('Your Server Info!')
.addFields(
    { name: 'Server Name:',
    value: `${message.guild.name}`,
    inline: true
    },

    { name: 'Total Members:',
    value: `${message.guild.memberCount} Total, 🟢${onlineCount} Online and 🌙${idleCount} Idle.`,
    inline: true
    },

    { name: `Server Owner:`,
    value: `${message.guild.owner}`,
    inline: true
    },

    { name: `Channels:`,
    value: `${message.guild.channels.cache.size}`,
    inline: true
}
)


message.channel.send(serverinfoEmbed);
		
}}