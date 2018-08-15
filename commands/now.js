module.exports.run = (client, message, args, serverQueue) => {
  		
if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs.title}**`);
}

exports.conf = {
aliases: ['now', 'np']
};

exports.help = {
name: 'now',
description: 'Displays the song information of what is currently playing', 
usage: `${process.env.PREFIX}np`
};