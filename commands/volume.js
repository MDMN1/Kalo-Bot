exports.run = (client, message, args) => {
const queue = new Map();
  let fetched = queue.active.get(message.guild.id)
  
  if  (!fetched) return message.channel.send('Nothing is playing')
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You arent in my voice channel')
  
  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Please input a number between 0-200')
  
  fetched.dispatcher.setVolume(args[0]/100)
  message.channel.send(`Volume has been set to ${args[0]}`)

}


    exports.conf = {
    aliases: ['volume', 'v']
}   
    exports.help = {
    name: 'volume',
    description: 'changes music volume for all',
    usage: `${process.env.PREFIX}volume`
} 