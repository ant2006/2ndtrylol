const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'userstats',

    execute(message, args) {
        const client = message.client;

        let player = args[0];
        async function getplayerdata() {
            const response = await fetch(`https://api.slothpixel.me/api/players/${player}`);
            const data = await response.json();
            const { BedWars } = data;
            let number1 = BedWars.wins
            message.channel.send(number1)
            console.log(number1)

        }

        getplayerdata()
    }
}