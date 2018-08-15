const Discord = require ("discord.js");
const superagent = require ("superagent");
const botsettings = process.env
//oof still i wanna it to look like we are pro coders
exports.run = async (client, message ) => { //neither of those are
  
    let {body} = await superagent
        .get(`https://random.dog/woof.json`);
   

    let embed = new Discord.RichEmbed()
        .setImage(body.url)
    message.channel.send(embed)
}

    exports.conf = {
        aliases: ['doge', 'dg']
    };
    
    exports.help = {
        name: 'dog',
        description: 'random dog pic',
        usage: `${botsettings.PREFIX}dog`
    };