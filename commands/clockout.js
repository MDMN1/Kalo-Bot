const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    
  let timeChannel = message.guild.channels.find(c => c.name === 'modlog')
  
    const embed = new Discord.RichEmbed()
      .setTitle('Clocked out 📤')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      
      timeChannel.send(embed)
      message.delete()
    }
  

    exports.conf = {
      aliases: ['clockout']
    };
          
    exports.help = {
      name: 'clockout',
      description: 'Clocks user out',
      usage: `${process.env.PREFIX}clockout`
    };