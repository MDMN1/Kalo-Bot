exports.run = async (member) => {
    const leaveChannel = member.guild.channels.find(`name`, `moderation-log`);
      if (leaveChannel) {
          leaveChannel.send(`${member.user} has left **${member.guild.name}**`);
    };
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