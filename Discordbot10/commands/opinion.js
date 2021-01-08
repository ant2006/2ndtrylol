const Discord = require('discord.js')
const client = new Discord.Client()

let botsOpinion = [
    "Boooooooooooo!",
    "Ew no",
    "Don't even talk to me",
    "No. Just, No.",
    "Why are you asking me?",
    "That's kinda niggerish"
]



module.exports = {
    name: 'opinion',

    execute(message, args) {
        let pickedOpinion = Math.floor(Math.random() * botsOpinion.length);
        message.channel.send(botsOpinion[pickedOpinion])

        
    }
}