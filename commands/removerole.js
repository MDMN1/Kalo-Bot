const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let role = args.join(" ").slice(22);
    let gRole = message.guild.roles.find('name', role);
    let modlog = message.guild.channels.find('name', 'moderation-log');

    const errEmbed = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```You do not have **MANAGE_ROLES_OR_PERMISSIONS** Permissions```')

    const errEmbed2 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```Please mention a user to remove a role from```')
  
     const errEmbed3 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```Please specify a role```') 

    const errEmbed4 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```I could not find that role. Make sure you spelled it right(all lowercase)```') 
    
    const errEmbed5 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```You cannot remove a role from a member with the same or higher role than yourself```') 
    
    const errEmbed6 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```Mentioned User did not have that role```') 
  
  
     if(!message.author.id === process.env.RALID || message.author.id !== process.env.FREAKID || !message.member.hasPermission("MANAGE_ROLES")) return message.channel.send
          (errEmbed).then
            (message.delete()).then
              (msg => msg.delete(5000));
        
    if  (!user) return message.channel.send
          (errEmbed2).then 
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (!role) return message.channel.send
          (errEmbed3).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (!gRole) return message.channel.send
          (errEmbed4).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (errEmbed5).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
    if  (!user.roles.has(gRole.id)) return message.channel.send
          (errEmbed6).then
            (message.delete()).then
              (msg => msg.delete(3000));
     
    await  (user.removeRole(gRole.id));
              message.delete();
            
        try{
            await user.send(`You have been **stripped** of the role **~~${gRole.name}~~** on ${message.guild.name}`)
        } catch(e) {
                modlog.send(`${user} was **stripped** of the role **~~${gRole}~~**`).then (msg => msg.delete(3000))
            }
}
exports.conf = {
    aliases: ['removerole', 'rrole']
  };
  
  exports.help = {
    name: 'removerole',
    description: 'Removes a role from specified user',
    usage: `${process.env.prefix}removerole [user]`
  };