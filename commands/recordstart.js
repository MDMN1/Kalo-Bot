const Discord = require('discord.js')
const fs = require('fs');
  module.exports.run = async (client, message, args) => {

  function createOutputFile(member, data) {
  let t = fs.createWriteStream(`./recordings/${member.id}.mp4`); //xD
    
    t.write(data, (err) => {
if (err) throw err.message;
      
      console.log("Amen Brother")

    })
};

    let [command, ...channelName] = message.content.split(" ");
    if (!message.guild) {
      return message.reply('no private service is available in your area at the moment. Please contact a service representative for more details.');
    }
    const voiceChannel = message.member.voiceChannel;

    if (!voiceChannel || voiceChannel.type !== 'voice') {
      return message.reply(`I couldn't find the channel ${channelName}. Can you spell?`);
    }
    voiceChannel.join()
      .then(conn => {
        message.channel.send('🔊 Recording has been started');
        message.delete()

        const receiver = conn.createReceiver();

        conn.on('speaking', (user, speaking) => {
          
          if (speaking) {
            //message.channel.send(`I'm listening to ${user}`);
            const audioStream = receiver.createPCMStream(user);
            const outputStream = createOutputFile(user, audioStream);
            audioStream.pipe(outputStream)//.then(console.log);
            outputStream.on("data", console.log);
            audioStream.console.log();
              //message.channel.send(`I'm no longer listening to ${user}`);

          // .catch(console.log);   });
          }
      }).catch(console.log);
    }
)};


    exports.conf = {
    aliases: ['recordstart']
}
    exports.help = {
    name: 'recordstart',
    description: 'recordstart', 
    usage: `${process.env.PREFIX}record`
}