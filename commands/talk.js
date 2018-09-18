module.exports.run = (client, message, args) => {
   // if (args.length < 1) {
     //   throw 'You must provide some text to say!';
   // }

    let text = args.join(' ');
    
 if  (message.author.id == process.env.RAL || message.author.id == process.env.FREAK) { 
        message.channel.send(args.join(' '));
          message.delete()
   }
}

exports.conf = {
aliases: ['talk']
};

exports.help = {
name: 'talk',
description: 'talk Command for Ralston & Freak', 
usage: `${process.env.PREFIX}talk <text> `
};