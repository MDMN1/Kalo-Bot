const Discord = require('discord.js');
  exports.run = async (client, message, args) => {

//========================  Start of Variables  =======================//
    
    let choices = args.join(" ").split(" | ");
    let chosen = choices[Math.floor(Math.random()*choices.length)]

//========================  End of Variables  =======================//

  const Error = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setAuthor("Kalo-Bot has NOT chosen", client.user.displayAvatarURL)
        .addField('__Choices Available__', 'Nothing to choose from...')
        .setFooter(`Result is: ` + `a broken dream`)
  
  if  (!chosen) return message.channel.send(Error)
  
  const TheChosenOne = new Discord.RichEmbed()
        .setColor('#41baea')
        .setAuthor("Kalo-Bot has chosen", client.user.displayAvatarURL)
        .addField('__Choices Available__', choices, true)
        .setFooter(`Result is: ` + ` ${chosen}`)
  
    message.channel.send(TheChosenOne)
    message.delete()
};
  

    exports.conf = {
    aliases: ['choose', 'pick']
}         
    exports.help = {
    name: 'choose',
    description: 'Let kalo bot help you decide between 2-10 options',
    usage: `${process.env.PREFIX}choose 1 | 2 | 3`
}