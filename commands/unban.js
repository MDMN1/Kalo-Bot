const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const errEmbed = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You do not have **BAN_MEMBERS** Permissions```')
    
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('````I can\'t find the channel #moderation-logs````')
  
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You Must Supply a User ID to unban```')
    
  const errEmbed4 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You cannot unban a member with the same or higher role than yourself```')
  
  const errEmbed5 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must have a reason to unban a user for verification purposes```')
  
  const reason = args.slice(1).join(' ');
  const user = args[0];
  const modlog = message.guild.channels.find('name', 'moderation-logs');
  
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
        (errEmbed).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (!modlog) return message.channel.send
        (errEmbed2).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (!user) return message.channnel.send
        (errEmbed3).catch(console.error).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (user.highestRole >= message.author.highestRole) return message.channel.send
        (errEmbed4).then
          (message.delete()).then
            (msg => msg.delete(3000));
  
  if  (!reason) return message.channel.send
        (errEmbed5).then
          (message.delete()).then
            (msg => msg.delete(5000));

  message.guild.unban(`<@!${user}>`);

    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.displayAvatarURL)
    .setColor('#73e878')
    .addField('Staff Member:', `${message.author.tag}`, true)
    .addField('Action:', '`Unbanned`', true)
    .addField('User:', `${user}`, true)
    .addField('Reason:', `${reason}`, true)
    modlog.send(embed)
    
    message.delete()
  }
  exports.conf = {
    aliases: ['unban']
  };
  
  exports.help = {
    name: 'unban',
    description: 'Un-Ban specified user from the server',
    usage: `${process.env.PREFIX}unban [userID] [reason]`
  };