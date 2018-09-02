const Discord = require ("discord.js");
const superagent = require ("superagent");
const botsettings = process.env
//oof still i wanna it to look like we are pro coders
exports.run = async (client, message ) => { //neither of those are
  
  
  
    let {body} = await superagent
        .get(`http://aws.random.cat/meow`)
   

    let embed = new Discord.RichEmbed()
        .setImage(body.file)
    message.channel.send(embed)
  message.delete()
}  

    exports.conf = {
        aliases: ['kitty', 'kat']
    };
    
    exports.help = {
        name: 'cat',
        description: 'random cat pic',
        usage: `${botsettings.PREFIX}cat`
    };