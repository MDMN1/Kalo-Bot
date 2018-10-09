const Discord = require(`discord.js`);
const ms = require('ms');

module.exports.run = async (client, message, args) => {

      let user = message.mentions.users.first() || message.guild.members.get(args[0]);
      let modlog = message.guild.channels.find(c => c.name === 'moderation-logs');
      let role = message.guild.roles.find(r => r.name === "Muted");
      let mutetime = args[1];
  
  const errEmbed = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You do not have **MUTE_MEMBERS** Permissions```')
    
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('````I can\'t find the channel #moderation-logs````')
  
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```Please mention a user to Temp-Mute```') 
    
  const errEmbed4 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You cannot Temp-Mute Yourself```')
  
  const errEmbed5 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You Can\`t Temp-Mute a user with the same or higher role than yourself```') 
  
   const errEmbed6 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must have a reason to Temp-Mute a user for verification purposes```') 
   
  const errEmbed7 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```Please specify a time for the temp mute that is not longer than 24 days```') 
    
  const errEmbed8 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```This user is already muted```') 
  
//========================  End of Error Embeds  =======================//
  
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send
          (errEmbed).then
            (message.delete()).then
              (msg => msg.delete(5000));

      if  (!modlog) return message.channel.send
            (errEmbed2).then
              (message.delete()).then
                (msg => msg.delete(3000));

    if  (!user) return message.channel.send
          (errEmbed3).then
            (message.delete()).then
             (msg => msg.delete(3000));

    if  (user.id === message.author.id) return message.channel.send
          (errEmbed4).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (errEmbed4).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (!mutetime) return message.channel.send
          (errEmbed7).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (message.guild.member(user).roles.has(role)) return message.channel.send
          (errEmbed8).then
            (message.delete()).then
              (msg => msg.delete(3000));
  

    if  (!role) {
      try {
  //creates a new role
        role = await message.guild.createRole({
          name: "Muted",
          color: "#0090ff",
          permissions: []
        });
  //change permissions of created role
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            CONNECT: false,
            SPEAK: false
          });
        });
      } catch(e){
        console.log(e.stack);
      }
    }
 
    const embed = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .addField('Action:', '`TempMute`', true)
        .addField('__User__', `${user}`, true)
        .addField(`__${user.tag}'s ID__`, user.id, true)
        .addField('Muted for:', `${ms(ms(mutetime))}`, true)




    .setTimestamp();
    await message.guild.member(user).addRole(role);
   user.send(`You have been **Temp-Muted** from **${message.guild.name}** for '*${mutetime}* '`).then
    modlog.send(embed);

    const embed2 = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setColor('#73e878')
          .addField('Action:', '`Un-Muted`', true)
          .addField('__User__', `${user}`, true)
          .addField(`__${user.tag}'s ID__`, user.id, true)
          .addField('Duration of Mute:', `${ms(ms(mutetime))}`, true)
          .setTimestamp();

    setTimeout(function(){
      message.guild.member(user).removeRole(role);
      modlog.send(embed2);
    }, ms(mutetime));

    message.delete();
};
exports.conf = {
    aliases: ['tempmute', 'tmute', 'tm']
  };
  
  exports.help = {
    name: 'tempmute',
    description: 'Temporarly mute specified user from all channels',
    usage: `${process.env.PREFIX}tempmute [user] [time(s/m/h/d)(24d is max)]`
  };