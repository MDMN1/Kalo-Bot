  const Discord = require ('discord.js');
  const client = new Discord.Client();
  const fs = require ('fs')
  const queue = new Map();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

    fs.readdir(`./commands/`, (err, files) => {
        if (err) console.error(err);
            let jsfiles = files.filter(f => f.split(".").pop() === "js");
                if(jsfiles.length <= 0) {
                    console.log("No commands to load!");
                        return };
                            console.log(`[Commands]\t Loaded a total amount of ${jsfiles.length} commands!`);
                                jsfiles.forEach((f, i) => {
                                    let props = require(`../commands/${f}`);
                                        // console.log(`${i+1}: ${f}`);
                                            client.commands.set(props.help.name, props);
                                                   props.conf.aliases.forEach(alias => {
                                                    client.aliases.set(alias, props.help.name);
        });
      });
    });

exports.run = async (client, message) => {

  
  
 const serverQueue = queue.get(message.guild.id);
  let args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
	let command = args.shift().toLowerCase();
  
  //if (!client.commands.has(command) || client.aliases.has(command)) return;
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
}