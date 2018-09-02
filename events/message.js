  const Discord = require ('discord.js');
  const client = new Discord.Client();
  const fs = require ('fs')
  const talkedRecently = new Set();
  const queue = new Map();

exports.run = async (client, message) => {

 const serverQueue = queue.get(message.guild.id);
  let args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
	let command = args.shift().toLowerCase();
  
  if (!client.commands.has(command)) return;
  let cmd;
  let Staff = message.member.roles.has('name','Staff')
  
  if  (!message.content.startsWith(process.env.PREFIX)) return;
  if  (message.author.bot) return;
  if  (message.channel.type === 'dm') return;
    	
  if (client.commands.has(command)) {
    	cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    	  }
      cmd.run(client, message, args, queue, serverQueue)
  
  //Command cooldown/warning
  if (Staff) return;
  if (talkedRecently.has(message.author.id))  return;
  // Adds the user to the set so that they can't talk for 2.5 seconds
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after 2.5 seconds
    talkedRecently.delete(message.author.id);
}, 2500);
  


}