const Discord = require('discord.js');
const superagent = require ("superagent");
  exports.run = async (client, message ) => {

    let {body} = await superagent.get(`https://random.dog/woof.json`);
    let Dog = new Discord.RichEmbed()
        .setImage(body.url)

    message.channel.send(Dog).then
    (message.delete())
};

    exports.conf = {aliases: ['doge', 'dg', 'doggy', 'doggie']}   
    exports.help = {
    name: 'dog',
    description: 'random dog pic',
    usage: `${process.env.PREFIX}dog`}