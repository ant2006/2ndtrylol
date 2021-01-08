const Discord = require('discord.js')

module.exports = {
    name: 'bitch',

    execute(message, args) {

        
        let m = args.slice(0).join(" ");
        const client = message.client;
        
        message.channel.send('Corvette')
        message.channel.send('Corvette')

        const filter = (m) => m.author.id === message.author.id && (m.content.includes('hop'));
        console.log('filter',filter);
        const collector = new Discord.MessageCollector(message.channel, filter, { time: 50000, max: 1 });

        collector.on('collect', m => {
            console.log(`Collected ${m.content}`)

            collector.on('end', d => {
                collector.stop()
                message.channel.send(`They was like, "Popp, why you walk like that?`)
                message.channel.send(`Why you talk like that?`)
                message.channel.send(`Why you walk like that?"`)
    }
        )})}}