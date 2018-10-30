const Discord = require ('discord.js');
const client = new Discord.Client();
const queue = new Map();
  exports.run = async (client, message, guild) => {
    const serverQueue = {}
//   if (message.guild) {
//       serverQueue = queue.get(message.guild.id)
// }
  let args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
	let command = args.shift().toLowerCase();
  let cmd;
    if (message.content === '<@458841701193089024>') return message.channel.send(`My prefix is \`${process.env.PREFIX}\``).then(message.delete())
    
    if  (!message.content.startsWith(process.env.PREFIX)) return;
    if  (message.channel.type !== "text") return;
    	
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
} 
    else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
      
}
      cmd.run(client, message, args, queue, serverQueue)
}