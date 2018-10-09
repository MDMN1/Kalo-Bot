const Discord = require('discord.js');
const fs = require('fs')

exports.run = (client) => {
//========================  Bot Changing Status =======================//
  let statuses = [`play.kalo-mc.com`,`${process.env.PREFIX}help`, `Don\'t forget to vote!`]
    setInterval(function() {
  let status = statuses[Math.floor(Math.random()*statuses.length)]
      client.user.setPresence(
  { status: 'streaming', game: { name: status, type: 'STREAMING', url: 'https://www.twitch.tv/twitch'} });
  }, 10000)
//========================  End of Bot Changing Status  =======================//
  
//========================  Command Loader/Ready  =======================//

  
      console.log('▄ •▄  ▄▄▄· ▄▄▌            ▄▄▄▄·       ▄▄▄▄▄')
      console.log('█▌▄▌▪▐█ ▀█ ██•  ▪         ▐█ ▀█▪▪     •██  ')
      console.log('▐▀▀▄·▄█▀▀█ ██▪   ▄█▀▄     ▐█▀▀█▄ ▄█▀▄  ▐█.▪')
      console.log('▐█.█▌▐█ ▪▐▌▐█▌▐▌▐█▌.▐▌    ██▄▪▐█▐█▌.▐▌ ▐█▌·')
      console.log('·▀  ▀ ▀  ▀ .▀▀▀  ▀█▄▀▪    ·▀▀▀▀  ▀█▄▀▪ ▀▀▀ ')
      // console.log('▄▄▄  ▄▄▄ . ▄▄▄· ·▄▄▄▄   ▄· ▄▌              ')
      // console.log('▀▄ █·▀▄.▀·▐█ ▀█ ██▪ ██ ▐█▪██▌              ')
      // console.log('▐▀▀▄ ▐▀▀▪▄▄█▀▀█ ▐█· ▐█▌▐█▌▐█▪              ')
      // console.log('▐█•█▌▐█▄▄▌▐█ ▪▐▌██. ██  ▐█▀·.              ')
      // console.log('.▀  ▀ ▀▀▀  ▀  ▀ ▀▀▀▀▀•   ▀ •               ')
      console.log(`${client.user.username} is ready`);
}