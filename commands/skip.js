module.exports.run = (client, message, args, serverQueue) => {
  
if (!message.member.voiceChannel) return message.channel.send
  ('You are not connected in a voice channel!');
		if (!serverQueue) return message.channel.send
        ('What am i gonna skip?');
		      serverQueue.connection.dispatcher.end();
  
};
exports.conf = {
aliases: ['skip']
};

exports.help = {
name: 'skip',
description: 'Skip the current track', 
usage: `${process.env.PREFIX}skip`
};