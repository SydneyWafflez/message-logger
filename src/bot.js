require('dotenv').config();

//console logging stuffs kek
console.clear();
console.log('Message logger is now running under key:');
console.log(process.env.BOT_KEY);
console.log();
console.log(process.env.STARTMESSAGE);
console.log('Version 1 - Go to GitHub to find the latest releases.')

//Client Class?
const { Client, MessageEmbed } = require('discord.js')
const client = new Client();
const WH_ID = 


//Methods
client.login(process.env.BOT_KEY)

client.on('voiceStateUpdate', (oldState, newState) => {
    // check for bot
    if (oldState.member.user.bot) return;

    console.log(`A member has joined/left VC!`)
})

//Ready
client.on('ready', () => {

    client.user.setPresence({ activity: { name: `with Sydney :3` }, status: 'idle' });

    console.clear
    console.log( );
    console.log(`[${process.env.DEV_NAME}'s message logger] ${client.user.tag} is logged in!`);
    console.log();
    console.log('\x1b[41m%s\x1b[0m', 'The bot will begin logging all messages! ');
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
})

client.on('message', (message) => {
    console.log(`[MESSAGE LOGS] ${message.author.username} in ${message.channel.guild} (#${message.channel.name}): ${message.content}`);
    
    //HELP COMMAND
    if (message.content === '-welcome') {
        const embed = new MessageEmbed()
                .setTitle("Welcome to Elite's Message Logger!")
                .setAuthor("Sydney", "https://usdevs.net/SydHalloween2.gif","https://sydneym.dev")
                .setColor(0xff0000)
                .setDescription(`This is a super simple message logger for those of you who want to experiment with Discord.js's vast library. This little snippet of code has some of the more basic things like console logging and message sending down. Built in ban and kick functionality.  `)
                .setFooter('Sydneys Message Logger V1, "https://i.imgur.com/w1vhFSR.png"')
                .setThumbnail("https://images.discordapp.net/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=128")
                .setTimestamp();
        message.channel.send(embed)
    } 
      else if (message.content === `-me`) {
            console.log(`'\x1b[31m%s\x1b[0m', '[Command Notification] ${message.author.username} used the -me command!'`)
            message.channel.send(`Here is all of the info I can find on you`)
            message.channel.send(`USERNAME: ${message.author.username}`)
            message.channel.send(`ID: ${message.author.id}`);
            message.channel.send(`Created: ${message.author.createdAt}`);
            message.channel.send(`Activity: ${message.author.presence}`);
            message.channel.send(`Avatar: ${message.author.avatar}`);
        }

    //TODO COMMAND
        else if (message.content === '-todo') {
            const dembed = new MessageEmbed()
                .setTitle("Planned features")
                .setAuthor("Sydney", "https://usdevs.net/SydHalloween2.gif","https://sydneym.dev")
                .setColor(0x00AE86)
                .setDescription("I have many features being planned right now. This includes stuff from built in banning/kicking, being able to see what member joined/left a certain voice chat, and all of that fun stuff. Check out ")
                .setFooter("Sydney's Message Logger V1, http://i.imgur.com/w1vhFSR.png")
                .setImage("http://i.imgur.com/yVpymuV.png")
                .setThumbnail("https://images.discordapp.net/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=128")
                .setTimestamp();
            message.channel.send(dembed)
        }
    
        else if (message.content.startsWith('-kick')) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member
                  .kick('Optional reason that will display in the audit logs')
                  .then(() => {
                    message.reply(`Successfully kicked ${user.tag}`);
                  })
                  .catch(err => {
                    message.reply('I was unable to kick the member');
                    // Log the error
                    console.error(err);
                  });
              } else {
                message.reply("That user isn't in this guild!");
              }
            } else {
              message.reply("You didn't mention the user to kick!");
            }
          }

        else if (message.content.startsWith('-ban')) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member
                  .ban({
                    reason: 'They were bad!',
                  })
                  .then(() => {
                    message.reply(`Successfully banned ${user.tag}`);
                  })
                  .catch(err => {
                    message.reply('I was unable to ban the member');
                    console.error(err);
                  });
              } else {
                message.reply("That user isn't in this guild!");
              }
            } else {
              message.reply("You didn't mention the user to ban!");
            }
          }

        else if (message.content === '-help') {

            const aembed = new MessageEmbed()
                .setTitle("Help Menu")
                .setAuthor("Sydney", "https://usdevs.net/SydHalloween2.gif","https://sydneym.dev")
                .setColor(0x00AE86)
                .setDescription("Need some help? We have you covered. While Syd's bot logger is simple by design, there are a few commands you should know, like -kick and -ban, our build in moderation tools. We also have a Q&A section (-qa)!")
                .setFooter("Sydney's Message Logger V1, http://i.imgur.com/w1vhFSR.png")
                .setThumbnail("https://images.discordapp.net/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=128")
                .setTimestamp();
            message.channel.send(aembed)

        }

        else if (message.content === '-qa') {
            message.channel.send("Q&A TIME!")
            message.channel.send(" ")
            message.channel.send('***Q***: Is this logger against TOS?')
            message.channel.send('A: No! Syds Message log is not against TOS, as it does not save ANY messages onto the host computer or VPS. All message logs are cleared after a restart.')
        }

        else if (message.content === '-?') {
            const hook = new client.WebhookClient(`${process.env.WH_ID}`, `$(process.env.WH_TOKEN)`);

            hook.send('wut?');

        }
    });
