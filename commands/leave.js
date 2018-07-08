module.exports.run = (client, message, args, serverQueue) => {
  
  if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
  };

  exports.conf = {
    aliases: ['leave', 'stop']
  };

  exports.help = {
    name: 'leave',
    description: 'Makes the bot leave the voice channel', 
    usage: `${process.env.PREFIX}leave`
  };