const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
  

//   if(!message.content.includes(`?`)) return message.channel.send('Please make sure to end your sentence with a ?').then(message.delete()).then(m=>m.delete(3000));
// 	let replies = ['Yes', 'No', 'Maybe', 'I can not answer that for you', 'Ask again later'];

// 	let result = replies[Math.floor(Math.random() * replies.length)];
// 	let question = args.slice(0).join(" ");
	
// 	let embed = new Discord.RichEmbed()
// 		.setColor('0xff69b4')
// 		.addField("\n\n\n The question was", "`" + question + "`")
// 		.addField("\n\n\n The answer is", "`" + result + "`")
// 	message.channel.send(embed);
//  }
  
    let replies = [  'Yes',
                     'No',
                     'Why are you asking me that?',
                     'Maybe?',
                     'Oof, Ask me again',
                     'Have you tried google yet?',
                     'umm...lol',
                     'Ask Coolicos',
                     'Kalo-Bot does not have the answer'];
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice().join(" ");

    if(!args[2]) return message.channel.send('Please ask me a full question').then(message.delete()).then(m=>m.delete(3000));
    if(!message.content.includes(`?`)) return message.channel.send('Please make sure to end your sentence with a `?`').then(message.delete()).then(m=>m.delete(3000));
    
  let embed = new Discord.RichEmbed()
        .setTitle('🎱Magic Kalo-Ball🎱')
        .addField("Question:", question)
        .addField("Answer:", replies[result])
        .setThumbnail(client.user.displayAvatarURL)

            message.channel.send(embed);
            message.delete()

};
  exports.conf = {
  aliases: ['8b']
  };

  exports.help = {
  name: '8ball',
  description: 'Magic 8ball', 
  usage: `${process.env.PREFIX}8ball <question> ?`
};