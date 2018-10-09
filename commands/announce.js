const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
 
//========================  Start of Variables  =======================//
    
    
    let  announcement = args.join(" ");
    
//========================  End of Variables  =======================// 
//========================  Start of Embeds  =======================//
    
  const errEmbed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('• Error: 01 •')
        .setDescription('```You do not have **MANAGE_MESSAGES** Permissions```')
  
  const errEmbed2 = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('• Error: 02 •')
        .setDescription('```You did not announce anything```')
    
  const errEmbed3 = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('• Error: 03 •')
        .setDescription('```There was not an "#announcements" channel found```')
  
  const Announcement = new Discord.RichEmbed()
        .setColor('#41baea')
        .setTitle(`📰 Announcement From: ${message.author.username}`)
        .setDescription(announcement)
        .setTimestamp();
  
//========================  End of Error Embeds  =======================//
  
  if  (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send
        (errEmbed).then
          (message.delete()).then
            (msg => msg.delete(5000));
    
  let announcementChannel = message.guild.channels.find(c => c.name === 'announcements')
  if  (!announcementChannel) return message.channel.send
        (errEmbed3).then
          (message.delete()).then
            (msg => msg.delete(5000));

  
  if  (!announcement) return message.channel.send
        (errEmbed2).then 
          (message.delete()).then 
            (msg => msg.delete(5000));


                  
      announcementChannel.send(Announcement)
      message.channel.send
      (`:white_check_mark:New Announcement in ${announcementChannel}`).then
      (message.delete()).then
      (msg => msg.delete(43200000));  //  12hr before deletion if bot isnt restarted in that time
};


    exports.conf = {
    aliases: ['announce']
}
          
    exports.help = {
    name: 'announce',
    description: 'Makes an announcement to #announcements',
    usage: `${process.env.PREFIX}announce [announcement]`
}