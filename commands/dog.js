const Discord = require('discord.js');
const superagent = require ("superagent");
const botsettings = process.env
  exports.run = async (client, message ) => {
    
//========================  Start of Variables  =======================//
    
        let {body} = await superagent.get(`https://random.dog/woof.json`);
    
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//

      let Dog = new Discord.RichEmbed()
          .setImage(body.url)
    
//========================  Start of Embeds  =======================//
  
    message.channel.send(Dog).then
    (message.delete())
};


    exports.conf = {
    aliases: ['doge', 'dg']
}   
    exports.help = {
    name: 'dog',
    description: 'random dog pic',
    usage: `${botsettings.PREFIX}dog`
}