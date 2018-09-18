const Discord = require('discord.js');
const ascii = require('ascii-art');
  exports.run = async (client, message, args) => {
    
//========================  Start of Embeds  =======================//

  const errEmbed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('• Error: 01 •')
        .setDescription('```You did not enter anything to create```')
  
  const errEmbed2 = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('• Error: 02•')
        .setDescription('```The supplied text is too long to convert to ascii text```')

//========================  End of Embeds  =======================//
  
  if  (!args.join(' ')) return message.channel.send
        (errEmbed).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
    ascii.font(args.join(' '),'Doom', function(rendered) {
    rendered = rendered.trimRight();
  
  if  (rendered.length > 880) return message.channel.send
        (errEmbed2).then
          (message.delete()).then
            (msg => msg.delete(5000));
      
      message.channel.send(rendered, {
      code: 'md' }).then
      (message.delete());
  })
};

  
    exports.conf = {
    aliases: ['ascii', 'asci', 'art']
}

    exports.help = {
    name: 'ascii',
    description: 'Make some sick text to ascii art', 
    usage: `${process.env.PREFIX}ascii [text]`
}