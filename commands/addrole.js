const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let role = args.join(" ").slice(22);
    let gRole = message.guild.roles.find('name', role);
    let modlog = message.guild.channels.find('name', 'moderation-logs');


    const errEmbed = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```You do not have **MANAGE_ROLES** Permissions```')

    const errEmbed2 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```Please mention a user to add a role to```')
  
     const errEmbed3 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```Please specify a role```') 

    const errEmbed4 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```I could not find that role. Make sure you spelled it right```') 
    
    const errEmbed5 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```You cannot add a role to a member with the same or higher role than yourself```') 
    
    const errEmbed6 = new Discord.RichEmbed()
      .setColor('#ed455a')
        .setTitle('`Error`')
          .setDescription('```Mentioned User already has that role```') 
  
  
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send
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
  
    if  (user.highestRole > message.author.highestRole) return message.channel.send
          (errEmbed5).then
            (message.delete()).then
              (msg => msg.delete(3000));
        
    if  (user.roles.has(gRole.id)) return message.channel.send
          (errEmbed6).then
            (message.delete()).then
              (msg => msg.delete(3000));
  
          await (user.addRole(gRole));
                  message.delete();

        try{
            await user.send(`Congrats! You have been given the role **${role}** on ${message.guild.name}`)
                }catch(e) {
                   modlog.send(`${user} was given the role **${gRole}**`).then (msg => msg.delete());
                }
    }

    exports.conf = {
        aliases: ['addrole', 'arole']
      };
      
      exports.help = {
        name: 'addrole',
        description: 'adds a role to specified user',
        usage: `${process.env.PREFIX}addrole [role name]`
      };