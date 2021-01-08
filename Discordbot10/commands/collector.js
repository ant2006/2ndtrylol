const Discord = require('discord.js');
const client = new Discord.Client()
const m = 'idk'

module.exports = {
    name: 'collectortest2',

    execute(message, args) {
      

      message.channel.send('What collection?')

      const filter = m => m.content.includes('discord');
const collector = message.channel.createMessageCollector(filter, { max: 1 }, { time: 15000 });

collector.on('collect', m => {
    console.log(`Collected ${m.content}`);
    message.channel.send(`So, you typed ${m.content}`)
    
});

collector.on('end', collected => {
    console.log(`Collected ${collected.content} items`);
    
   
});


    }



}