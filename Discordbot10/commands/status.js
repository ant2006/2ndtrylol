const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)
const botInviteLink = ('https://discord.com/api/oauth2/authorize?client_id=772558406652788737&permissions=0&scope=bot')

module.exports = {
    name: 'status',

    execute(message, args) {
        const client = message.client;


       


        if(!args.length) {
            message.channel.send('Please include A status! Example "!status whatever,status,you,want,here STREAMING')
            return;
        }

        const filter = (m) => m.author.id === message.author.id && (message.author.client)
        const collector = new Discord.MessageCollector(message.channel, filter, { time: 50000, max: 1 });
        const askEmbed = new Discord.MessageEmbed()
        .setTitle('What would you like the Activity to be? Example "PLAYING", "WATCHING", "LISTENING" or "STREAMING"? ***Note, if you want to do streaming, you have to do "STREAMING <twitch or other link here>*** **Make sure they are capital**. Do "cancel" to cancel it.')
        .setColor(embedColor)
        .setAuthor(embedAuthor, icon)
        
        message.channel.send(askEmbed)
        
        collector.on('collect', m => {

            if(m.content.includes('cancel')) {

                collector.stop()
                message.channel.send('Cancelled.')
            }
            

            if(m.content.includes('STREAMING')) {
                console.log('It had STREAMING in it.')

            const mcontent = m.content

            if(m.content.split(' ')[1]) {

            client.user.setPresence({
                status: 'online',
                activity: {
                    name: '' + (args.join(' ')),
                    type: ('' + m.content.split(' ')[0]),
                    url: ('' + m.content.split(' ')[1])


                
            
                }

                
            
                }
            )

            }

            message.channel.send('Status Changed')

            
            } if(!m.content.includes('STREAMING')) {

                console.log("It didn't have STREAMING in it.")



                client.user.setPresence({
                    status: 'online',
                    activity: {
                        name: '' + (args.join(' ')),
                        type: ('' + m.content.split(' ')[0])

            }
        
        }
    
    )

    message.channel.send('Status Changed')
    }
}
        )}


       }
       
        
        
    
       
    
    