const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)
const botInviteLink = ('https://discord.com/api/oauth2/authorize?client_id=772558406652788737&permissions=0&scope=bot')



module.exports = {
	name: 'help',
    description: 'embed test lol',

    
    execute(message, args) {;
        const client = message.client
        const serverCount =  (client.guilds.cache.size)

const helpEmbed = new Discord.MessageEmbed()
.setColor(embedColor)
.setDescription('Note: All commands start with "!"')
.setTitle('Click me to invite me to your server!')
.setAuthor(embedAuthor, icon)
.setURL(botInviteLink)
.addFields(
    {
        name: 'Moderation',
        value: 'Purge \nPoll \nInvite'
        
    },

    {
        name: 'Info',
        value: 'Userinfo \nServerinfo \nAvatar '
    },

    {
        name: `Bot Status Commands:`,
        value: `Status \nstatusreset`
    },

    {
        name: `Random:`,
        value: `Beep \nchristmas \nhalloween \nspamping`
    }
)


message.channel.send(helpEmbed);
		
    }
}