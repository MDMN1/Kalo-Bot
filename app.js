const http = require('http');
const express = require('express');
const app = express();
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
      response.sendStatus(200);
});
  app.listen(process.env.PORT);
    setInterval(() => {
      http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 300000);

  const Discord = require ('discord.js');
  const client = new Discord.Client();
  const queue = new Map()
  const fs = require ('fs')

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.filter(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    if(eventFunction.length <= 0) {
      console.log("No Events to load!")
      return}
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
  console.log(`[Events]\t Loaded a total amount of ${files.length} events!`);
});

client.on('message', async message => { 
  

  
    const serverQueue = queue.get(message.guild.id);
  // log.send(`***${message.createdAt}*** **»** __**${message.guild}**__ (*#${message.channel.name}*) **»** **Message** | ***${message.author.tag}:*** ${message.content}`);
  
  //Website Filter code below
  // if(message.content.includes('www') ||message.content.includes('http') ||message.content.includes('https')) return message.channel.bulkDelete(1) && message.author.send(`Please do not post links in the server, That is what DM's are for...\n Thanks ❤`);
  if(message.author.bot) return;
  if (message.channel.type === 'dm') return message.reply('Who are you!\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t**STRANGER DANGER!**'); //xD
 
  if(!message.content.startsWith(process.env.PREFIX)) return; 

  
	let args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
	let command = args.shift().toLowerCase();

    	let cmd;
    	if (client.commands.has(command)) {
    		cmd = client.commands.get(command);
    	} else if (client.aliases.has(command)) {
    		cmd = client.commands.get(client.aliases.get(command));
    	}
  
    		cmd.run(client, message, args, queue, serverQueue)
});

client.login(process.env.TOKEN)

//https://twitter.com/discordapp/status/986673385802362880