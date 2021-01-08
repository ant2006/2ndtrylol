const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
const snekfetch = require('snekfetch');
let reddit = [
    "meme",
    "dankmeme",
    "funny",
    "memes",
]

    let subreddit = reddit[Math.floor(Math.random () * reddit.length)];

    
module.exports = {
    name: 'meme',
	description: 'sends a meme',
	execute(message, args) {
        
        
    randomPuppy(subreddit).then(url => {
        snekfetch.get(url).then(async res => {
        
const memeEmbed = new Discord.MessageEmbed()
    .setTitle(`From the subreddit: ${subreddit}`)
    .setImage('' + url)

    message.channel.send(memeEmbed)  
        
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));

        
        

        
    
    
          
        

    }
}