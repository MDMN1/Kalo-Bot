const Discord = module.require("discord.js");

  module.exports.run = async (client, message, args) => {

  let pages = ['**All Kalo-Bot Commands**\n\n!8ball\n!ascii\n!botinfo\n!cat', '!commands\n!dog\n!help\n!invite','!ip\n!now\n!oof\n!ping','!rules\n!serverinfo\n!stop\n!store','!userinfo\n!vote','For more information on a command do !help [command name]'];  //array for pages
  let page = 1;  //default page
    
    const embed = new Discord.RichEmbed()
      .setColor('#c5f2e1')
      .setFooter(`Page ${page} of ${pages.length}`)
      .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {    //sends embed then adds forward and backward reactions
      msg.react('⬅').then(r => {
        msg.react('➡')

    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;    //filters for using reactions    
    const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
    
    const backwards = msg.createReactionCollector(backwardsFilter, {time: 120000 });
    const forwards = msg.createReactionCollector(forwardsFilter, {time: 120000 });
        
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(embed)
        // msg.author.reaction.delete()
      })
        
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(embed)
        // msg.author.reaction.delete()
      })
    })
  })
}

    exports.conf = {
      aliases: ['commands', 'command', 'cmd', 'cmds']
    };
  
    exports.help = {
      name: 'commands',
      description: 'Display Commands in a list on flippable pages',
      usage: `${process.env.PREFIX}commands`
    };

