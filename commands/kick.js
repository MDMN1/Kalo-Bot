const Discord = module.require("discord.js");
  module.exports.run = async (client, message, args) => {
    
    let modlog = message.guild.channels.find(channel => channel.name === 'moderation-logs')
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    let reason = args.join(" ").slice(22);
  
  const permError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 01 •')
        .setDescription('```You do not have **KICK_MEMBERS** Permissions```')
    if  (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send
        (permError).then
        (message.delete()).then
        (msg => msg.delete(5000));
    
  const channelError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 02 •')
        .setDescription('```The channel #moderation-logs was not found```')
    if  (!modlog) return message.channel.send
        (channelError).then
        (message.delete()).then
        (msg => msg.delete(5000));
  
  const userError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 03 •')
        .setDescription('```Please mention a user to kick```')
    if  (!user) return message.channel.send
        (userError).then
        (message.delete()).then
        (msg => msg.delete(5000));
    
  const highError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 04 •')
        .setDescription('```You can not kick a user with the same or higher role than yourself```')
    if  (user.highestRole >= message.author.highestRole) return message.channel.send
        (highError).then
        (message.delete()).then
        (msg => msg.delete(5000));
  
  // const highError2 = new Discord.RichEmbed()
  //       .setColor('#ed455a')
  //       .setTitle('• Error: 05 •')
  //       .setDescription('```Please mention a user with a role lower than yourself```')
  
  const reasonError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 06 •')
        .setDescription('```You must have a reason to kick a user```')
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
};

    exports.conf = {aliases:[]};
    exports.help = {
    name: 'kick',
    description: 'Kick specified user from the server',
    usage: `${process.env.PREFIX}kick [user] [reason]`}