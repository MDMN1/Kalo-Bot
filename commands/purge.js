const Discord = module.require("discord.js");

  module.exports.run = async (client, message, args) => {

  const permError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 01 •')
        .setDescription('```You do not have **MANAGE_MESSAGES** Permissions```')
  
  const amountError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 02 •')
        .setDescription('```You must specify an amount of messages to delete```')
  
  const userError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 03 •')
        .setDescription('```You must specify a user and amount, or just an amount, of messages to purge!```')
    
  const countError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Error: 04 •')
        .setDescription('```You can\`t delete more than 100 messages at a time```')
  
//========================  End of Error Embeds  =======================//

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send
      (permError).then
        (message.delete()).then
          (msg => msg.delete(3000));
    
  const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if  (!amount) return message.channel.send
            (amountError).then
              (message.delete()).then
                (msg => msg.delete(5000));

  const user = message.mentions.users.first();
    if  (!amount && !user) return message.channel.send
            (userError).then
              (message.delete()).then
                (msg => msg.delete(5000));

      message.channel.fetchMessages({
        limit: amount,
      }).then((messages) => {
        
       if (user) {
         const filterBy = user ? user.id : client.user.id;
           messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
       }
  message.channel.bulkDelete(messages)
    .catch(error => console.log(error.message));
});

  if(!args[0]) return message.channel.send
      (amountError).then
        (message.delete()).then
          (msg => msg.delete(5000));

  if(args[0] > 100) return message.channel.send
      (countError).then
        (message.delete()).then
          (msg => msg.delete(5000));
  
    const embed = new Discord.RichEmbed()
      .setColor('#e0b72e')
        .setTitle('Clearing Messages<:cumpled_paper_emoji:489659629249495050><:cumpled_paper_emoji:489659629249495050><:cumpled_paper_emoji:489659629249495050>')
            message.delete().then
            message.channel.send(embed).then
              (msg => msg.delete(3000));
        
         message.channel.fetchMessages({
        limit: amount,
      }).then((messages) => {
        
       if (user) {
         const filterBy = user ? user.id : client.user.id;
           messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
       }
  message.channel.bulkDelete(messages)
    .catch(error => console.log(error.message));


    const embed2 = new Discord.RichEmbed()
      embed.setColor("#53a124")
        embed.setTitle('Purging Complete!')
          embed.addField(`<:cumpled_paper_emoji:489659629249495050>`, `🗑 ${args[0]} Messages cleared!`)
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