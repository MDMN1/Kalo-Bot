const db = require ('quick.db')
  exports.run = async (client, member) => {
    
    let nameg = await db.fetch(`serverSettings_${member.guild.id}`, { target: "leaveChannel"});
    let leavesChannel = member.guild.channels.get(nameg);
      
    console.log(member.guild.id)
      leavesChannel.send(`${member.user} has left **${member.guild.name}**`);
};