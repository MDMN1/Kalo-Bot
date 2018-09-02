const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
      let timeChannel = message.guild.channels.find(n => n.name === 'time-sheet')
      let clockedinRole = message.guild.roles.find(r => r.name === 'Clocked-In')
      
      
  //creates a new role      
  if  (!clockedinRole) {
      try {
        clockedinRole = await message.guild.createRole({
          name: "Clocked-In",
          color: "#6ef64c",
          permissions: []
        });
            } catch(e){
              console.log(e.stack);
      }
  }
          if (message.member.roles.has(clockedinRole.id)) return message.reply
           ('You are already clocked in').then
           (message.delete()).then
              (msg => msg.delete(5000));
      
    const embed = new Discord.RichEmbed()
      .setTitle('Clocked in 📥')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      
    message.member.addRole(clockedinRole)
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