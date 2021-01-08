const Discord = require('discord.js')
module.exports = {
    name: 'say',
	description: 'says stuff',
	execute(message, args) {
        const messageToSay = args.join(" ")

        if(!args.length) {

            const errorEmbed = new Discord.MessageEmbed()
            .setTitle('You need to include what you want me to say!')
            message.channel.send(errorEmbed)
        }
if(args.length) {
        const sayEmbed = new Discord.MessageEmbed()
        .setTitle(messageToSay)
        .setFooter(`From ${message.author.username}`)


        message.channel.send(sayEmbed)

        message.delete()
    
}
    }
}
