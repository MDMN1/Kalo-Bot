const {version} = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const os = require ('os')
const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {

  let duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');

  const Botinfo = new Discord.RichEmbed()
        .setColor('#41baea')
        .setTitle(`${client.user.username}'s Information and Stats`)
        .setDescription(`----------------------------------`)
        .setThumbnail(client.user.displayAvatarURL)
        .addField('<:name_card_emoji:489659629740228608>**Name**', `${client.user} | ${client.user.tag}`, true)
        .addField('<:Drivers_emoji:489663335105822730>**ID**', (client.user.id), true)
        .addField('⬆**Uptime**',(`${duration}`), true)
        .addField('<:watching_over_emoji:489663792637149184>**Watching Over**', `${client.users.size.toLocaleString()} users`, true)
        .addField('<:linux_emoji:489663910979436544>**OS**', `${os.platform().toLowerCase()}`, true)
        .addField('<:memory_emoji:489663617525088283>**Memory Usage**',`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField('📺**Channels**',`${client.channels.size.toLocaleString()}`, true)
        .addField('<:discord_emoji:489659629702217728>**Discord.js**',`  v${version}`, true)
        .addField('<:nodejs_emoji:489659631979986944>**Node**',`  ${process.version}`, true)
        .setFooter(`Bot Created by: Ralston & Freak <3`)

  message.channel.send(Botinfo);
    message.delete();
};

    exports.conf = {aliases: ['binfo']}   
    exports.help = {
    name: 'botinfo',
    description: 'Displays information on the bot',
    usage: `${process.env.PREFIX}botinfo`} 