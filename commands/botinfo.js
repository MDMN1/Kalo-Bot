const {version} = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const os = require ('os')
const Discord = require('discord.js');

  module.exports.run = async (client, message, args) => {
	  const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
    const embed = new Discord.RichEmbed()
      .setDescription(`----------------------------------`)
        .setTitle(`${client.user.username}'s Information and Stats`)
          .setThumbnail(client.user.displayAvatarURL)
            .setFooter(`Bot Created by: Ralston & Freak <3`)
              .addField('**Name**', `${client.user} | ${client.user.tag}`, true)
                .addField('**ID**', (client.user.id), true)
                  .addField('⬆**Uptime**',(`${duration}`), true)
                .addField('<:icon_peoplebusiness512:427348244855521280>**Watching Over**', `${client.users.size.toLocaleString()} users`, true)
              .addField('📱**OS**', `${os.platform().toLowerCase()}`, true)
            .addField('💻**Memory Usage**',`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
          .addField('📺**Channels**',`${client.channels.size.toLocaleString()}`, true)
        .addField('<:Discord_icon:427347969709309953>**Discord.js**',`  v${version}`, true)
      .addField('<:nodejs512:427347748900175882>**Node**',`  ${process.version}`, true)
        message.channel.send(embed);
          message.delete();
  }

    exports.conf = {
      aliases: ['botinfo', 'binfo']
    };
    
    exports.help = {
      name: 'botinfo',
      description: 'Displays information on the bot',
      usage: `${process.env.PREFIX}botinfo`
    }; 