const Discord = require('discord.js');
const ms = require ('ms');
  module.exports.run = (client, message, args) => {

//========================  Start of Variables  =======================//
    
    let  general = message.guild.channels.find(c => c.name === 'general')
    let  text = args.join(" ").split(" | ");
    
//========================  End of Variables  =======================// 
//========================  Start of Embeds  =======================//
    
    const  messageError = new Discord.RichEmbed()
           .setColor('#ed455a')
           .setTitle('• Error: 01 •')
           .setDescription('```Please provide a message after the command\n\nUsage: !automessage <message> | <time>```')
    
    const  timeError = new Discord.RichEmbed()
           .setColor('#ed455a')
           .setTitle('• Error: 02 •')
           .setDescription('```Please provide a time after the message\n\nUsage:!automessage <message> | <time>```')
    
    const  timeError2 = new Discord.RichEmbed()
           .setColor('#ed455a')
           .setTitle('• Error: 03 •')
           .setDescription('```Supplied time can not be less than 24hrs\n\nUsage: !automessage <message>|<time>```')
    
    const  channelError = new Discord.RichEmbed()
           .setColor('#ed455a')
           .setTitle('• Error: 04 •')
           .setDescription('```Channel "#general" was not found```')
    
//========================  End of Embeds  =======================//
    
    if  (message.author.id == process.env.RAL || message.author.id == process.env.FREAK) { 
  

    if  (!general) return message.channel.send
          (channelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    
    if  (!text[0]) return message.channel.send
          (messageError).then
            (message.delete()).then
              (msg => msg.delete(5000));
      
    if  (!text[1]) return message.channel.send
          (timeError).then
            (message.delete()).then
              (msg => msg.delete(5000));
        
    const AutoMessage = new Discord.RichEmbed()
          .setTitle(text[0])  
          .setColor('#41baea')

        setInterval (function () {
        general.send(AutoMessage).then
        (message.delete())
        }, ms(text[1]))
            
      message.channel.send(`Your message has been set to repeat every ${text[1]}`).then
      (message.delete(5000)).then
      (msg => msg.delete(10000))
  }
}
  
  
    exports.conf = {
    aliases: ['auto', 'timedmsg' , 'automsg']
}         
    exports.help = {
    name: 'automessage',
    description: 'Sends a msg at a given time',
    usage: `${process.env.PREFIX}automsg [message] | [time]`
}