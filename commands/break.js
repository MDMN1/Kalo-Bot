const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
//========================  Start of Variables  =======================//
    
    let clockedinRole = message.guild.roles.find(r => r.name === 'Clocked-In')
    let breakRole = message.guild.roles.find(r => r.name === 'On-Break')
    let timeChannel = message.guild.channels.find(c => c.name === 'work-clock')
    
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//   
    
    const clockinError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 01 •')
          .setDescription('```"Clocked-In" Role was not found```')
    
    const clockinError2 = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 02 •')
          .setDescription('```You are not clocked in...```')
    
    const breakError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 03•')
          .setDescription('```"On-Break" Role was not found```')
    
    const roleCreated = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 04•')
          .setDescription('```"On-Break" Role Created\n\nPlease try again```')
    
    const channelError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 05•')
          .setDescription('```You do not have **MANAGE_ROLES** Permissions```')
    
    const timeError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 06•')
          .setDescription('```The channel "#work-clock" was not found\n\nThe channel #work-clock has been created```')
    
    const breakOverEmbed = new Discord.RichEmbed()
          .setTitle('⏰ Break Time is over...⏰\nGet back to work')
          .setColor('#99CC33')
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setFooter(message.createdAt)
          .setTimestamp()
      
    const breakEmbed = new Discord.RichEmbed()
          .setTitle('Taking a break 🏖')
          .setColor('#FFC300')
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setFooter(message.createdAt)
          .setTimestamp()
    
//========================  End of Error Embeds  =======================//
      
    if  (!clockedinRole) return message.channel.send
          (clockinError).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    if  (!breakRole) message.channel.send
          (breakError).then
            (message.delete()).then
              (msg => msg.delete(5000))
    
    if (!breakRole) {
        try {
             breakRole = await message.guild.createRole({
                                name: "On-Break",
                                color: "#FFC300",
                                permissions: []
                          });
            } catch(e){
              console.log(e.stack);
              
  } return  message.channel.send
              (roleCreated).then
                (message.delete()).then
                  (msg => msg.delete(5000));
}
    
    if  (!timeChannel) return message.channel.send
          (timeError).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    if  (!message.member.roles.has(clockedinRole.id)) return message.channel.send
          (clockinError2).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
    if  (message.member.roles.has(breakRole.id)) return message.member.removeRole(breakRole).then
          (timeChannel.send(breakOverEmbed)).then
            (message.author.send(breakOverEmbed)
            .catch(err => console.log(err.message))).then
              (message.delete());
      
    if  (!message.member.roles.has(breakRole.id))
          (message.member.addRole(breakRole)).then
            (timeChannel.send(breakEmbed)).then
              (message.author.send(breakEmbed)
              .catch(err => console.log(err.message))).then
                (message.delete())
};


    exports.conf = {
    aliases: ['clockin']
}         
    exports.help = {
    name: 'break',
    description: 'Lets clocked in users take a break',
    usage: `${process.env.PREFIX}break`
}