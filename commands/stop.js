const Discord = require('discord.js')  
  exports.run = (client, message, args, ops) => {

//========================  Start of Variables  =======================//
    
    let musicText = message.guild.channels.find(t => t.name === 'music-commands');
    let musicVoice = message.guild.channels.find(c => c.name === '🎶 Music Room');
    let voiceChannel = message.member.voiceChannel;
    
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//
    
    const textChannelError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 01 •')
          .setDescription('```You need to be in #music-commands to use music commands```')
    
    const voiceChannelError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 02 •')
          .setDescription('```You need to be in the voice channel "🎶Music Room" for the commands to work```')
    
    const voiceChannelError2 = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 03 •')
          .setDescription('```I\'m sorry but you need to be in a voice channel to play music!```')
    
    const botConnectionError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 04 •')
          .setDescription('```Sorry, the bot isnt connected to any voice channels```')
    
    const sameVoiceError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 05 •')
          .setDescription('```You aren\'t connected to the same channel as the bot```')
    
    const LeftMessage = new Discord.RichEmbed()
          .setColor('41baea')
          .setDescription(`I have left ${musicVoice}`)
    
//========================  End of Embeds  =======================//
  
      if  (message.channel.id !== musicText.id) return message.channel.send
          (textChannelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
      if  (message.member.voiceChannel !== musicVoice) return message.channel.send
          (voiceChannelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
    if  (!voiceChannel) return message.channel.send
          (voiceChannelError2).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  
    if  (!message.guild.me.voiceChannel) return message.channel.send
          (botConnectionError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send
        (sameVoiceError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
      message.guild.me.voiceChannel.leave()
      message.channel.send(LeftMessage).then
      (message.delete()).then
      (msg => msg.delete(5000));
}

exports.conf = {
aliases: ['stop', 'leave']
};

exports.help = {
name: 'stop',
description: 'leaves voice channel', 
usage: `${process.env.PREFIX}ytleave`
};