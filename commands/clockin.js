const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {

//========================  Start of Variables  =======================//
  
  let clockedinRole = message.guild.roles.find(r => r.name === 'Clocked-In')
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
    
    const clockinError3 = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 03 •')
          .setDescription('```You are already clocked in...```')  
    
    const roleCreated = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 04•')
          .setDescription('```"Clocked-In" Role Created\n\nPlease try again```')
    
    const channelError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 05•')
          .setDescription('```You do not have **MANAGE_ROLES** Permissions```')
    
    const timeError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 06•')
          .setDescription('```The channel "#work-clock" was not found```')
    
    const timeError2 = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 07•')
          .setDescription('```The channel "#work-clock" has been created\n\nPlease try again```')
    
    const ClockedInEmbed = new Discord.RichEmbed()
          .setTitle('Clocked in 📥')
          .setColor('#99CC33')
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setFooter(message.createdAt)
          .setTimestamp()
    
//========================  End of Embeds  =======================//
  
    if  (!clockedinRole) message.channel.send
          (clockinError).then
            (message.delete()).then
              (msg => msg.delete(5000))

    if  (!clockedinRole) {
        try {
          clockedinRole = await message.guild.createRole({
                                name: "Clocked-In",
                                color: "#99CC33",
                                permissions: []
                          });
        } catch(e) {
          console.log(e.stack);
        } return  message.channel.send
                  (roleCreated).then
                  (message.delete()).then
                  (msg => msg.delete(5000));
}    
    if  (message.member.roles.has(clockedinRole.id)) return message.reply
          (clockinError3).then
            (message.delete()).then
              (msg => msg.delete(3000));
 
    if  (!timeChannel) message.channel.send
          (timeError).then
            (message.delete()).then
              (msg => msg.delete(5000))
  
    if  (!timeChannel) {
        try {
              timeChannel = await message.guild.createChannel('work-clock')
        }  catch(e)  {
        console.log(e.stack)
        } return message.channel.send
                 (timeError2).then
                 (message.delete()).then
                 (msg => msg.delete(5000));
}
      message.member.addRole(clockedinRole)
      timeChannel.send(ClockedInEmbed);
      (message.author.send(ClockedInEmbed)
      .catch(err => console.log(err.message))).then
      message.delete()
};


    exports.conf = {
    aliases: ['clockin']
}
          
    exports.help = {
    name: 'clockin',
    description: 'Clocks user in',
    usage: `${process.env.PREFIX}clockin`
};