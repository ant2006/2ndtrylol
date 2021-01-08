const Discord = require('discord.js')


module.exports = {

    name: 'collectortest',

    execute(message, args) {
        let m = args.slice(0).join(" ");
        const client = message.client;
        
        message.channel.send('Hello! What is your name?')

        const filter = (m) => m.author.id === message.author.id && (message.author.client);
        console.log('filter',filter);
        const collector = new Discord.MessageCollector(message.channel, filter, { time: 10000, max: 1 });

        collector.on('collect', m => {
            console.log(`Collected ${m.content}`)

            collector.on('end', d => {
                collector.stop()
                message.channel.send(`And your second name, ${m}?`)
                
            })
             })

             const filter2 = m => m.content.startsWith('!vote');
             // Errors: ['time'] treats ending because of the time limit as an error
             message.channel.awaitMessages(filter2, { max: 1, time: 10000 })
               .then(collected => {
                   console.log(collected.size),
                   message.channel.send(collected.content)
               
               .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
        if(message.author.client) return;
            
        
                  }
                )}

            
            
            
           

     

            }
