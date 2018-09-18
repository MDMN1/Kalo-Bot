const Discord = require("discord.js");
  exports.run = (client, message, args, aliases) => {
    
    if (!args[0]){
      const embed = new Discord.RichEmbed()
        .setThumbnail('https://cdn.glitch.com/c4d13276-5b80-4293-88a3-29ef7fdcde4d%2FKalo%20Logo%20filled.png?1531016364768')
          .addField('**Kalo-Bot Help Center**', '[Discord Invite Link](https://discord.gg/VTfnse9)')
            .addField('**Minecraft Server IP**', 'play.kalo-mc.com')
              .addField('**Quick Links**', `[Forums](http://forums.kalo-mc.com/index.php) | [Store](https://kalomc.craftingstore.net/)`)
            .addField('**Rules**', `[Server Rules](http://forums.kalo-mc.com/index.php?threads/global-server-rules.2/) | [Discord Rules](https://discord.gg/Qumt6yB) | \`!rules for all rule links\``)
          .addField('**Vote Links**', `[Vote 1](https://minecraftservers.org/server/506654) | [Vote 2](https://minecraft-mp.com/server-s199857) | [Vote 3](https://topg.org/server-kalomc-id494606)`)
        .addField('**Commands**', '!invite | !ip | !rules | !store | !vote \n **Do !help [command_name] for more information on a command**\n`ex: !help invite`')
         message.channel.send(embed);
          message.delete(3000);
      
      
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