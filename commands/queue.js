module.exports.run = (client, message, args, serverQueue) => {
  
// if (!serverQueue) return message.channel.send('There is nothing playing.');
// 		return message.channel.send(`__**Song queue:**__\n${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}**Now playing:** ${serverQueue.songs[0].title}`);
// }

console.log(serverQueue.songs.map(s => s))
}

exports.conf = {
aliases: ['queue', 'q']
};

exports.help = {
name: 'queue',
description: 'See the next songs in the queue', 
usage: `${process.env.PREFIX}queue`
};