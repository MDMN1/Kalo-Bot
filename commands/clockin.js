const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
      let timeChannel = message.guild.channels.find(c => c.name === 'modlog')
 
    const embed = new Discord.RichEmbed()
      .setTitle('Clocked in 📥')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      
     timeChannel.send(embed)
      message.delete()
    }
  

    exports.conf = {
      aliases: ['clockin']
    };
          
    exports.help = {
      name: 'clockin',
      description: 'Clocks user in',
      usage: `${process.env.PREFIX}clockin`
    };