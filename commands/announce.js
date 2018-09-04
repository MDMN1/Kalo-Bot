const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  const announcement = args.join(" ");
  const AnnouncementChannel = message.guild.channels.find(n => n.name === 'announcements')
    
  const errEmbed = new Discord.RichEmbed()
  .setColor('#FF0000')
    .setTitle('`Error`')
      .setDescription('```You do not have **MANAGE_MESSAGES** Permissions```')
  
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#FF0000')
      .setTitle('`Error`')
        .setDescription('```You did not announce anything```')
    
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#FF0000')
      .setTitle('`Error`')
        .setDescription('```There was not a #announcements channel.\nI created one for you. redo your announcement```')  
  
      if  (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send
            (errEmbed).then
              (message.delete()).then
                (msg => msg.delete(5000));
  
     if(!AnnouncementChannel) {
        try { AnnouncementChannel = message.guild.createChannel('announcements')
        } catch(e){console.log(e.stack)}
             message.channel.send(errEmbed3).then(message.delete()).then(msg => msg.delete());
     };
  
    if(!announcement) return message.channel.send
        (errEmbed2).then 
          (message.delete()).then 
            (msg => msg.delete(5000));

    const embed = new Discord.RichEmbed()
      .setColor('#41baea')
        .setThumbnail(message.author.displayAvatarURL)
          .setTitle(`__Announcement From:__ ${message.author.tag}`)
            .setDescription(announcement)
              .setTimestamp();
                AnnouncementChannel.send(embed)
                  message.channel.send(`:white_check_mark:New Announcement in ${AnnouncementChannel}`).then (message.delete()).then (msg => msg.delete(43200000));//12hr before deletion
    }

    exports.conf = {
      aliases: ['announce']
    };
          
    exports.help = {
      name: 'announce',
      description: 'Makes an announcement to #announcements',
      usage: `${process.env.PREFIX}announce [announcement]`
    };