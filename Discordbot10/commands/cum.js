const Discord = require('discord.js')


module.exports = {
    name: 'cum',

    

    

    execute(message, args) {

        const guild = message.guild;
        
        
        const taggedUser = message.mentions.users.first().username

        
        let cum = [
            'https://media0.giphy.com/media/SseqwEB8RUOBcNDVTL/giphy.gif',
            'https://media4.giphy.com/media/l0HUmvVJSs1ApEhry/giphy.gif',
            'https://media2.giphy.com/media/eJzcR49xNECqI/giphy.gif',
            'https://media0.giphy.com/media/nEZ822P20D1NeEv0lU/giphy.gif',
            'https://media3.giphy.com/media/hvjssaGJ4v66uz7HT6/giphy.gif',
            'https://media2.giphy.com/media/l4hLQ4l8KYkB0Wnp6/giphy.gif',
    
        ]

        let pickedCum = Math.floor(Math.random() * cum.length)

        const cumEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Just Came on ${taggedUser}!!`)
        .setImage(cum[pickedCum])

        message.channel.send(cumEmbed)
    }
}