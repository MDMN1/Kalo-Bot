const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
  
	  let user = message.mentions.users.first() || client.users.get(args[0]) || message.author;
  
		const embed = new Discord.RichEmbed()
          .setAuthor(`${user.username}'s Information`)
          .setDescription(`-------------------------------------------------------`)
          .setThumbnail(user.displayAvatarURL)
          .addField("Full Username", user.tag, true)
          .addField("ID:", user.id, true)
          .addField("Nickname:", message.guild.member(user).nickname ? message.guild.member(user).nickname : "***None***", true)
          .addField('Status:', user.presence.status, true)
          .addField("Activity:", message.guild.member(user).presence.game ? message.guild.member(user).presence.game.name : "**No Activity Found**", true)
          .addField('Current Roles:', message.guild.member(user).roles.map(role => role).join(' | '), true)
          .addField("Created:", user.createdAt, true)
          .setTimestamp();
  
		message.channel.send(embed)
		message.delete();
}


    exports.conf = {
    aliases: ['userinfo', 'uinfo']
}
    exports.help = {
    name: 'userinfo',
    description: 'userinfo', 
    usage: `${process.env.PREFIX}userinfo @user `
}