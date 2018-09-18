const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
//========================  Start of Variables  =======================//
    
    let reason = args.join(" ");
    let modlog = message.guild.channels.find(c => c.name === 'bug-tickets');
    
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//

    const reasonError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 01 •')
          .setDescription('```No bug was reported```')
    
    const modlogError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 02 •')
          .setDescription('```The channel #bug-tickets was not found```')
    
    const Report = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setColor('#41baea')
          .addField('__Bug Report__', `${reason}`)
    
//========================  End of Embeds  =======================//   
    
    if  (!reason) return message.reply
        (reasonError).then
        (message.delete()).then
        (msg => msg.delete(5000));

    if  (!modlog) return message.channel.send
        (modlogError).then
        (message.delete()).then
        (msg => msg.delete(5000))

    message.delete();
    modlog.send(Report);
};


    exports.conf = {
    aliases: [],
}  
    exports.help = {
    name: 'bug',
    description: 'Reports any bugs found',
    usage: `${process.env.PREFIX}request [what you want to request]`
}