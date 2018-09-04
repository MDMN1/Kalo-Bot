const Discord = require ('discord.js')
let ms = require ('ms');
module.exports.run = (client, message, args) => {
  let general = message.guild.channels.find(c=>c.name === 'general')
 // let Description = args[0];
  
  //let time = ms(`${args[1]}`)
  
  let test = args.join(" ").split(" | ");
  console.log(test[0])
      //god level

    
    message.delete()
let embed = new Discord.RichEmbed()  
    .setTitle(test[0])  
    .setColor('#41baea')

setInterval (function () {
  general.send(embed)
  
}, ms(test[1])); 



 }

    exports.conf = {
      aliases: ['auto', 'timedmsg' , 'automsg']
    };
          
    exports.help = {
      name: 'automessage',
      description: 'Sends a msg at a given time',
      usage: `${process.env.PREFIX}automsg [message] [day] [time]`
    };