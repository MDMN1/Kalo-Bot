const db = require ('quick.db')

exports.run = async (client, member) => { //xD tired af
console.log(member.guild.id)//the struggle
  let nameg = await db.fetch(`serverSettings_${member.guild.id}`, { target: ".leaveChannel" });
  let leaveChannel = member.guild.channels.get(nameg);
  
  leaveChannel.send(`${member.user} has left **${member.guild.name}**`);
  
//      const serverStatus = {
//     guildID: '343987204147642380',
//     totalUsersID: '461945850206355479',
//     memberCountID: '461945634174533652',
//     botCountID: '461945759479103519'
//   };
             
//     client.channels.get(serverStatus.totalUsersID).setName(`Total Users : ${member.guild.memberCount} `);
//     client.channels.get(serverStatus.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
//     client.channels.get(serverStatus.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
};