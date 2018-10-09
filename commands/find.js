const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
    
    let searchterm = args.join(' ');
    let users = message.guild.members;
    let matches = users.filter(u => u.user.tag.toLowerCase().includes(searchterm.toLowerCase().split(' | ')));
    
    const embed = new Discord.RichEmbed()
        .setTitle(`You searched for [${searchterm}]`)
        .addField('__Matches found__', matches.map(u => u.user))
    
    
    
    if (!message.member.hasPermission("MANAGE_ROLES")) return;
    
    if  (!args.join(' ')) return message.channel.send
        ("Please provide a search term");
      
    if  (!users) return message.channel.send
        ('No matches were found.');
      
    if (searchterm !== users) return message.channel.send
        ('No results bud')
    
    
      if  (!matches) return message.channel.send
          ('No matches were found.')
      
    
    
    message.channel.send(embed).then
    (message.delete()).then
    (msg => msg.delete(30000));      
};


    exports.conf = {
    aliases: ['find', 'search']
}
    exports.help = {
    name: 'find',
    description: 'Finds all users in the server with the search term',
    usage: `${process.env.PREFIX}find <searchTerm>`
}