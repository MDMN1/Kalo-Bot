const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
  let timeChannel = message.guild.channels.find(c => c.name === 'work-clock')
  let clockedinRole = message.guild.roles.find(r => r.name === 'Clocked-In')
  let stuff = args.join(' ')
  
   if (!message.member.roles.has(clockedinRole.id)) return message.reply
      ('You are already clocked out').then
      (message.delete()).then
      (msg => msg.delete(3000));
  
  if  (!stuff) return message.reply
      ('You must describe what you worked on.').then
      (message.delete()).then
      (msg => msg.delete(3000));
  
    const embed = new Discord.RichEmbed()
          .setTitle('Clocked out 📤')
          .setColor('#6DCFF6')
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .addField('__Worked on:__', stuff)
          .setFooter(message.createdAt)
          .setTimestamp()
      
    message.member.removeRole(clockedinRole)
    timeChannel.send(embed);
    (message.author.send(embed)
    .catch(err => console.log(err.message))).then
    (message.delete())
};
  

    exports.conf = {
    aliases: ['clockout']
}         
    exports.help = {
    name: 'clockout',
    description: 'Clocks user out',
    usage: `${process.env.PREFIX}clockout`
}