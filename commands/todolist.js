const db = require ('quick.db');
const discord = require ('discord.js');

exports.run = async (client, message, args) => { 
  let userDB = await db.set(`${message.author.id}__List`, data).then(s => console.log(s));
  
  
let firstItem = await db.get(`${message.author.id}__List`, {target: "firstItem"});
  
  

  if (!args[0]) 
  {
    let embed = new discord.RichEmbed()
    .setTitle(`Todo list!`)
    .setDescription(``);
  }
  
  let data = { firstItem: args[0] };
  

  
  
  

}


    exports.conf = {
      aliases: ['todolist']
    };
          
    exports.help = {
      name: 'todolist',
      description: 'Need a list to remind u of things?',
      usage: `${process.env.PREFIX}todolist <thing> <time>`
    };