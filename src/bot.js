require('dotenv').config();

//console logging stuffs kek
console.clear();
console.log('Message logger is now running under key:');
console.log(process.env.BOT_KEY);
console.log();
console.log(process.env.STARTMESSAGE);
console.log('Version 1.1 - Go to GitHub to find the latest releases.')


//Client Class?
const { Client, MessageEmbed } = require('discord.js')
const client = new Client();


//Methods
client.login(process.env.BOT_KEY)

client.on('voiceStateUpdate', (oldState, newState) => {
    // check for bot
    if (oldState.member.user.bot) return;

    console.log(`A member has joined/left VC!`)
})

//Ready
client.on('ready', () => {
    console.log( );
    console.log(`[${process.env.DEV_NAME}'s message logger] ${client.user.tag} is logged in!`);
    console.log();
    console.log('The bot will begin logging all messages.');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
})

client.on('message', (message) => {
    console.log(`[MESSAGE LOGS] ${message.author.username} in ${message.channel.guild} (#${message.channel.name}): ${message.content}`);
    
    //HELP COMMAND
    if (message.content === '-help') {
        const embed = new MessageEmbed()
                .setTitle("Welcome to Elite's Message Logger!")
                .setAuthor("Sydney", "https://usdevs.net/SydHalloween2.gif","https://sydneym.dev")
                .setColor(0xff0000)
                .setDescription(`This is a super simple message logger for those of you who want to experiment with Discord.js's vast library. This little snippet of code has some of the more basic things like console logging and message sending down. Built in ban and kick functionality.  `)
                .setFooter('Sydneys Message Logger V1, "https://i.imgur.com/w1vhFSR.png"')
                .setThumbnail("https://images.discordapp.net/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=128")
                .setTimestamp();

        message.channel.send(embed);

    //TODO COMMAND
        if (message.content === '-todo') {
            const dembed = new MessageEmbed()
                .setTitle("Planned features")
                .setAuthor("Sydney", "https://usdevs.net/SydHalloween2.gif","https://sydneym.dev")
                .setColor(0x00AE86)
                .setDescription("I have many features being planned right now. This includes stuff from built in banning/kicking, being able to see what member joined/left a certain voice chat, and all of that fun stuff. Check out ")
                .setFooter("Sydney's Message Logger V1, http://i.imgur.com/w1vhFSR.png")
                .setImage("http://i.imgur.com/yVpymuV.png")
                .setThumbnail("https://images.discordapp.net/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=128")
                .setTimestamp();
    
            message.channel.send(dembed);

}}});
