const db = require ('quick.db')
const Discord = require('discord.js')
exports.run = async (client, member) => {

  let nameg = await db.fetch(`serverSettings_${member.guild.id}`, { target:"welcomeChannel"});
  let welcomeChannel = member.guild.channels.get(nameg);
  
  const ruleEmbed = new Discord.RichEmbed()
        .setTitle('Welcome to Kalopsia MC')
        .setDescription('Here is a list of general rules to follow\n\n' + 
`\`\`\`asciidoc
1. No Disrespect
2. No Spamming
3. No Excessive Caps
4. Stop When Asked To 
5. Do not argue or talk about in-game punishments
6. No Advertising
7. Do not troll
8. Use channels for their Purpose
9. No Sharing Person Information of Players or Staff
10. No NSFW content or Topics
11. No Politics or Inappropriate Topics
12. Pictures Need To Be in the right channel  
13. DDos/Dox threats and threats to hack another user \n\t\twill result in a permanent Ban
14. English Only Please
15. Use Common Sense
\`\`\``)

//========================  Welcome Banner  =======================//
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
    .addText(name, 650, 280)
    .setTextAlign('center')
    .addRoundImage(avatar, 685,40,182,182,92)  //  x, y, width, height, radius
    .restore()
    .toBuffer();
//========================  End of Welcome Banner  =======================//

          
  
          setTimeout(function() {
             welcomeChannel.send(new Attachment(Buffer.from(image), 'welcome.png'))//sends the welcome img 5min after they join
            //sends list of rules after 5min
  }, 300000)  //  5min in ms
  member.send(ruleEmbed)
}