const ytdl = require ('ytdl-core')
exports.run = (client, serverQueue, message, args) => {

  
  let dispatcher = serverQueue.connection
  let song = []
  
if (Math.round(dispatcher.volume*50) >= 100) return message.channel.send(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.setVolume*50 + (2*(message.content.split('+').length-1)))/50,2));
					message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);

}
    exports.conf = {
    aliases: ['v+']
}   
    exports.help = {
    name: 'volume+',
    description: 'changes music volume for all',
    usage: `${process.env.PREFIX}volume`
} 