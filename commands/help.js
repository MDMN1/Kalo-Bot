const Discord = require("discord.js");
  exports.run = (client, message, args, aliases) => {
    
    if (!args[0]){
      const embed = new Discord.RichEmbed()
        .setThumbnail('https://cdn.glitch.com/c4d13276-5b80-4293-88a3-29ef7fdcde4d%2FKalo%20Logo%20filled.png?1531016364768')
          .addField('**Discord Quick links**', `[Discord Invite Link](https://discord.gg/kRr32v3)`)
            .addField('**Minecraft Server IP**', 'play.KalopsiaMC.com')
              .addField('**Quick Links**', `[Website](http://kalo-mc.com/index.php) | [Store](https://kalomc.craftingstore.net/)`)
            .addField('**Rules**', `[Server Rules](http://kalo-mc.com/index.php?pages/server-rules/) | [Discord Rules](http://kalo-mc.com/index.php?pages/discord-rules/) | [All Rules](http://kalo-mc.com/index.php?pages/Rules/)`)
          .addField('**Vote Links**', `[Vote 1](http://vote1.kalo-mc.com/) | [Vote 2](http://vote2.kalo-mc.com/) | [Vote 3](http://vote3.kalo-mc.com/)`)
        .addField('**Commands**', '!invite | !ip | !rules |!store | !vote | !help [command_name]')
         message.channel.send(embed);
          message.delete(5000);
            } else {
                let command = args[0];
                  if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send('```css'+`\n[Command Name: ${command.help.name}]\n[Aliases: ${command.conf.aliases}]\n\nUsage: ${command.help.usage}\nDescription: ${command.help.description}`+'```').then (message.delete());
}}};

  exports.conf = {
    aliases: ['h']
  };

  exports.help = {
    name: 'help',
    description: 'Displays a help menu \nIf you want more info on a command do !help (command name)',
    usage: `${process.env.PREFIX}help`
  };