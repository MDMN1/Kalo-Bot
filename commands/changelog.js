const Discord = require('discord.js');
  exports.run = async (client, message, args) => {
    
    let title = args.join(" ").split(" | ");
    let changelogChannel = client.channels.find(channel => channel.name === 'ᴄʜᴀɴɢᴇʟᴏɢ')
    
    if  (message.author.id == process.env.RAL || message.author.id == process.env.CHRIS) {
          changelogChannel.send
          (`\`\`\`asciidoc\n= ${title[0]} =\n\nDescription :: ${title[1]}\`\`\``)
            message.delete()
  }
};

    exports.conf = {aliases: []}
    exports.help = {
    name: 'changelog',
    description: 'make a change to the changelog channel',
    usage: `${process.env.PREFIX}changelog [Title | stuff that was changed]`}