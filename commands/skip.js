const Discord = require('discord.js');

  exports.run = async(client, message, args, queue) => {
    let serverQueue = queue.get(message.guild.id);
    let guild = message.guild.id;
    let fetched = serverQueue.get(message.guild.id)
    if  (!fetched) return message.channel.send('Kalo-Bot isnt listenting to any music')
    
    if  (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You arent listening to music with Kalo-Bot')
    
    let userCount = message.member.voiceChannel.members.size
    let required = Math.ceil(userCount/2)
    
    if  (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = []
    
    if  (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`You have already voted to skip! ${fetched.queue[0].voteSkips.length}/{required} required`)
    
    fetched.queue[0].voteSkips.push(message.member.id)
    
    serverQueue.active.set(message.guild.id, fetched)
    
    if  (fetched.queue[0].voteSkips.length >= require) {
        message.channel.send('Song has been skipped!')
      return fetched.dispatcher.emit('finish')
    }
    message.channel.send(`Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required}`)
};

  exports.conf = {
  aliases: ['next', 'voteskip']}
  exports.help = {
  name: 'skip',
  description: 'skips the current track playing and goes to the next song in queue', 
  usage: `${process.env.PREFIX}skip`}