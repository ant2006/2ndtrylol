//All of the constants
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./myconfig10.json');
const client = new Discord.Client();
const cheerio = require('cheerio');
const request = require('request');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const embedAuthor = ('This bot was made by Tomori#0582!')
const embedColor = ('RANDOM')
const icon = (`https://i.imgur.com/5rfE3hT.png'`)
const botInviteLink = ('https://discord.com/api/oauth2/authorize?client_id=772558406652788737&permissions=0&scope=bot')
client.moderationCommands = new Discord.Collection();
const modCommands = fs.readdirSync('./commands/Moderation').filter(file => file.endsWith('.js'));



//Telling the bot where to look for the commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

let activities = [
	'with ur dad',
	'with ur mom',
	'idk at this point',
	'yourmomgay lol',
	'running outta ideas xD',
	'bad',
	'your dad is very homo lol'
]




//Once the bot is up and running, display 'Ready' in the console and set the bot's status
client.once('ready', () => {
	const serverCount = (client.guilds.cache.size)

	setInterval(() => {
		let pickedActivity = Math.floor(Math.random() * activities.length);
	
	client.user.setPresence({
		status: 'online',
		activity: {
			name: `${activities[pickedActivity]}`,
			type: 'STREAMING',
			url: 'https://www.twitch.tv/xdutie'
		}
		
	
})	

}, 5000);

console.log('Ready!');
    


//Seeing if the message starts with the prefix
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;


	
//Telling the bot what arguments are
	const args = message.content.slice(prefix.length).trim().split(/ +/)
	const commandName = args.shift().toLowerCase();

//Checking to see if the command you sent is one of the commands in the commands folder	
const command = client.commands.get(commandName);	
if  (!client.commands.has(commandName)) return;
	console.log(`Command executed, ${message}, by ${message.author.username}, ID = (${message.author.id})`)
	


	

//Try to execute the command.
	try {
		command.execute(message, args);
	
//If there's an error, don't crash the bot.	
	} catch (error) {
		console.error(error);
		
//Sends a message on discord telling you there was an error
		message.reply('there was an error trying to execute that command!');
	}

		

		
		


		
	


 

	
	
	
	

	
	
	
	
	
	
	

	
	})})


	client.on('message', message => {
		if(message.content === "lol") {
			message.channel.send('lmao')
			if(message.author.client) return;
		}
	})

	
				
			
		
		
	

client.login(token);
