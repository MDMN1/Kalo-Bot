exports.run = (client, message, args) => {
   
if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel').then (message.delete())
if (message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to the guild').then (message.delete())
  
message.member.voiceChannel.join()
  message.channel.send('Joining Channel!')
  message.delete()

}
    exports.conf = {
      aliases: ['join']
    };
          
    exports.help = {
      name: 'join',
      description: 'join voice channel',
      usage: `${process.env.PREFIX}join`
    };