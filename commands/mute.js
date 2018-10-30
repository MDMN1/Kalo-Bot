const fs = module.require("fs");
const Discord = require(`discord.js`);
  module.exports.run = async (client, message, args) => {
    
    let modlog = message.guild.channels.find(channel => channel.name === 'moderation-logs');
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    let role = message.guild.roles.find(role => role.name === "Muted");
    let reason = args.join(" ").slice(22);
  
  const  permError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 01 •')
        .setDescription('```You do not have **MUTE_MEMBERS** Permissions```')
    if  (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send
        (permError).then
        (message.delete()).then
        (msg => msg.delete(5000));
    
  const  modlogError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 02 •')
        .setDescription('````I can\'t find the channel #moderation-logs````')
    if  (!modlog) return message.channel.send
        (modlogError).then
        (message.delete()).then
        (msg => msg.delete(5000))
  
  const  userError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 03 •')
        .setDescription('```Please mention a user to mute```')
    if  (!user) return message.channel.send
        (userError).then
        (message.delete()).then
        (msg => msg.delete(5000));
    
  const  levelError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 04 •')
        .setDescription('```You cannot kick a user with the same or higher role than yourself```')
    if  (user.highestRole >= message.author.highestRole) return message.channel.send
        (userError).then
        (message.delete()).then
        (msg => msg.delete(5000));
  
  const  reasonError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 05 •')
        .setDescription('```You must have a reason to mute this user```')
    if  (!reason) return message.channel.send
        (reasonError).then
        (message.delete()).then
        (msg => msg.delete(5000))
    
  const  MuteMessage = new Discord.RichEmbed()
        .setDescription('You have been Muted')
        .setImage('https://cdn.glitch.com/c4d13276-5b80-4293-88a3-29ef7fdcde4d%2FShh_Mute.gif?1536982172087')
    
  if  (user.id === message.author.id) return message.channel.send
        (`You can not mute yourself ${message.author}`).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (!role) {
              try {
                    role = await message.guild.createRole({
                    name: "Muted",
                    color: "#0090ff",
                    permissions: []
                    });

              message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              CONNECT: false,
              SPEAK: false
                });
              });
            } catch(e) {console.log(e.stack)}
      }
  
  if  (message.guild.member(user).roles.has(role.id)) return message.channel.send
        (`${user} is already muted`);
          await message.guild.member(user).addRole(role);

    const embed = new Discord.RichEmbed()
         .setColor('#ed455a')
         .setAuthor(message.author.tag, message.author.displayAvatarURL)
         .addField('Action:', '`Muted`', true)
         .addField('__User__', `${user}`, true)
         .addField(`__${user.tag}'s ID__`, user.id, true)
         .addField('Reason:', `${reason}`, true)
    
    modlog.send(embed)
      user.send(MuteMessage)
        message.delete()
          try  { await user.send
                  (`You have been **MUTED** on **${message.guild.name}** for '*${reason}* '`)
                }  catch(e){e}
};

    exports.conf = {
    aliases: ['m', 'silence'],}
    exports.help = {
    name: 'mute',
    description: 'Mutes specified user on the server',
    usage: `${process.env.PREFIX}mute [user] [reason]`}