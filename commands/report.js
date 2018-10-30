const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
//========================  Start of Variables  =======================//
    
    let reason = args.join(" ");
    let ral = process.env.Ral
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//

    const reasonError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 01 •')
          .setDescription('```Nothing was reported to Kals owner```')
    
    const Report = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setColor('#41baea')
          .addField('__Reported__', `${reason}`)
    
//========================  End of Embeds  =======================//   
    
    if  (!reason) return message.reply
          (reasonError).then
            (message.delete()).then
              (msg => msg.delete(5000));

    message.delete();
    ral.send(Report);
};


    exports.conf = {
    aliases: [],
}  
    exports.help = {
    name: 'report',
    description: 'Reports anything found',
    usage: `${process.env.PREFIX}request [what you want to request]`
}