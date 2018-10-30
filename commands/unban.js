const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const permError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 01 •')
        .setDescription('```You do not have **BAN_MEMBERS** permissions```')
    
  const modlogError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 02 •')
        .setDescription('````I can\'t find the channel #moderation-logs````')
  
  const userError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 03 •')
        .setDescription('```You must supply a user ID to unban```')
  
  const userError2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 04 •')
        .setDescription('```ID\'s are numbers not letters...```')
  
  const userError3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 05 •')
        .setDescription('```This user is not banned```')
    
  const levelError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 06 •')
        .setDescription('```You cannot unban a member with the same or higher role than yourself```')
  
  const reasonError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 07 •')
        .setDescription('```You must have a reason to unban a user for verification purposes```')

//========================  End of Error Embeds  =======================//

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
        (permError).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  const modlog = message.guild.channels.find(channel => channel.name === 'moderation-logs');
    if  (!modlog) return message.channel.send
          (modlogError).then
            (message.delete()).then
              (msg => msg.delete(5000));

  let user = args[0];
    if  (!user) return message.channel.send
          (userError).catch(console.error).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  if  (isNaN(args[0])) return message.channel.send
        (userError2).catch(console.error).then
          (message.delete()).then
            (msg => msg.delete(5000));

  if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (levelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  
  const banList = await message.guild.fetchBans();
  
 // console.log(banList.map(s => s.users.id))
  
  if (!user.id === banList) return message.channel.send
      (userError3).then
        (message.delete()).then
          (msg => msg.delete(5000));
  
  const reason = args.slice(1).join(' ');
   if (!reason) return message.channel.send
        (reasonError).then
          (message.delete()).then
            (msg => msg.delete(5000));

  message.guild.unban(user);

    const embed = new Discord.RichEmbed()
         .setColor('#73e878')
         .setAuthor(message.author.tag, message.author.displayAvatarURL)
         .addField('Action:', '`Un-Banned`', true)
         .addField('__User__', `${user}`, true)
         .addField(`__${user.tag}'s ID__`, user.id, true)
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