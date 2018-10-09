const http = require('http');
const express = require('express');
const app = express();
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
      response.sendStatus(200);
});
  app.listen(process.env.PORT)
    setInterval(() => {
      http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);

//========================  Code Starts Below  =======================//

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const load = require ('./loader/fileload.js')
const eload = require ('./loader/eload.js')

  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();

// Cmd Handler
load('commands', client.commands, client.aliases)
eload('events', client)

  
//========================  Message Logging for Kalopsia MC  =======================//
client.on('message', message => {

    let logChannel = message.client.channels.find(n => n.name === 'ᴍᴇꜱꜱᴀɢᴇꜱ')
    let kaloServer = client.guilds.find(s => s.name === 'Kalopsia MC')
  
  if  (message.author.bot) return;  
  if  (message.channel.parentID !== `419246222931394560`) {

  if  (message.guild !== kaloServer) return;
   
  const logged = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(`**Channel** - *#${message.channel.name}*\n**Message** - *${message.content}*\n**Time** - *${message.createdAt}* `)
        .setTimestamp();
   
     logChannel.send(logged)
   }
});

//========================  Insert New Name for Below Code  =======================//

client.login(process.env.TOKEN)