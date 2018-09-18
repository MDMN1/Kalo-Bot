const Discord = require('discord.js');
  exports.run = async (client, message, args) => {

//========================  Start of Variables  =======================//
    
    let title = args.join(" ").split(" | ");
    let changelogChannel = message.guild.channels.find(c => c.name === 'ᴄʜᴀɴɢᴇʟᴏɢ')
    
//========================  End of Variables  =======================//
    
    if  (message.author.id == process.env.RAL || message.author.id == process.env.FREAK) {
      
    changelogChannel.send
    (`\`\`\`asciidoc\n= ${title[0]} =\n\nDescription :: ${title[1]}\`\`\``)
    message.delete()
  }
};
  

    exports.conf = {
    aliases: ['log']
}         
    exports.help = {
    name: 'changelog',
    description: 'make a change to the changelog channel',
    usage: `${process.env.PREFIX}changelog`
}