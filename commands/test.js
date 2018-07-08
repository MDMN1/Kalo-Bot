const Discord = require(`discord.js`);
  module.exports.run = async (client, message, args, con) => {
    if(message.author.id == process.env.RALID || message.author.id == process.env.FREAKID)
        message.channel.send('Test command for testing things')
          console.log('testing command for testing things')
//comment above code out if adding code to test
  
  
  
  
  
  
  
  
  
  
  
  }    
  exports.conf = {
    aliases: ['t','testing'],
  };
  
  exports.help = {
    name: 'test',
    description: 'Test any code in this file',
    usage: `${process.env.PREFIX}test`
  };