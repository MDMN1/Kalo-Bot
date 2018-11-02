const Discord = require('discord.js')
const request = require(`request`);
const mcIP = "play.kalo-mc.com";
  exports.run = async (client, message, args) => {

  var url = 'http://mcapi.us/server/status?ip=' + mcIP;
      request (url, function(err, response, body) {
    
  if  (err) { console.log(err);
  return  message.channel.send
          ('Error gathering Server Status...')};
    
  body = JSON.parse(body);
  var status = `**IP** - ${mcIP}\n **Status** - Offline ❌`;
  
  if  (body.online) {status = `**IP** - ${mcIP}\n **Status** - *Online ✅*`;
  if  (body.players.now) {status += `\n**Players** - *${body.players.now}*`}
      else {status += '\n**Players** - *No players are online*'}}
    
  const embed = new Discord.RichEmbed()
        .setTitle('Server Status')
        .setColor('#41baea')
        .setThumbnail(message.guild.iconURL)
        .setDescription(status)
        .setTimestamp()
    
  message.channel.send
    (embed).then
      message.delete()
  })
};

    exports.conf = {aliases: ['server', 'status']}
    exports.help = {
    name: 'kalo',
    description: 'kalo server stats', 
    usage: `${process.env.PREFIX}kalo`}