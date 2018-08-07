const Discord = require('discord.js');
const fs = require('fs')

exports.run = (client) => {

//   play.kalo-mc.com » ${process.env.PREFIX}help
  // Under Maitenence
  client.user.setPresence(
  { status: 'online', game: { name: `play.kalo-mc.com » ${process.env.PREFIX}help`, type: 'STREAMING', url: 'https://www.twitch.tv/twitch'} });

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

    fs.readdir(`./commands/`, (err, files) => {
        if (err) console.error(err);
            let jsfiles = files.filter(f => f.split(".").pop() === "js");
                if(jsfiles.length <= 0) {
                    console.log("No commands to load!");
                        return };
                            console.log(`[Commands]\t Loaded a total amount of ${jsfiles.length} commands!`);
                                jsfiles.forEach((f, i) => {
                                    let props = require(`../commands/${f}`);
                                        // console.log(`${i+1}: ${f}`);
                                            client.commands.set(props.help.name, props);
                                                props.conf.aliases.forEach(alias => {
                                                    client.aliases.set(alias, props.help.name);
        });
      });
        console.log(`${client.user.username} is ready`);
    });
}