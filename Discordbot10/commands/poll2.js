const Discord = require('discord.js')
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)

module.exports = {
    
    name: 'poll',
    description: 'embed test lol',
    
	execute(message, args) {

        if(!args.length) {

            const errorEmbed = new Discord.MessageEmbed()
            .setTitle('You need to include a question!')
            message.channel.send(errorEmbed)
        }
        
if(args.length) {
const pollEmbed = new Discord.MessageEmbed()
.setColor(embedColor)
.setAuthor(embedAuthor, icon)
.setTitle('Poll Time!')
.addFields(
    { name: 'Requested by:', value: (`<@${message.author.id}>`) }, 
)
.setDescription(args.join(' '))



;

message.channel.send({embed: pollEmbed}).then(embedMessage => {
    embedMessage.react("👍");
    embedMessage.react("👎")
});
}
}}

