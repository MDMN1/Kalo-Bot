const Discord = require('discord.js');

  exports.run = async(client, guild, queue, message, args) => {
    
    let fetched = queue.get(guild.id)
    if  (!fetched) return message.channel.send('No music is playing');
    
    if  (message.member.voiecChannel !== message.guild.me.voiceChannel) return message.channel.send('you arnet in my channel')
    
    let userCount = message.member.voiceChannel.members.size
    let required = Math.ceil(userCount/2)
    
    if (!fetched.queue[0].voteSkip) fetched.queue[0].voteSkip = [];
    
    if  (fetched.queue[0].voteSkip.includes(message.member.id)) return message.channel.send(`You already voted! ${fetched.queue[0].voteSkip.length}/${required} required`)
    
    fetched.queue[0].voteSkip.push(message.member.id)
    
    queue.set(message.guild.id, fetched);
    
    if  (fetched.queue[0].voteSkip.length >= required) {
      
      message.channel.send('Sucessfully skipped the song!');
      
      return fetched.dispatcher.emit('finish')
      
    }

    message.channel.send(`Succesfully voted to skip! ${fetched.queue[0].voteSkip.length}/{required} required`)
    
}

  exports.conf = {
    aliases: ['skip']
};

  exports.help = {
    name: 'skip',
    description: 'skip', 
    usage: `${process.env.PREFIX}skip`
};