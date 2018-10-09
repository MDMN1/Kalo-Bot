const Discord = module.require("discord.js");
  module.exports.run = async (client, message, args) => {
  
  const permError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 01 •')
        .setDescription('```You do not have **KICK_MEMBERS** Permissions```')
    
  const channelError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 02 •')
        .setDescription('```The channel #moderation-logs was not found```')
  
  const userError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 03 •')
        .setDescription('```Please mention a user to kick```') 
    
  const highError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 04 •')
        .setDescription('```You can not kick a user with the same or higher role than yourself```')
  
  const highError2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 05 •')
        .setDescription('```Please mention a user with a role lower than yourself```')
  
  const reasonError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 06 •')
        .setDescription('```You must have a reason to kick a user```')  
  
//========================  End of Error Embeds  =======================//
  
  if  (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send
        (permError).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  const modlog = message.guild.channels.find(c => c.name === 'moderation-logs');
    if (!modlog) return message.channel.send
         (channelError).then
           (message.delete()).then
             (msg => msg.delete(5000));  
  
  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    if  (!user) return message.channel.send
          (userError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  if  (user.highestRole >= message.author.highestRole) return message.channel.send
        (highError).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  const reason = args.join(" ").slice(22);
    
  if  (!reason) return message.channel.send
        (reasonError).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
    const embed = new Discord.RichEmbed()
         .setColor('#ed455a')
         .setAuthor(message.author.tag, message.author.displayAvatarURL)
         .addField('Action:', '`Kicked`', true)
         .addField('__User__', `${user}`, true)
         .addField(`__${user.tag}'s ID__`, user.id, true)
         .addField('Reason:', `${reason}`, true)
  
    user.send(`You have been **KICKED** from **${message.guild.name}** for '*${reason}* '`).then
      message.guild.member(user).kick(reason).then
        modlog.send(embed)
          message.delete()
  }

  exports.conf = {
    aliases: ['kick'],
  };
  
  exports.help = {
    name: 'kick',
    description: 'Kick specified user from the server',
    usage: `${process.env.PREFIX}kick [user] [reason]`
  };