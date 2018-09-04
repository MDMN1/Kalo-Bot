const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  
   if(message.author.id == process.env.RAL || message.author.id == process.env.FREAK){
     
        const embed = new Discord.RichEmbed()
        .setTitle('Restarting...')
        .setColor('#00ff00')
        .setDescription('3')
        message.delete()
        message.channel.send(embed).then (m => {

            embed.setColor('#FFFF00'),
            embed.setDescription('2'),
            m.edit(embed).then (m => {

                embed.setColor('#FFA500'),
                embed.setDescription('1'),
                m.edit(embed).then (m => {

                    embed.setColor('#FF0000'),
                    embed.setDescription('Poof!')
                    m.edit(embed)}).then(() => process.abort()) //&& process.exit  
        })
    })
  }
}
exports.conf = {
    aliases: ['kill'],
};
  
  exports.help = {
    name: 'kill',
    description: 'Forces the bot to restart',
    usage: `${process.env.PREFIX}kill`
  };