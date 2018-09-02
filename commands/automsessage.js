const Discord = require ('discord.js')
let ms = require ('ms');
module.exports.run = (client, message, args) => {
  let general = message.guild.channels.find(c=>c.name === 'general')
  let Description = args[0];
  
  let time = ms(`${args[1]}`)
      
  
    
let embed = new Discord.RichEmbed()  
    .setTitle(Description)
    .setColor('')
  //no joke thats what this is mainly for xD
  

setInterval (function () {
  general.send(embed)
  message.delete()
}, time); //10 sec for testing but we need to be able to edit the day and hrs it sends
     } // 3.6e+6 for an hour

    exports.conf = {
      aliases: ['auto', 'timedmsg' , 'automsg']
    };
          
    exports.help = {
      name: 'automessage',
      description: 'Sends a msg at a given time',
      usage: `${process.env.PREFIX}automsg [message] [day] [time]`
    };