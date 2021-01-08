const Discord = require('discord.js')


module.exports = {
    name: 'boobies',

    execute(message, args) {

        let pics = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5hePFKjikhmnZbgW04c8wbtp1x3vIDvy4w&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxqB3prEhFCIX_1Kj6WbMq-GIK3o7j2_nxg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiZTIF_Kz8YBsIQLopFTj99Xgd_cEDlPCcA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjYKOt9go_2FGyEFVELsSXXKjKUaVFfyY2A&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrN44tycFSkpuCwmOu0mWkereBgpzVy_xJQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlKFmKyqEPTt1Jvuuh9UEyOFufysk2hoj3A&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplD1L97XYuU-j4COKaDWdRRym7nAgXYKaHw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnP7mDSlLkV9ZrV9TGgii92Ygesn5RreKprA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hnGEArb9OKK1oEwT8-iAjYeyfUvmNsSBdw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxieWUXlN2bSLPB01s7ipC9JLgsrOfyMsy2w&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTya-qxn7jzt6R1j2_vMziHTMdyDHqOcqA0tw&usqp=CAU'


        ]


        let pickedPic = Math.floor(Math.random() * pics.length)


        const boobiesEmbed = new Discord.MessageEmbed()
        .setTitle(':eyes:')
        .setImage(pics[pickedPic])
        message.channel.send(boobiesEmbed)
       
    }
}