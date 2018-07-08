module.exports.run = (client, message, args, serverQueue) => {
  
  if (serverQueue && serverQueue.playing) {
   	if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the music for you!');
		}
  }
}

  exports.conf = {
    aliases: ['pause']
  };

  exports.help = {
    name: 'pause',
    description: 'Pause the current track', 
    usage: `${process.env.PREFIX}pause`
  };