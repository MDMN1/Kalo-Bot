const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
    if  (!message.member.hasPermission("MANAGE_ROLES")) return;
    
    if  (!args.join(' ')) return message.channel.send
        ("Please provide a search term");
    
    let  users = message.guild.members;  
    if   (!users) return message.channel.send
         ('No matches were found.');
    
    let  searchterm = args.join(' ');
     if  (searchterm !== users) return message.channel.send
         ('No results bud')
    
    let  matches = users.filter(member => member.user.tag.toLowerCase().includes(searchterm.toLowerCase().split(' | ')));
     if  (!matches) return message.channel.send
         ('No matches were found.')
    
    const  embed = new Discord.RichEmbed()
           .setTitle(`You searched for [${searchterm}]`)
           .addField('__Matches found__', matches.map(u => u.user))
    
    message.channel.send(embed).then
      (message.delete()).then
        (msg => msg.delete(30000));
};

    exports.conf = {aliases: ['search']}
    exports.help = {
    name: 'find',
    description: 'Finds all users in the server with the search term',
    usage: `${process.env.PREFIX}find [searchTerm]`}