module.exports = {
    name: 'statusreset',

    execute(message, args) {
const client = message.client;
client.user.setPresence({
    status: 'online',
    activity: {
        name: `in ${client.guilds.cache.size} servers, and ${client.channels.cache.size} channels!`,
        type: 'STREAMING',
        url: 'https://www.twitch.tv/xdutie'
    }

})	
    }
}