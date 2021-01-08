module.exports = {
    name: 'scramble',
    execute(message, args) {
        const Discord = require('discord.js')
        let givenword = args.slice(0).join(" ");
        
        function scramble(givenword) {
            var word = givenword.split("")
            n = word.length

            for(var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i+1));
                var tmp = word[i];
                word[i] = word[j]
                word[j] = tmp;
            }
            return word.join("")
        }
       scrambledword = scramble(givenword)

       const embed = new Discord.MessageEmbed()
       .setTitle('Scramble time!')
       .setColor("RANDOM")
       .setDescription("The word is: " + scrambledword)
       .setFooter('You have 30 seconds to try and guess it, the first person to answer correctly ')
         message.channel.send({embed});
         message.delete()

      
       const filter = m => m.content.includes(givenword);
       const collector = message.channel.createMessageCollector(filter, { time: 30000 });
       
       collector.on('collect', m => {
            console.log(`Collected ${m.content}`);
       });
       
       collector.on('end', collected => {
           message.channel.send(`${collected.first().author} got the correct answer first! The answer was ${givenword}`);
           console.log(`Collected ${collected.size} items`);
       });
        


   }
}