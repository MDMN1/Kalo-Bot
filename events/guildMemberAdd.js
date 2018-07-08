const db = require ('quick.db')

exports.run = async (client, member) => {

  let role =  member.guild.roles.find('name', 'Member');
  let nameg = await db.fetch(`serverSettings_${member.guild.id}`, { target: ".welcomeChannel" });
  let welcomeChannel = member.guild.channel.get(nameg);

  const { Canvas } = require ('canvas-constructor');
  const { Attachment } = require('discord.js');
  const { get } = require ('snekfetch');
  const { resolve, join } = require("path");

  const user = (member.guild.members.get.serverNewMember);
  const name =  member.user.tag.length > 25 ?  member.user.tag.substring(0, 22) + "..." :  member.user.tag;
  
  const {body} = await get('https://cdn.glitch.com/c4d13276-5b80-4293-88a3-29ef7fdcde4d%2Fwelcomebanner_bevel.png?1531016354304');
  const {body:avatar} = await get(member.user.displayAvatarURL);
  const image = new Canvas(1000, 300)
  
    .addImage(body, 0, 0, 1000, 300)
      .setTextFont('30px Arial')
        .setColor('#FFFFFF')
          .addText(name, 650, 280)//Horizontal, Vertical
          .setTextAlign('center')
        .addRoundImage(avatar, 685,40,182,182,92)    //(Horizontal),(Vertical),( Squashiness??!?!?  ),(Size || Stretch)
      .restore()
    .toBuffer();
//Autorole after 5min
          setTimeout(function(){
           // member.addRole(role).then(
             welcomeChannel.send(new Attachment(image, 'welcome.png'))//) 
             
//      const serverStatus = {
//     guildID: '343987204147642380',
//     totalUsersID: '461945850206355479',
//     memberCountID: '461945634174533652',
//     botCountID: '461945759479103519'
//   };
             
//     client.channels.get(serverStatus.totalUsersID).setName(`Total Users : ${member.guild.memberCount} `);
//     client.channels.get(serverStatus.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
//     client.channels.get(serverStatus.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
      }, 5000
  )}

//1min = 60000
//5min = 300000