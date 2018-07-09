const Discord = module.require("discord.js");

  module.exports.run = async (client, message, args) => {

  const errEmbed = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You do not have **MANAGE_MESSAGES** Permissions```')
  
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You need to specify a number less than 100```')  
    
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You Can\`t Delete More than 100 Messages at a time```')
  
  if(message.author.id == process.env.RAL || message.author.id == process.env.FREAK)
   
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send
      (errEmbed).then
        (message.delete()).then
          (msg => msg.delete(5000));
    
  if(!args[0]) return message.channel.send
      (errEmbed2);
        message.delete();

  if(args[0] > 100) return message.channel.send
      (errEmbed3)
        message.delete();
  
    const embed = new Discord.RichEmbed()
      .setColor('#e0b72e')
        .setTitle('Clearing Messages<:crumpledpaper:430231307612585996><:crumpledpaper:430231307612585996><:crumpledpaper:430231307612585996>')
          message.delete()
            message.channel.send(embed)

    let fetched = await message.channel.fetchMessages({limit: args[0]})
        
      message.channel.bulkDelete(fetched).then (msg => {

    const embed2 = new Discord.RichEmbed()
      embed.setColor("#53a124")
        embed.setTitle('Purging Complete!')
          embed.addField(`<:crumpledpaper:430231307612585996>`, `🗑 ${args[0]} Messages cleared!`)
            message.channel.send(embed).then
              (msg => msg.delete(5000))  
    });
};

  exports.conf = {
    aliases: ['purge', 'clear']
  };

  exports.help = {
    name: 'purge',
    description: 'Clears specified amount of messages',
    usage: `${process.env.PREFIX}purge [number]`
  };