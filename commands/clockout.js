const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
  
//========================  Start of Variables  =======================//
    
  let timeChannel = message.guild.channels.find(c => c.name === 'work-clock')
  let clockedinRole = message.guild.roles.find(r => r.name === 'Clocked-In')
  let breakRole = message.guild.roles.find (b => b.name === 'On-Break')
  let stuff = args.join(' ')
  
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//
  
  const ClockOut = new Discord.RichEmbed()
        .setTitle('Clocked out 📤')
        .setColor('#6DCFF6')
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .addField('__Worked on:__', stuff ? stuff : "Notin")
        .setFooter(message.createdAt)
        .setTimestamp()
  
  const breakError = new Discord.RichEmbed()
        .setTitle('• Error: 01 •')
        .setColor('#ed455a')
        .setDescription('```You need to leave break before you can clockout```')
    
  const ClockinError = new Discord.RichEmbed()
        .setTitle('• Error: 02 •')
        .setColor('#ed455a')
        .setDescription('```You are not clocked in.```')
  
  const descriptionError = new Discord.RichEmbed()
        .setTitle('• Error: 03 •')
        .setColor('#ed455a')
        .setDescription('```You must describe what you worked on```')
      
//========================  End of Embeds  =======================//
    
    if  (!message.member.roles.has(clockedinRole.id)) return message.channel.send
          (ClockinError).then
            (message.delete()).then
              (msg => msg.delete(3000));
    
    if  (message.member.roles.has(breakRole.id)) return message.channel.send
          (breakError).then
            (message.delete()).then
              (msg => msg.delete(3000));
    
    if  (!stuff) return message.channel.send
          (descriptionError).then
            (message.delete()).then
              (msg => msg.delete(3000));
    
    
    //message.member.removeRole(breakRole)
    message.member.removeRole(clockedinRole)
    timeChannel.send(ClockOut);
    (message.author.send(ClockOut)
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