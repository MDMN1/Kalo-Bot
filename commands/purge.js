const Discord = module.require("discord.js");

  module.exports.run = async (client, message, args) => {

  const errEmbed = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You do not have **MANAGE_MESSAGES** Permissions```')
  
  const errEmbed2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must specify an amount of messages to delete```')
  
  const errEmbed3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You must specify a user and amount, or just an amount, of messages to purge!```')
    
  const errEmbed4 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('`Error`')
        .setDescription('```You can\`t delete more than 100 messages at a time```')
   
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send
      (errEmbed).then
        (message.delete()).then
          (msg => msg.delete(3000));

if  (!amount) return message.channel.send
      (errEmbed2).then
        (message.delete()).then
          (msg => msg.delete(3000));
    
if  (!amount && !user) return message.channel.send
      (errEmbed3).then
        (message.delete()).then
          (msg => msg.delete(3000));
      message.channel.fetchMessages({
       limit: amount,
        }).then((messages) => {
   if (user) {
   const filterBy = user ? user.id : client.user.id;
     messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
   }
     message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
      });

  if(!args[0]) return message.channel.send
      (errEmbed2).then
        (message.delete()).then
          (msg => msg.delete(3000));

  if(args[0] > 100) return message.channel.send
      (errEmbed).then
        (message.delete()).then
          (msg => msg.delete(3000));
  
    const embed = new Discord.RichEmbed()
      .setColor('#e0b72e')
        .setTitle('Clearing Messages<:crumpledpaper:430231307612585996><:crumpledpaper:430231307612585996><:crumpledpaper:430231307612585996>')
          message.delete()
            message.channel.send(embed).then
          (msg => msg.delete(3000));

    let fetched = message.channel.fetchMessages({limit: args[0]})
        
      message.channel.bulkDelete(fetched).then (msg => {

    const embed2 = new Discord.RichEmbed()
      embed.setColor("#53a124")
        embed.setTitle('Purging Complete!')
          embed.addField(`<:crumpledpaper:430231307612585996>`, `🗑 ${args[0]} Messages cleared!`)
            message.channel.send(embed).then
              (msg => msg.delete(5000))  
    });
};

  exports.conf = {
    aliases: ['purge', 'clear']
  };

  exports.help = {
    name: 'purge',
    description: 'Clears specified amount of messages',
    usage: `${process.env.PREFIX}purge [number]`
  };