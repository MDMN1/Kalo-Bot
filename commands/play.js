const ytdl = require ('ytdl-core')
const YouTube = require ('simple-youtube-api')
const youtube = new YouTube('AIzaSyCefMliblFdxy2xaEuXrEr_e1f8Hn4Jqdw')
const Discord = require('discord.js');
  module.exports.run = async (client, message, args, queue, serverQueue) => {
  
//========================  Start of Variables  =======================//
    
    let url = args[0];
    let guild = message.guild.id;
    let musicText = message.guild.channels.find(t => t.name === 'music-commands');
    let musicVoice = message.guild.channels.find(c => c.name === '🎶 Music Room');
    let voiceChannel = message.member.voiceChannel;
    
    
//========================  End of Variables  =======================//
//========================  Start of Embeds  =======================//
    
    const urlError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 01 •')
          .setDescription('```Please Insert a URL or searchterm```')
    
    const textChannelError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 02 •')
          .setDescription('```You need to be in #music-commands to use music commands```')
    
    const voiceChannelError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 03 •')
          .setDescription('```You need to be in the voice channel "🎶Music Room" for the commands to work```')
    
    const voiceChannelError2 = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 04 •')
          .setDescription('```I\'m sorry but you need to be in a voice channel to play music!```')
    
    const connectPermError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 05 •')
          .setDescription('```I cannot connect to your voice channel! Gimme Perms!```')
    
    const speakPermError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 06 •')
          .setDescription('```I cannot speak in this voice channel! Gimme Perms!```')
    
//========================  End of Embeds  =======================//
    
    if  (!url) return message.channel.send
          (urlError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
    if  (message.channel.id !== musicText.id) return message.channel.send
          (textChannelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
    if  (message.member.voiceChannel !== musicVoice) return message.channel.send
          (voiceChannelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
    if  (!voiceChannel) return message.channel.send
          (voiceChannelError2).then
            (message.delete()).then
              (msg => msg.delete(5000));
		  
    if  (!message.guild.member(client.user).hasPermission('CONNECT')) return message.channel.send
          (connectPermError).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    if  (!message.guild.member(client.user).hasPermission('SPEAK')) return message.channel.send
          (speakPermError).then
            (message.delete()).then
              (msg => msg.delete(5000));

    function play(guild, song) {
        
    let serverQueue = queue.get(guild.id);
    if (!song) {
                serverQueue.voiceChannel.leave();
                queue.delete(guild.id);
                return
                };
          
	let dispatcher = serverQueue.connection.playStream(ytdl(song.url)).on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		  })
  
		.on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`🎶 Started Playing: **${song.title}**`);
}
    
  async function handleVideo(video, msg, voiceChannel, playlist = false) {
	    
    let serverQueue = queue.get(msg.guild.id);
	  let song = {
		            id: video.id,
		            title: video.title,
		            url: `https://www.youtube.com/watch?v=${video.id}`
              };
    
	if (!serverQueue) {
                      let queueConstruct = {
                        textChannel: msg.channel,
                        voiceChannel: voiceChannel,
                        connection: null,
                        songs: [],
                        volume: 5,
                        playing: true
		                  };
    
	queue.set(msg.guild.id, queueConstruct);
	queueConstruct.songs.push(song);
	
    try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	  } else {
		serverQueue.songs.push(song);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	  }
	  return undefined;
}
    
		if  (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			
        let playlist = await youtube.getPlaylist(url);
			  let videos = await playlist.getVideos();
      
		for  (const video of Object.values(videos)) {
				  let video2 = await youtube.getVideoByID(video.id); 
				  await handleVideo(video2, message, voiceChannel, true); 
			  } return message.channel.send
                 (`✅ Playlist: **${playlist.title}** has been added to the queue!`);      
		} else {
			      try {
				    var video = await youtube.getVideo(url);
			      } catch (error) {
				    try {
					  var videos = await youtube.searchVideos(args.join(" "), 10);
					  let index = 0;
					  message.channel.send
            ({ embed: {title:"Please provide a value to select one of the search results ranging from 1-10.",description:`_**Song selection:**_\n${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`, color: 0x41baea}});			
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send
              ({ embed: {description: 'No selection was made... cancelling selection', color: 0x41baea}})
					};
          
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				  } catch (err) {
					console.error(err);
					return message.channel.send
            ('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, message, voiceChannel);      
    } 
    };
exports.conf = {
aliases: ['play']
};
exports.help = {
name: 'play',
description: 'Play a certain song', 
usage: `${process.env.PREFIX}play [youtube music link]/[search term]`
};