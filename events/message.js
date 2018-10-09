const Discord = require ('discord.js');
const client = new Discord.Client();
const fs = require ('fs')
const queue = new Map();

 exports.run = async (client, message) => {
//========================  Ticket System  =======================//
const db = require('quick.db');

  if  (message.author.bot) return;
  if  (!message.type === 'text') {
    
    let active = await db.fetch(`support_${message.author.id}`);
    let guild  = client.guilds.get('465615213690093580');
    let channel, found = true;
    let modlog = guild.channels.find(m => m.name === 'moderation-logs');
    
  try  {
      if  (active) client.channels.get(active.channelID).guild;
  } catch (e) {  found = false;  }

  if  (!active || !found) {
        active = {};

    let staff = guild.roles.find(r => r.name === 'Owner');
    let owner = guild.roles.find(r => r.name === 'Kalo Staff');
    let dev   = guild.roles.find(r => r.name === 'Developer');
    let everyone = guild.roles.find(r => r.name === ('@'+'everyone'));

    channel = await guild.createChannel(`${message.author.username}`)
              await channel.setParent('486350770636062720')
              await channel.setTopic(`Type "!close" to close the ticket for ${message.author.tag}`)
              await channel.overwritePermissions(owner, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true})
              await channel.overwritePermissions(staff, {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true})
              await channel.overwritePermissions(dev,   {VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true})
              await channel.overwritePermissions(everyone, {VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false})
              
    const newChannel = new Discord.RichEmbed()
          .setColor('#6d6d6d')
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setFooter('Support Ticket Created')
    await channel.send(newChannel).then (modlog.send(newChannel));

    const newTicket = new Discord.RichEmbed()
          .setColor('#6d6d6d')
          .setAuthor(`Hello, ${message.author.tag}`, message.author.displayAvatarURL)
          .setFooter('Support Ticket Created')
    await message.author.send(newTicket);

    active.channelID  = channel.id
    active.targetID   = message.author.id
} 
  channel = client.channels.get(active.channelID);
    
  const dm = new Discord.RichEmbed()
        .setColor('#6d6d6d')
        .setAuthor(`Thank you, ${message.author.tag}`, message.author.displayAvatarURL)
        .setFooter('Your message has been sent -- A Staff member will be in contact soon')
  await message.author.send(dm);

  const embed = new Discord.RichEmbed()
        .setColor('#6d6d6d')
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(message.content)
        .setFooter(`Message Recieved -- ${message.author.tag}`)
  await channel.send(embed);

  db.set(`support_${message.author.id}`, active);
  db.set(`supportChannel_${channel.id}`, message.author.id);
  return;
}
  let support = await db.fetch(`supportChannel_${message.channel.id}`);
  let guild = client.guilds.get('465615213690093580');
  let modlog = guild.channels.find(m => m.name === 'moderation-logs')

  if  (support) {
       support = await db.fetch(`support_${support}`);

  let supportUser = client.users.get(support.targetID);
    if  (!supportUser) return message.channel.delete();
    if  (message.content.toLowerCase() === '!close') {

  const complete = new Discord.RichEmbed()
        .setColor('#6d6d6d')
        .setAuthor(`Hey, ${supportUser.tag}`, supportUser.displayAvatarURL)
        .setFooter(`Ticket Closed by ${message.author.tag}`)
        .setDescription('*Your Ticket has been **Closed**. If you wish to reopen this, or create a new ticket, please send a message to the bot.*')
  await supportUser.send(complete)
        message.channel.delete();
    
  const complete2 = new Discord.RichEmbed()
        .setColor('#6d6d6d')
        .setAuthor(`${supportUser.tag}`, supportUser.displayAvatarURL)
        .setFooter(`Support Ticket Closed by: ${message.author.tag}`)
        modlog.send(complete2)

  db.delete(`support_${support.targetID}`)
  return;
}
  const embed = new Discord.RichEmbed()
        .setColor('#6d6d6d')
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setFooter(`Message Recieved -- Kalo-MC Staff Member`)
        .setDescription(message.content)
        client.users.get(support.targetID).send(embed)
        message.delete();
  await embed.setFooter(`Message Sent -- ${message.author.tag}`).setDescription(message.content)
 return message.channel.send(embed);
}
//========================  End of Ticket System  =======================//
    
    
   const serverQueue = queue.get(message.guild.id);
    let args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
	  let command = args.shift().toLowerCase();
  
 //if (!client.commands.has(command) || client.aliases.has(command)) return;
    let cmd;
    let Staff = message.member.roles.has('name','Staff')
  
    if  (!message.content.startsWith(process.env.PREFIX)) return;
    if  (message.author.bot) return;
    //if  (message.channel.type === 'dm') return;
    	
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
} 
    else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
      
}
      cmd.run(client, message, args, queue, serverQueue)
}