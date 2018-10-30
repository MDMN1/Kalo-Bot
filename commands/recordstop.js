  exports.run = async (client, message, args) => {
    
    let voiceChannel = message.member.voiceChannel;

    message.channel.send('🔇 Recording has been stopped')
    console.log('🔇 Recording has been stopped')
    voiceChannel.leave()
    message.delete()
}; 
  
    exports.conf = {
    aliases: ['recordstop']
}
    exports.help = {
    name: 'recordstop',
    description: 'recordstop', 
    usage: `${process.env.PREFIX}record`
}