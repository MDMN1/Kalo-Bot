const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    
  let timeChannel = message.guild.channels.find(c => c.name === 'time-sheet')
  let clockedinRole = message.guild.roles.find(r => r.name === 'Clocked-In')
  let stuff = args.join(' ')
  
  
   if (!message.member.roles.has(clockedinRole.id)) return message.reply
           ('You are already clocked out').then
           (message.delete()).then
              (msg => msg.delete(5000));
  
  
    const embed = new Discord.RichEmbed()
      .setTitle('Clocked out 📤')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setDescription(stuff)
      .setTimestamp()
      
      message.member.removeRole(clockedinRole)
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