module.exports.run = (client, message, args, serverQueue) => {
if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumed the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	}

exports.conf = {
aliases: ['resume', 'unpause']
};

exports.help = {
name: 'resume',
description: 'Resume the music from where it was paused', 
usage: `${process.env.PREFIX}resume`
};