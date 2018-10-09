const Discord = require('discord.js');
const hastebin = require('hastebin-gen');
  module.exports.run = (client, message, args, queue, serverQueue) => {
    
//========================  Start of Variables  =======================//
    
    let code = args.join(" ");
    let evaled = eval(code);
    
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//
    
    const  TokenError = new Discord.RichEmbed()
          .setColor(`#00ff00`)
          .addField("**```Input```**", "```js\n" + args.join(" ") + "```")
          .addField("**```Output```**", "```js\n" + '(ノಠ益ಠ)ノ 彡 ┻━┻' + "```")
    
    const embed = new Discord.RichEmbed()
          .setColor(`#00ff00`)
          .addField("**```Input```**", "```js\n" + args.join(" ") + "```")
          .addField("**```Output```**", "```js\n" + clean(evaled) + "```")
    
//========================  End of Embeds  =======================//
    
  if  (message.author.id == process.env.RAL || message.author.id == process.env.FREAK) { 
    
      if  (args[0] === 'client.toke~n') {
          return message.channel.send(TokenError)
      };
    
  try {
        if  (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
    
  if  (clean(evaled).size < 30) {
                                  hastebin(`${clean(evaled)}`, "txt").then(r => {
                                  let embed = new Discord.RichEmbed()
                                      .setColor(`#00ff00`)
                                      .addField("**```Input```**", "```js\n" + args.join(" ") + "```")
                                      .addField("**```Output To Large```**", "`" + r + "`")
                                  }).catch(console.error)
    };
    
    message.channel.send(embed)
    } catch (err) {
    message.channel.send( {embed: { title: "`ERROR`", description:" ```xl\n" + clean(err) +"\n```", color: 0xff0000 }});}
}  
    else return message.channel.send
    (`Sorry! only <@${process.env.Ral}> & <@${process.env.Freak}> can use this`)
};
    function clean(text) {  if (typeof(text) === "string") {
                            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                            return text.replace(`client.token`, 'No u');
                            }
    else { return text}}


    exports.conf = {
    aliases: ['eval', 'e', 'code']
}
    exports.help = {
    name: 'eval',
    description: '$@#! (ノಠ益ಠ)ノ 彡 ┻━┻', 
    usage: ' Im sorry... ┬──┬ ノ( ゜-゜ノ)'
}