exports.run = (client, message, args, ops) => {

  if  (message.channel.id !== '419249007169110026') return message.channel.send
      ('You need to be in #music-commands to play music').then (message.delete()).then(m=>m.delete(3000));
  
if  (message.member.voiceChannelID !== '419249041717854210') return message.channel.send
      ('You need to be in the Music Room to use this command').then (message.delete()).then(m=>m.delete(3000));
  
  if(!message.member.voiceChannel) return message.channel.send('you are not in a voice channel');
  
  if(!message.guild.me.voiceChannel) return message.channel.send('sorry, bot isnt connected to guild')
  
  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('You arent connected in the same channel');
  
  message.guild.me.voiceChannel.leave()
  
  message.channel.send('I have left the voice channel')
}

exports.conf = {
aliases: ['stop', 'leave']
};

exports.help = {
name: 'stop',
description: 'leaves voice channel', 
usage: `${process.env.PREFIX}ytleave`
};