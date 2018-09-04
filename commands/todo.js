const db = require ('quick.db');
const discord = require ('discord.js');

exports.run = async (client, message, args) => { 
  
  message.delete()
  //let todoChannel = message.guild.channels.find(n => n.name ==='todo')
  let todo = args.join(' ');
  
  
    const embed = new discord.RichEmbed()
    .setTitle('__Todo Item__')
    .setThumbnail(message.author.displayAvatarURL)
    .setColor('#f37b1b')
    .setDescription(todo) //u need it ontop
  
   // todoChannel.send(embed).then    // no itll delete the command  ur gonna react to a deleted msg xD
    message.channel.send(embed).then
     (m => {m.react(`✅`).then
     (() => {

        const checkFilter = (reaction) => reaction.emoji.name === "✅" && reaction.count-1;

        const check = m.createReactionCollector(checkFilter, {
            max: 1,
            time: 1728000000 // 20 days
        });
        var g = 1;

        check.on(`collect`, r => {
            if (g = 2)
            {
        embed.setColor('#4ef31b');
        embed.setFooter('Item Complete!');
        m.edit(embed)
            }
        })

    })

})
}


    exports.conf = {
      aliases: ['todo']
    };
          
    exports.help = {
      name: 'todo',
      description: 'Need a list to remind u of things?',
      usage: `${process.env.PREFIX}todo <thing>`
    };