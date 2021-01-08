const Discord = require('discord.js');







module.exports = {
	name: 'date',
    
    execute(message, args) {
      let m = args.slice(0).join(" ");
      const taggedUser = message.mentions.users.first();

      const scenariosMessage = [
        `You message ${taggedUser}, They leave you on read`,
        `You message ${taggedUser}, they agree to go on a date!`
      ]

      const scenariosComeToTheirHouse = [
        `You rock up to ${taggedUser}'s house, they call the cops and you get arrested`,
        `Your rock up to ${taggedUser}'s house, they let you in and you have a cup of tea`
      ]
      
      const scenarios = [
        'message?',
        'Come to their house?',
        'Call?'
    ]
      const pickedscenariosMessage = Math.floor(Math.random() * scenariosMessage.length);
      const pickedscariousComeToTheirHouse = Math.floor(Math.random() * scenariosComeToTheirHouse.length)

      const embedOne = new Discord.MessageEmbed()
      .setTitle('Which will you pick?')
      .setDescription('**message, come to their house, or call?**')
      .setColor('RANDOM')

      message.channel.send(embedOne)
    
    const filter = m => m.content.includes('message') && m.author.id === message.author.id
const collector = message.channel.createMessageCollector(filter, { max: 1 }, { time: 15000 });

collector.on('collect', m => {
    console.log(`Collected ${m.content}`);
    collector.stop()
    message.channel.send(`${scenariosMessage[pickedscenariosMessage]}`)
    
    
});



collector.on('end', collected => {
    console.log(`Collected ${collected.size} items`);

    
    
   
});

const filter2 = m => m.content.includes('come to their house') && m.author.id === message.author.id
const collector2 = message.channel.createMessageCollector(filter2, { max: 1 }, { time: 15000 });

collector2.on('collect', m => {
    console.log(`Collected ${m.content}`);
    collector2.stop()
    message.channel.send(`${scenariosComeToTheirHouse[pickedscariousComeToTheirHouse]}`)
    
    
});

collector.on('end', collected => {
    console.log(`Collected ${collected.size} items`);
    })
  
  }}