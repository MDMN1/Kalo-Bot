const Discord = require('discord.js');
const hastebin = require('hastebin-gen');
  module.exports.run = (client, message, args, queue, serverQueue) => {
    
    let code = args.join(" ");
    let evaled = eval(code);
    
  const  TokenError = new Discord.RichEmbed()
         .setColor(`#00ff00`)
         .addField("**Input**", "```js\n" + code + "```")
         .addField("**Output**", "```js\n" + '(ノಠ益ಠ)ノ 彡 ┻━┻' + "```")
     if  (args[0] === 'client.token')return message.channel.send
         (TokenError).then
         message.delete().then
         (msg => msg.delete(5000));
    
  const embed = new Discord.RichEmbed()
        .setColor(`#00ff00`)
        .addField("**Input**", "```js\n" + code + "```")
        .addField("**Output**", "```js\n" + clean(evaled) + "```")
        
  if  (message.author.id == process.env.RAL || message.author.id == process.env.FREAK) { 
  try { if (typeof evaled !== "string") {
      evaled = require("util").inspect(evaled);
           
  if (clean(evaled).length >= 1999) return hastebin(`${clean(evaled)}`, "js").then(r =>  {
  let embed = new Discord.RichEmbed()
      .setColor(`#00ff00`)
      .addField("**Input**", "```js\n" + args.join(" ") + "```")
      .addField("**Output To Large**", "\n"+ r + "")
  
  message.channel.send(embed)
  }).catch(console.error.message)                                          
  message.channel.send(embed)
}; 
    
  } catch (err) {
    message.channel.send
    ({embed: {title: "`ERROR`", description:" ```xl\n" + clean(err) +"\n```", color: 0xff0000 }})}
}
    else return message.channel.send
    (`Sorry! only <@${process.env.Ral}> & <@${process.env.Freak}> can use this`)
};
    function clean(text) {  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text.replace(`client.token`, 'No u');
}
    else { return text}
};

    exports.conf = {aliases: ['eval']}
    exports.help = {
    name: 'evaluate',
    description: '$@#! (ノಠ益ಠ)ノ 彡 ┻━┻', 
    usage: ' Im sorry... ┬──┬ ノ( ゜-゜ノ)'}