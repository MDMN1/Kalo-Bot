exports.run = (client, message, args, aliases) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send('```css'+`\n[Full KaloBot Command List]   »»» For more information on a command use [${process.env.PREFIX}command 'Command Name'] ««« | [REQUIRED] | (OPTIONAL) \t\t\t\t»»» [NOTICE!] Not all commands can be used by members «««
                                    \n\n${client.commands.map(c => `${process.env.PREFIX}${c.help.name}${' '.repeat(longest - c.help.name.length)}`).join('')}
                                     \n`+'```').then (message.delete());
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send('```css'+`\n[Command Name: ${command.help.name}]\n\n[Usage]: ${command.help.usage}\n[Aliases]: ${command.conf.aliases}\n[Description]: ${command.help.description}`+'```').then (message.delete());
    }           /*Aliases: ${command.help.aliases}\n*/
  }

// new test code

// if (args[0].toLowerCase() === "Owner") {
//     message.channel.send('```css'+`\n[Owner Commands]\n\n${client.commands.BotOwner.map(c => `${botsettings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} » ${c.help.description}`).join('\n')}\n`+'```').then (message.delete());
// }

// if (args[0].toLowerCase() === "Moderator") {
//     message.channel.send('```css'+`\n[Moderator Commands]\n\n${client.commands.Moderator.map(c => `${botsettings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} » ${c.help.description}`).join('\n')}\n`+'```').then (message.delete());
// }

// if (args[0].toLowerCase() === "Member") {
//     message.channel.send('```css'+`\n[Member Commands]\n\n${client.commands.Member.map(c => `${botsettings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} » ${c.help.description}`).join('\n')}\n`+'```').then (message.delete());
// }

};

exports.conf = {
  aliases: ['command', 'cmd', 'cmds']
};

exports.help = {
  name: 'commands',
  description: 'Displays all the available commands for the bot',
  usage: `${process.env.PREFIX}command (command name)`
};