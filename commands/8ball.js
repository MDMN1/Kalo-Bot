const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
//========================  Start of Embeds  =======================//
  const questionError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 01 •')
          .setDescription('```Please ask me a full question```')
  
  const endError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 02 •')
          .setDescription('```Please end your question with a "?"```')
  
  let question = args.slice().join(" ") || 'None';
  let replies = [  'Yes',
                   'No',
                   'Why are you asking me that?',
                   'Maybe?',
                   'Oof, Ask me again',
                   'Have you tried google yet?',
                   'umm...lol',
                   'Ask Coolicos',
                   'Kalo-Bot does not have the answer'  ];
  let result = Math.floor((Math.random() * replies.length));
    
  const Magic = new Discord.RichEmbed()
          .setTitle('🎱Magic Kalo-Ball🎱')
          .addField("Question:", question)
          .addField("Answer:", replies[result])
          .setThumbnail(client.user.displayAvatarURL)
//========================  End of Embeds  =======================//
  
  if  (!args[0]) return message.channel.send
        (questionError).then
          (message.delete()).then
            (msg => msg.delete(5000))
    
  if  (!message.content.includes(`?`)) return message.channel.send
        (endError).then
          (message.delete()).then
            (msg => msg.delete(5000));

      message.channel.send(Magic);
      message.delete()
};


    exports.conf = {
    aliases: ['8ball','8b']
}
    exports.help = {
    name: '8ball',
    description: 'Magic 8ball', 
    usage: `${process.env.PREFIX}8ball <question> ?`
}