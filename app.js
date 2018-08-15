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
  }, 280000);

  const Discord = require ('discord.js');
  const client = new Discord.Client();
  const fs = require ('fs')
  const talkedRecently = new Set();
  const queue = new Map()
 
   
//Event Loader
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

//Message Event
client.on('message', async message => { 
 
  const serverQueue = queue.get(message.guild.id);
  let args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
	let command = args.shift().toLowerCase();
  
  if (!command) return;
  let cmd;
  let Staff = message.member.roles.has('name','Staff')
  
  if  (!message.content.startsWith(process.env.PREFIX)) return;
  if  (message.author.bot) return;
  if  (message.channel.type === 'dm') return;
    	
  if (client.commands.has(command)) {
    	cmd = client.commands.get(command);
    }   else if (client.aliases.has(command)) {
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
  
  
//     var timeLeft = 15000;
//     var timer = setTimeout(function() {
//     timeLeft = --timeLeft;

//     if (timeLeft < 0) {
//       clearInterval(timer);
//         message.delete();
//       }
//     }, 5000);

//   await message.reply(`You have to wait ${timeLeft} before using another command!`);
  
  
});

client.login(process.env.TOKEN)

//https://twitter.com/discordapp/status/986673385802362880