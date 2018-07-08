const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name}'s Server info`)
      .setDescription(`====================================`)
        .setThumbnail(message.guild.iconURL)
          .setFooter(`Bot Created by: Ralston & Freak <3`)
            .addField('Server ID:', message.guild.id, true)
            .addField('User Status:', `${message.guild.members.filter(member => member.user.presence.status === 'online').size} Online\n${message.guild.members.filter(member => member.user.presence.status === 'idle').size} Idle\n${message.guild.members.filter(member => member.user.presence.status === 'dnd').size} DnD\n${message.guild.members.filter(member => member.user.presence.status === 'offline').size} Offline`, true)
          .addField('Members:',`${message.guild.members.filter(member => !member.user.bot).size} - Players\n${message.guild.members.filter(member => member.user.bot).size}  - Bots`, true)
        .addField('Channels:', `${message.guild.channels.filter(channel => channel.type === 'voice').size} 🗣 / ${message.guild.channels.filter(channel => channel.type === 'text').size} 📱`, true)
      .addField('Discord Invite', `https://discord.gg/mEtbyHv`)
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