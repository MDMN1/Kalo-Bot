module.exports.run = (client, message, args, serverQueue) => {
  		
if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
}

exports.conf = {
aliases: ['np']
};

exports.help = {
name: 'np',
description: 'Displays the song information of what is currently playing', 
usage: `${process.env.PREFIX}np`
};