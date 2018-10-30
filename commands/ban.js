const Discord = require('discord.js');
  module.exports.run = async (client, message, args, error) => {
    
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(' '); 
    let modlog = message.guild.channels.find(channel => channel.name === 'moderation-logs');
    
  const  permError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 01 •')
        .setDescription('```You do not have **BAN_MEMBERS** Permissions```')
    if  (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
        (permError).then
        (message.delete()).then
        (msg => msg.delete(5000));

  const  modlogError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 02 •')
        .setDescription('```I can\'t find the channel #moderation-logs```')
    if  (!modlog) return message.channel.send
        (modlogError).then
        (message.delete()).then
        (msg => msg.delete(5000));

  const  userError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 03 •')
        .setDescription('```Please mention a user to ban```')
    if  (!user) return message.channel.send
        (userError).then
        (message.delete()).then
        (msg => msg.delete(5000));

  const  userError2 = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 04 •')
        .setDescription('```Mentioned user is not bannable```')
    if  (user.bannable === false) return message.channel.send
        (userError2).then
        (message.delete()).then
        (msg => msg.delete(5000));

  const  levelError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 05 •')
        .setDescription('```You can\'t ban a user with the same or higher role than yourself```')
    if  (user.highestRole >= message.author.highestRole) return message.channel.send
        (levelError).then
        (message.delete()).then
        (msg => msg.delete(5000));

  const  reasonError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 06 •')
        .setDescription('```You must have a reason to ban a user```')
    if  (reason.length < 3) return message.channel.send
        (reasonError).then
        (message.delete()).then
        (msg => msg.delete(5000))

  const  BanMessage = new Discord.RichEmbed()
        .setDescription(`You have been Banned From ${message.guild.name}`)
        .setImage('https://cdn.glitch.com/c4d13276-5b80-4293-88a3-29ef7fdcde4d%2FTreasure_Ban.gif?1536981792732')

  const  BanEmbed = new Discord.RichEmbed()
         .setColor('#ed455a')
         .setAuthor(message.author.tag, message.author.displayAvatarURL)
         .addField('Action:', '`Banned`', true)
         .addField('__User__', `${user}`, true)
         .addField(`__${user.tag}'s ID__`, user.id, true)
         .addField('Reason:', `${reason}`, true)
  
  message.guild.ban(user)
    .catch(err => console.log(err.message))
      modlog.send(BanEmbed).then
        user.send(BanMessage)
          .catch(err => console.log(err.message)).then
            message.delete();
};

    exports.conf = {aliases: ['bannish', 'banhammer']}
    exports.help = {
    name: 'ban',
    description: 'Ban specified user from the server',
    usage: `${process.env.PREFIX}ban [user] [reason]`}