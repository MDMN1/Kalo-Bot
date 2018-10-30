const Discord = require('discord.js');
const superagent = require ("superagent");
  exports.run = async (client, message ) => {
    
    let {body} = await superagent.get(`http://aws.random.cat/meow`)
    const Cat = new Discord.RichEmbed()
          .setImage(body.file)

    message.channel.send(Cat)
      message.delete()
};

    exports.conf = {aliases: ['kitty', 'kat', 'kitten']}   
    exports.help = {
    name: 'cat',
    description: 'random cat pic',
    usage: `${process.env.PREFIX}cat`}