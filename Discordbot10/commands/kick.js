const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: 'kick',

    execute(message, args) {
        const target = message.mentions.users.first()
    
    if(target !== message.author) {
if(target) {
   const targetmem = message.guild.member(target)
   targetmem.kick("You can put your reason here.")
}
    message.channel.send(`${target} has been kicked!`)
    
} else {
    message.channel.send("You can't kick yourself!")
    return;
}


}

    
}
    