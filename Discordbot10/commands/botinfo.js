const Discord = require('discord.js');


module.exports = {
	name: 'botinfo',
    description: 'embed test lol',
    
	execute(message, args) {
        const client = message.client
            message.channel.send(`I am serving on ${client.guilds.cache.size} servers!`);
       
    
    }} 

        
        

    
