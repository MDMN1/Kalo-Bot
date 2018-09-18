const Discord = require('discord.js');
const superagent = require ("superagent");
  exports.run = async (client, message ) => {
  
//========================  Start of Variables  =======================//
    
    let {body} = await superagent.get(`http://aws.random.cat/meow`)
    
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//

    const Cat = new Discord.RichEmbed()
          .setImage(body.file)

//========================  End of Embeds  =======================//
    
    message.channel.send(Cat)
    message.delete()
};


    exports.conf = {
    aliases: ['kitty', 'kat']
}   
    exports.help = {
    name: 'cat',
    description: 'random cat pic',
    usage: `${process.env.PREFIX}cat`
}