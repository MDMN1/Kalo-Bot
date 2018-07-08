const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
  

  if(!message.content.includes(`?`)) return message.channel.send('Please make sure to end your sentence with a ?')
	let replies = ['Yes', 'No', 'Maybe', 'I can not answer that for you', 'Ask again later'];

	let result = replies[Math.floor(Math.random() * replies.length)];
	let question = args.slice(0).join(" ");
	
	let embed = new Discord.RichEmbed()
		.setColor('0xff69b4')
		.addField("\n\n\n The question was", "`" + question + "`")
		.addField("\n\n\n The answer is", "`" + result + "`")
	message.channel.send(embed);
  
  
};
exports.conf = {
aliases: ['8b']
};

exports.help = {
name: '8ball',
description: 'Magic 8ball', 
usage: `${process.env.PREFIX}8ball <question> `
};