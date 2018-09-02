const db = require ('quick.db');
const discord = require ('discord.js');

exports.run = async (client, message, args) => { 
  let list = await db.fetch(`${message.author.id}__List`);
  let data = {firstItem: "Nothing", secondItem: "Nothing", thirdItem: "Nothing", fourthItem: "Nothing", fifthItem: "Nothing" };
  
  if(!list) {
   message.channel.send("You need to add an item to your list: \`!todo <item>\`") 
db.set(`${message.author.id}__List`, data);
  };
  let todoChannel = message.guild.channels.find(n => n.name ==='todo')
//go ahead
  let todo = args.join(' ');
  
  
  let test = await db.fetch(`${message.author.id}__List`, {target: "firstItem"});
   let test1 = await db.fetch(`${message.author.id}__List`, {target: "secondItem"});
   let test2 = await db.fetch(`${message.author.id}__List`, {target: "thirdItem"});
   let test3 = await db.fetch(`${message.author.id}__List`, {target: "fourthItem"});
   let test4= await db.fetch(`${message.author.id}__List`, {target: "fifthItem"});
  
  let first = list ? `1: ${test}\n` : " ";
  let two = list ? `2: ${test1}\n` : " ";
  let three = list ? `3: ${test2}\n` : " ";
  let four = list ? `4: ${test3}\n` : " ";
  let five = list ? `5: ${test4}\n` : " ";
  
  if (args[0])
  {
if (test === "Nothing")
    {
    return db.set(`${message.author.id}__List`, todo, {target: "firstItem"});
    };
    
    if (test !== "Nothing" && test1 === "Nothing")
    {
    return db.set(`${message.author.id}__List`, todo, {target: "secondItem"});
    };
    
    if (test1 !== "Nothing" && test2 === "Nothing")
    {
    return db.set(`${message.author.id}__List`, todo, {target: "thirdItem"});
    };
    
    if (test2 !== "Nothing" && test3 === "Nothing")
    {
    return db.set(`${message.author.id}__List`, todo, {target: "fourthItem"});
    };
    
    if (test3 !== "Nothing" && test4 === "Nothing")
    {
    return db.set(`${message.author.id}__List`, todo, {target: "fifthItem"});
    };
    
    if (test4 !== "Nothing" && args[0])
    {
  return message.channel.send("Max items on the list: Please remove one of the items by doing: \`!todo complete item name\`")
    }
  }
  
  if (args[0] === "complete") 
  {
    let name = args.join(' ').slice(9);

    
  }
  
  if (!args[0])
  {
  
  const embed = new discord.RichEmbed()
    .setTitle('__Todo List__')
    .setAuthor(message.author.username)
    .setThumbnail(message.author.displayAvatarURL)
    //.addField('Items', 
  .setDescription(`${first}${two}${three}${four}${five}`)
    .setTimestamp()
  
   todoChannel.send(embed)
    message.delete()
  
    if(message.reaction === "✅") {
        embed.delete()
    }
  }
}



    exports.conf = {
      aliases: ['todo']
    };
          
    exports.help = {
      name: 'todo',
      description: 'Need a list to remind u of things?',
      usage: `${process.env.PREFIX}todo <thing>`
    };