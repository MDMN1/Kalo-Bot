const Discord = require('discord.js');
const fs = require ('fs');
  module.exports.run = async (client, message, args) => {
    
  let channel = message.guild.channels.find(S => S.name === "moderation-logs");
  let server = client.guilds.find(n => n.name === 'Kalo-Bot Testing')
  let voice_channel = server.channels.find(c => c.name === '💬 Meeting Room')
  
  voice_channel.join().then(connection => {
    
   let voice_reciever = connection.createReceiver();
    
    connection.on('speaking', (user, speaking) => {
    
  
      
    if (speaking) {
      console.log("Listening on");
      
      let wfileStream = fs.createWriteStream("/app/assets/");

    
      const audioStream = voice_reciever.createPCMStream(user);
    
      audioStream.pipe(wfileStream);
    
    audioStream.on('end', () => {
      console.log('Listening Off');
      
      

      wfileStream.end();    
    });
  }  
    });
    
    console.log('Connected')
  })
  
  }
  
    exports.conf = {
    aliases: ['record']
  };

  exports.help = {
    name: 'record',
    description: 'Records voice channel',
    usage: `${process.env.PREFIX}record`
  };