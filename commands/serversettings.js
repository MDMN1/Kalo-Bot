const Discord = require(`discord.js`)
const db = require ('quick.db')

exports.run = async (client, message) => {
    if(message.author.id === process.env.RAL || message.author.id === process.env.FREAK) {

 let test = await db.fetch(`serverSettings_${message.guild.id}`);
      console.log(test)
  let welcome = await db.fetch(`serverSettings_${message.guild.id}`, {target: "welcomeChannel"}); 
  let leave = await db.fetch(`serverSettings_${message.guild.id}`, {target: "leaveChannel"});
      
  const embed = new Discord.RichEmbed()
  .setTitle('Server Settings')
  .addField('__Welcome Channel__', `<#${welcome}>`)
  .addField('__Leave Channel__', `<#${leave}>`)

  message.channel.send(embed)
      message.delete()
 
    }
  }    
  exports.conf = {
    aliases: ['ss', 'config'],
  };
  
  exports.help = {
    name: 'serversettings',
    description: 'serversettings',
    usage: `${process.env.PREFIX}serversettings`
  };