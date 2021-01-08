const Discord = require('discord.js');
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)
const botInviteLink = ('https://discord.com/api/oauth2/authorize?client_id=772558406652788737&permissions=0&scope=bot')





module.exports = {
    name: 'newyear',
    
    
    

    execute(message, args) {

        let pics = [
            'https://i.imgur.com/AOhhqrn.png',
            'https://i.imgur.com/aIglfkX.jpeg',
            'https://i.imgur.com/MxHU08k.jpeg',
            'https://i.imgur.com/mjuxwej.jpg',
            'https://i.imgur.com/AB7zvpL.jpeg',
            'https://i.imgur.com/kPaWX2e.gif',
            'https://i.imgur.com/9sEK5az.png',
            'https://i.imgur.com/PMyXxqi.jpg',
            'https://i.imgur.com/eueEb7v.jpeg',
            'https://i.imgur.com/VoTwDbG.jpg'
        ]
        
        let pickedPic = Math.floor(Math.random() * pics.length)
        

        const newYearEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(embedAuthor, icon)
        .setImage(pics[pickedPic])
        .setTitle('Happy New Year!')


        message.channel.send(newYearEmbed)
    }
    
}