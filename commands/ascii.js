const Discord = require ("discord.js");
const ascii = require('ascii-art');

exports.run = async (client, message, args) => {

  const errEmbed = new Discord.RichEmbed()
    .setColor('#FF0000')
      .setTitle('`Error`')
        .setDescription('```You did not enter anything to create```')
  
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#FF0000')
      .setTitle('`Error`')
        .setDescription('```The art you are requesting is too big```')
  
  if  (!args) return message.channel.send
        (errEmbed);
  
ascii.font(args.join(' '),'Doom', function(rendered) {

 
          rendered = rendered.trimRight();
  
  if  (rendered.length > 880) return message.channel.send
        (errEmbed2);
          message.channel.send(rendered, {
            code: 'md'
    });
  });
}

exports.conf = {
aliases: ['ascii', 'asci', 'art']
};

exports.help = {
name: 'ascii',
description: 'Make some sick text to ascii art', 
usage: `${process.env.PREFIX}ascii [text]`
};