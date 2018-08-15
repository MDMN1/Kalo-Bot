const Discord = module.require("discord.js");

let Discord_Online = '<:Discord_Online:476580503885971456>'
let Discord_Idle = '<:Discord_Idle:476580503559077899>'
let Discord_DnD = '<:Discord_DnD:476580503164682261>'
let Discord_Offline = '<:Discord_Offline:476580503378591744>'

module.exports.run = async (client, message, args) => {

  const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name}'s Server info`)
      .setDescription(`====================================`)
        .setThumbnail(message.guild.iconURL)
          .setFooter(`Bot Created by: Ralston & Freak <3`)
            .addField('Server ID:', message.guild.id, true)
              .addField('Server IP:', 'play.kalo-mc.com', true)   
              .addField('User Status:', `${Discord_Online}` + 'Online - ' + `${message.guild.members.filter(member => member.user.presence.status === 'online').size}`+`\t\t${Discord_Idle}` + 'Idle - ' + `${message.guild.members.filter(member => member.user.presence.status === 'idle').size}`+`\n${Discord_DnD}` + 'DnD - ' + `${message.guild.members.filter(member => member.user.presence.status === 'DnD').size}`+`\t\t${Discord_Offline}` + 'Offline - ' + `${message.guild.members.filter(member => member.user.presence.status === 'offline').size}`)
            //.addField('User Status:', `${message.guild.members.filter(member => member.user.presence.status === 'online').size} + (Discord_Online)Online\n${message.guild.members.filter(member => member.user.presence.status === 'idle').size} ${Discord_Idle}Idle\n${message.guild.members.filter(member => member.user.presence.status === 'dnd').size} ${Discord_DnD}DnD\n${message.guild.members.filter(member => member.user.presence.status === 'offline').size} ${Discord_Offline}Offline`, true)   
          .addField('Members:',`${message.guild.members.filter(member => !member.user.bot).size} - Players\n${message.guild.members.filter(member => member.user.bot).size}  - Bots`, true)
        .addField('Channels:', `${message.guild.channels.filter(channel => channel.type === 'voice').size} 🗣 / ${message.guild.channels.filter(channel => channel.type === 'text').size} 📱`, true)
      .addField('Discord Invite', `https://discord.gg/45qWGNg`)
    .addField('ServerRoles:', message.guild.roles.map(role => role).join(' | '), true)
    message.channel.send({ embed });
    message.delete();
}
exports.conf = {
    aliases: ['serverinfo', 'sinfo'],
  };
  
  exports.help = {
    name: 'serverinfo',
    description: 'Displays server information',
    usage: `${process.env.PREFIX}serverinfo`
  };