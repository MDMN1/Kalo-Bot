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

// =================================================================================

  const Discord = require ('discord.js');
  const client = new Discord.Client();
  const fs = require ('fs')
 
   
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



client.login(process.env.TOKEN)




