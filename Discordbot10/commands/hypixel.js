const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'hypixel',

    execute(message, args) {
       const client = message.client;

       let item = args[0];
        async function getproductdata() {
            const response = await fetch(`https://api.slothpixel.me/api/skyblock/bazaar/${item}`);
            const data = await response.json();
            const { quick_status } = data;
            let number1 = quick_status.sellPrice
            let num1 = number1.toFixed(1);
            let number2 = quick_status.buyPrice
            let num2 = number2.toFixed(1);

            const bazaarEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Bazaar info for ${item}`)
            .addFields(
                {
                name: 'Buy Price:',
                value: `${num2}`
                },

            {
                name: 'Sell price:',
                value: `${num1}`
            }
            )
            message.channel.send(bazaarEmbed);
        }
        getproductdata();
}}
    
