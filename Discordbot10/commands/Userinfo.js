const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)
module.exports = {
	name: 'userinfo',
    description: 'Gives authors user info',
    
	execute(message, args) {
    const taggedUser = message.mentions.users.first()


    if(!args.length) {
        const errorEmbed = new Discord.MessageEmbed()
        .setTitle(`You need to @ the user!`)
        message.channel.send(errorEmbed)
    }
    
if(args.length) {
const userinfoEmbed = new Discord.MessageEmbed()
.setColor(embedColor)
.setAuthor(embedAuthor, icon)
.addFields( {
    name: `${taggedUser.username}'s info!`,
    value: `Username: ${taggedUser.username}\nAnd their ID is: ${taggedUser.id}`
})
    .setImage(taggedUser.displayAvatarURL({ format: "png", dynamic: true }))
    
    
message.channel.send(userinfoEmbed);
}
    }}
		
    
