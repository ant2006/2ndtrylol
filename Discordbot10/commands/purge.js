module.exports = {
    name: 'purge',

    execute(message, args) {
  
  if (parseInt(args) < 100) {
    message.channel.bulkDelete(parseInt(args))
    
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
      message.channel.send(`${args} messages deleted`)
  }

  if (parseInt(args) == 100) {
    message.channel.bulkDelete(parseInt(args))
    
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
      message.channel.send(`${args} messages deleted`)

     
      
    }


    if (parseInt(args) > 100) {
        const pickedNumber = (parseInt(args)) - 100

        if (pickedNumber < 100) {
           message.channel.bulkDelete(pickedNumber)
           message.channel.delete(100)
        }

        if (pickedNumber > 100) {
          const secondPickedNumber = pickedNumber - 100
          message.channel.bulkDelete(secondPickedNumber)
          message.channel.bulkDelete(200)

          if (secondPickedNumber > 100) {
            message.channel.send('You cant delete that amount of messages!')
          }
        }
    }
}}