const Discord = require('discord.js');
  exports.run = async(client, message,args, queue) => {
  
//========================  Start of Variables  =======================//
    
    let fetched = queue.get(message.guild.id)
    
    const emptyQueue = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setDescription('The queue is empty')
        
    if  (!fetched) return message.channel.send
          (emptyQueue).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    let queued = fetched.songs
    let nowPlaying = queued[0]
    let resp = `__**Now Playing**__: *${nowPlaying.title}*\n\n`
        for (var i =1; i < queued.length; i++) {
      resp += `**${i}**. *${queued[i].title}*\n`
    }
//========================  Start of Variables  =======================//
//========================  Start of Variables  =======================//
    

    
    const queueEmbed = new Discord.RichEmbed()
          .setColor('#41baea')
          .setTitle('🎶 Music Queue 🎶')
          .setDescription(resp)
    
//========================  Start of Variables  =======================//
    

    
    queue.delete().then
    message.channel.send(queueEmbed)
    message.delete()
};


    exports.conf = {
    aliases: ['queue', 'que', 'q']
}  
    exports.help = {
    name: 'queue',
    description: 'queue', 
    usage: `${process.env.PREFIX}queue`
}