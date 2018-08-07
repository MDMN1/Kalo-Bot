const db = require ('quick.db')

exports.run = async (client, member) => {
//ye its not storing into the json file @here
  let role =  member.guild.roles.find('name', 'Member');
  //fix for now
  // let welcomeChannel = member.guild.channels.find('name', 'welcome');
  let nameg = await db.fetch(`serverSettings_${member.guild.id}`, { target:"welcomeChannel"});
  let welcomeChannel = member.guild.channels.get(nameg);

  const { Canvas } = require ('canvas-constructor');
  const { Attachment } = require('discord.js');
  const { get } = require ('snekfetch');
  const { resolve, join } = require("path");

  const user = (member.guild.members.get.serverNewMember);
  const name =  member.user.tag.length > 25 ?  member.user.tag.substring(0, 22) + "..." :  member.user.tag;
  
  const {body} = await get('https://cdn.glitch.com/c4d13276-5b80-4293-88a3-29ef7fdcde4d%2Fwelcomebanner_bevel.png?1531016354304');
  const {body:avatar} = await get(member.user.displayAvatarURL);
  const image = new Canvas(1000, 300)
  
    .addImage(body, 0, 0, 1000, 300) //yo i know wut all the numbers stand for now, ( vs code) >?
      .setTextFont('30px Arial')
        .setColor('#FFFFFF')
          .addText(name, 650, 280)//x, y, maxWidth
          .setTextAlign('center')
        .addRoundImage(avatar, 685,40,182,182,92)    //x, y, width, height, radius
      .restore()
    .toBuffer();
//Autorole after 5min
          setTimeout(function(){
           // member.addRole(role).then(      DB code is the issue. Rest works fine
             welcomeChannel.send(new Attachment(Buffer.from(image), 'welcome.png'))//) 
             
//      const serverStatus = {
//     guildID: '343987204147642380',
//     totalUsersID: '461945850206355479',
//     memberCountID: '461945634174533652',
//     botCountID: '461945759479103519'
//   };
             
//     client.channels.get(serverStatus.totalUsersID).setName(`Total Users : ${member.guild.memberCount} `);
//     client.channels.get(serverStatus.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
//     client.channels.get(serverStatus.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
      }, 5000  //5sec for testing
  )}

//1min = 60000
//5min = 300000