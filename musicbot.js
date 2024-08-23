const Discord = require('discord.js');
const client = new Discord.Client();

const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

client.on('ready', () => {
    console.log('Music bot is ready!');
});



//music codes
client.on('message', message => {

    if(message.author.bot)
    return;

    if(message.content.toLowerCase().startsWith("?paly"))
    {
        let VoiceChannel = message.guild.channels.find(channel => channel.id === `${process.env.channelID}`);
        if(VoiceChannel !=null)
        {
            console.log(VoiceChannel.name + "was found and is a" + VoiceChannel.type + "channel.");
            VoiceChannel.join()
            .then(connection => {
                console.log("Bot joined the channel.");
                const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter : 'audioonly'});
                const dispatcher = connection.playStream(stream, streamOptions);
            })
            .catch();
        }
    }  
});




//last line
client.login(process.env.token);