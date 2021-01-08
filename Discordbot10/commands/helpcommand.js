const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)
const botInviteLink = ('https://discord.com/api/oauth2/authorize?client_id=772558406652788737&permissions=0&scope=bot')



module.exports = {
	name: 'help2',
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
        value: '**Beep** \n**christmas** \n**halloween** \n**ping** \n**spamping** \n**serverinfo** \n**userinfo** \n**help (obviously)** \n**invite** \n**avatar** \n**poll** \n**say** \n**purge**',
        
    },

    { 
        name: `Serving in:`,
        value: `${serverCount} servers! \n${client.channels.cache.size} channels!`,
    }
)


message.channel.send(helpEmbed);
		
    }
}