const Discord = require('discord.js')
const fs = require('fs');
  module.exports.run = async (client, message, args) => {


    let [command, ...channelName] = message.content.split(" ");
    if (!message.guild) {
      return message.reply('no private service is available in your area at the moment. Please contact a service representative for more details.');
    }
    const voiceChannel = message.member.voiceChannel;

    if (!voiceChannel || voiceChannel.type !== 'voice') {
      return message.reply(`You arent in a voice channel`);
    }
    voiceChannel.join()
      .then(conn => {
        message.channel.send('🔊 Recording has been started');
        console.log('🔊 Recording has been started')
        message.delete()

        const receiver = conn.createReceiver();

        conn.on('speaking', (user, speaking) => {
          
          if (speaking) {
             console.log("listen on");
                    let fileStream = fs.createWriteStream(`./recordings/${user.username}-${user.id}.pcm`);
                    let audioStream = receiver.createPCMStream(user);
                    audioStream.pipe(fileStream);

                    //   audioStream.on('end', () => {
                    //    console.log("listen off");
                    //    fileStream.end();
                    // });
          }
      })
       console.log("connected");
    }
).catch(console.log);};


    exports.conf = {
    aliases: ['recordstart']
}
    exports.help = {
    name: 'recordstart',
    description: 'recordstart', 
    usage: `${process.env.PREFIX}record`
}