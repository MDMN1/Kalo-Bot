const fs = module.require("fs");
const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {
    let reason = args.join(" ").slice(22);
    let modlog = message.guild.channels.find(channel => channel.name === 'moderation-logs');
    let user = message.mentions.users.first() || message.guild.members.get(args[0]);
    let role = message.guild.roles.find(role => role.name === "Muted");

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
        .setDescription('```Please mention a user to unmute```') 
    
  const errEmbed4 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You cannot unmute a member with the same or higher role than yourself```')
  
  const errEmbed5 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must have a reason to unmute a user for verification purposes```')  

//========================  End of Error Embeds  =======================//
  
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send
          (errEmbed).then
            (message.delete()).then
              (msg => msg.delete(3000));;
  
		if  (!user) return message.channel.send
          (errEmbed3);
        
    if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (errEmbed4).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (!reason) return message.channel.send
          (errEmbed5)
  
    if  (!modlog) return message.channel.send
          (errEmbed2)

		if  (!role || !message.guild.member(user).roles.has(role.id)) return message.channel.send
          (`${user} is not muted`);
  
		await message.guild.member(user).removeRole(role);
		const embed = new Discord.RichEmbed()
         .setColor('#73e878')
         .setAuthor(message.author.tag, message.author.displayAvatarURL)
         .addField('Action:', '`Un-Muted`', true)
         .addField('__User__', `${user}`, true)
         .addField(`__${user.tag}'s ID__`, user.id, true)
         .addField('Reason:', `${reason}`, true)
            
    modlog.send(embed)
		message.delete();
	};
    exports.conf = {
        aliases: ['unmute', 'umute']
      };
      
      exports.help = {
        name: 'unmute',
        description: 'Unmutes specified user from the server',
        usage: `${process.env.PREFIX}unmute [user] [reason]`
      };