const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

    const user = message.mentions.users.first() || message.guild.members.get(args[0]);
    const modlog = message.guild.channels.find(n => n.name === 'moderation-logs');
    const reason = args.slice(1).join(' ');
  
  const errEmbed = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You do not have **BAN_MEMBERS** Permissions```')
    
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```I can\'t find the channel #moderation-logs```')
  
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```Please mention a user to ban or the user is already banned```') 
    
  const errEmbed4 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You can\'t ban a user with the same or higher role than yourself```')
  
  const errEmbed5 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must have a reason to ban a user```')
  
  
    if  (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
          (errEmbed).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    if  (!modlog) return message.channel.send
          (errEmbed2).then
            (message.delete()).then (msg => msg.delete(5000));  
  
    if  (!user) return message.channel.send
          (errEmbed3).then
            (message.delete()).then
              (msg => msg.delete(5000));

    if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (errEmbed4).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    if  (reason.length < 3) return message.channel.send
          (errEmbed5).then
            (message.delete()).then
              (msg => msg.delete(5000))
  
    user.send(`You have been **BANNED** from **${message.guild.name}** for '*${reason}* '`).then
        message.guild.ban(user);
      
    const embed = new Discord.RichEmbed()
      .setThumbnail(message.author.displayAvatarURL)
        .setColor('#ed455a')
          .addField('Staff Member:', `${message.author.tag}`, true)
          .addField('Action:', '`Banned`', true)
        .addField('User:', `${user}\n${user.id}`, true)
      .addField('Reason:', `${reason}`, true)
        modlog.send(embed)
          message.delete();
    };

  exports.conf = {
    aliases: ['ban', 'b'],
  };
  
  exports.help = {
    name: 'ban',
    description: 'Ban specified user from the server',
    usage: `${process.env.PREFIX}ban [user] [reason]`
  };