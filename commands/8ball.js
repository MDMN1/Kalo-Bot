const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
//--------------------  Variables  --------------------//
  let replies = [  'Yes',
                   'No',
                   'Why are you asking me that?',
                   'Maybe?',
                   'Oof, Ask me again',
                   'Ask Ragsmel',
                   'Have you tried google yet?',
                   'umm...lol',
                   'Ask Zhuge',
                   'Kalo-Bot does not have the answer'  ];
  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ");
//--------------------  End of Variables  --------------------//
  const questionError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 01 •')
        .setDescription('```Please ask me a full question```')
    if  (!args[0]) return message.channel.send
        (questionError).then
        (message.delete()).then
        (msg => msg.delete(5000))
  
  const endError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 02 •')
        .setDescription('```Please end your question with a "?"```')
    if  (!message.content.includes(`?`)) return message.channel.send
        (endError).then
        (message.delete()).then
        (msg => msg.delete(5000));
    
  const Magic = new Discord.RichEmbed()
        .setTitle('🎱Magic Kalo-Ball🎱')
        .addField("Question:", question)
        .addField("Answer:", replies[result])
        .setThumbnail(client.user.displayAvatarURL)
  
  message.channel.send(Magic).then
    message.delete()
};

    exports.conf = {
    aliases: ['8b'],
    category: 'member'
}
    exports.help = {
    name: '8ball',
    description: 'Magic 8ball', 
    usage: `${process.env.PREFIX}8ball [question] [?]`
}