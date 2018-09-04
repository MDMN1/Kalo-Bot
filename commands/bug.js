const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

const reason = args.join(" ");
if(!reason) return message.reply("You must suply a reason for this report").then (message.delete()).then (msg => msg.delete(3000));


const embed = new Discord.RichEmbed()
.setThumbnail(message.author.displayAvatarURL)
.setColor('#41baea')
.addField('__User__', `${message.author}`)
.addField('__Action__', 'Bug-Ticket')
.addField('__Description__', `${reason}`)
// .addField('User Roles:', message.guild.member(message.author).roles.map(role => role).join(' | '), true)


const modlog = message.guild.channels.find(n => n.name === 'bug-tickets');
if(!modlog) return message.channel.send(`Couldnt find the #bug-tickets channel`)

message.delete();
modlog.send(embed).then (message.delete());
}
exports.conf = {
    aliases: [],
  };
  
  exports.help = {
    name: 'bug',
    description: 'Reports any bugs found',
    usage: `${process.env.PREFIX}request [what you want to request]`
  };