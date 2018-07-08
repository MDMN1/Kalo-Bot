const fs = module.require("fs");
const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {

  const reason = args.join(" ").slice(22);
  const modlog = message.guild.channels.find('name', 'moderation-logs');
  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  let role = message.guild.roles.find(r => r.name === "Muted");
  
  const errEmbed = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You do not have **MUTE_MEMBERS** Permissions```')
    
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('````I can\'t find the channel #moderation-logs````')
  
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```Please mention a user to mute```') 
    
  const errEmbed4 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You cannot kick a user with the same or higher role than yourself```')
  
  const errEmbed5 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must have a reason to mute this user```') 
  
  
     if(!message.author.id === process.env.RALID || message.author.id !== process.env.FREAKID || !message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send
        (errEmbed).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (!modlog) return message.channel.send
        (errEmbed2).then
          (message.delete()).then
            (msg => msg.delete(5000))
  
  if  (!user) return message.channel.send
        (errEmbed3).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (user.id === message.author.id) return message.channel.send
        (`You can not mute yourself ${message.author}`).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (user.highestRole >= message.author.highestRole) return message.channel.send
        (errEmbed4).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  if  (!reason) return message.channel.send
        (errEmbed5).then
          (message.delete()).then
            (msg => msg.delete(5000))

  if(!role) {
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
    } catch(e){
        console.log(e.stack);
      }
  }
  
  if  (message.guild.member(user).roles.has(role.id)) return message.channel.send
        (`${user} is already muted`);
  await message.guild.member(user).addRole(role);

  const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.displayAvatarURL)
      .setColor('#ed455a')
        .addField('Staff Member:', message.author.tag, true)
          .addField('Action:', '`Muted`', true)
            .addField('User:', user, true)
              .addField('Reason:', reason, true)
                .setTimestamp();
    modlog.send(embed)
    user.send(`You have been **MUTED** on **${message.guild.name}** for '*${reason}* '`).then
    message.delete();
};
exports.conf = {
    aliases: ['m'],
  };
  
  exports.help = {
    name: 'mute',
    description: 'Mutes specified user on the server',
    usage: `${process.env.PREFIX}mute [user] [reason]`
  };