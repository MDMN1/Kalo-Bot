exports.run = (client, message, args) => {

  let guild = message.guild.id
  let fetched = new Map().get(guild.id)
  
  if  (!fetched) return message.channel.send('No music playing')
  
  if  (message.member.voiceChannel !== message.member.me.voiceChannel) return message.channel.send('You arent in the channel with the bot')
  
  if  (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Please input a number betwee 0-200')
  
  fetched.dispatcher.setVolume(args[0]/100)
  message.channel.send(`Volume has been changed to ${args[0]}`)
  message.delete()

}
    exports.conf = {
    aliases: ['vol']
}   
    exports.help = {
    name: 'volume',
    description: 'changes music volume for all',
    usage: `${process.env.PREFIX}volume`
} 