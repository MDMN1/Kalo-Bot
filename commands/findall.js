const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
    if(message.author.id === process.env.RAL || message.author.id === process.env.FREAK) {

    let searchterm = args[0];
    if  (!searchterm) return message.channel.send
        ("Please provide a search term").then
        (message.delete()).then
        (msg => msg.delete(5000));
    
    let users = client.users;
    if  (!users) return message.channel.send
        ("No Users found").then
        (message.delete()).then
        (msg => msg.delete(5000));
    
       // if (searchterm !== users) return message.channel.send
       //  ('No results bud')
      
    let matches = users.filter(u => u.tag.toLowerCase().includes(searchterm.toLowerCase()));
    if  (!matches) return message.channel.send
        ('No matches were found.').then
        (message.delete()).then
        (msg => msg.delete(5000));

    const embed = new Discord.RichEmbed()
    .setTitle(`You searched for [${searchterm}]`)
    .addField("__**I found these matches for you**__", matches.map(u => u.tag))
    
    message.channel.send(embed).then
      (message.delete()).then
        (msg => msg.delete(10000));
  }
};


    exports.conf = {
    aliases: ['findall', 'searchall']
}
    exports.help = {
    name: 'findall',
    description: 'Finds all users the bot can see with the search term',
    usage: `${process.env.PREFIX}findall <searchTerm>`
}