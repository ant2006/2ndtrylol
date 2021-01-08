const Discord = require('discord.js')

module.exports = {
    name: 'gay',


    execute(message, args) {
        const taggedUser = message.mentions.users.first()

        if(!args.length) {
            message.channel.send('Please @ the user!')
            return;
        }

        if(args.length) {
        message.channel.send(`🏳️‍🌈 🏳️‍🌈 ${taggedUser} 🏳️‍🌈 🏳️‍🌈 `)
    }}
}