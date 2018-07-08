const discord = require ("discord.js");
const ytdl = require('ytdl-core');

  module.exports.run = async (client, message, args) => {
  
        	   let voiceChannel = message.member.voiceChannel;
            if(!voiceChannel) return message.channel.send("Oof!");

            const perms = voiceChannel.permissionsFor(message.client.user);
            if(!perms.has("CONNECT")) {
                 message.channel.send("I do not have the perms to join!");
            }
            if (!perms.has("SPEAK")){
                message.channel.send("I cannot talk in the channel. :sob:");
            }

            try {
                var connection = await voiceChannel.join();
            } catch (error) {
                                    message.channel.send(error); //https://hastebin.com/someurl.js

            }

            const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=f49ELvryhao'));
            dispatcher.setVolumeLogarithmic(5 / 5);
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
  };

  exports.conf = {
    aliases: ['oof']
  };

  exports.help = {
    name: 'oof',
    description: 'oof',
    usage: `${process.env.PREFIX}oof`
  };