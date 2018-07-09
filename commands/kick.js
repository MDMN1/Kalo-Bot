const Discord = module.require("discord.js");
module.exports.run = async (client, message, args) => {
  
  const reason = args.join(" ").slice(22);
  const modlog = message.guild.channels.find('name', 'moderation-logs');
  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  
  const errEmbed = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You do not have **KICK_MEMBERS** Permissions```')
    
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```I can\'t find the channel #moderation-logs```')
  
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```Please mention a user to kick```') 
    
  const errEmbed4 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You cannot kick a user with the same or higher role than yourself```')
  
  const errEmbed5 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must have a reason to kick a user```')  
  
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send
       (errEmbed).then
         (message.delete()).then
           (msg => msg.delete(5000));
  
  if (!modlog) return message.channel.send
       (errEmbed2).then
         (message.delete()).then
           (msg => msg.delete(5000));  
 
  if (message.mentions.users.size < 1) return message.channel.send
       (errEmbed3).then
         (message.delete()).then
           (msg => msg.delete(5000));
  
  if (user.highestRole >= message.author.highestRole) return message.channel.send
       (errEmbed4).then
         (message.delete()).then
           (msg => msg.delete(5000));
  
  if (!reason) return message.channel.send
       (errEmbed5).then
         (message.delete()).then
           (msg => msg.delete(5000));
  
   const embed = new Discord.RichEmbed()
     .setThumbnail(message.author.displayAvatarURL)
       .setColor('#ed455a')
         .addField('Staff Member:', message.author.tag, true)
           .addField('Action:', '`Kicked`', true)
             .addField('User:', user, true)
               .addField('Reason:', reason, true)
  
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