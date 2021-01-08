module.exports = {
    name: 'lolidk',

    execute(message, args) {

        const yourmom = {
            name: 'nikki',
            age: '35',
            gender: 'female'
        }
message.channel.send(`${yourmom.age}`)
message.channel.send(`${yourmom.name}`)
message.channel.send(`${yourmom.gender}`)
    }
}