const Discord = require('discord.js');

const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MESSAGES"] 
});

const prefix = '-';

const fs = require('fs');


client.brain = require('./util/chatSend');
client.em = require("./util/embed")

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ruin is Online!');
    client.user.setActivity('over demonworld', { type: 'WATCHING' });
});

fs.readdir('./events/', (err, files) => { 
    if (err) return console.error(err); 
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`); 
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0]; 
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const once = eventFunction.once; 

        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args, client)); 
        } catch (error) {
            console.error(error.stack); 
        }
    });
});

client.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" "),
    cmd = messageArray[0].toLowerCase(),
    args = messageArray.slice(1),
    prefix = "-"; // Add Prefix

  if (!message.content.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(client, message, args);

});

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(R => R.endsWith('.js'));
    if (jsfile.length <= 0) {
      return console.log(chalk.red("There are no commands"));
    }
    jsfile.forEach((f, i) => {
      let pull = require(`./commands/${f}`);
      console.log(`Loaded - ${f} | ${pull.config.aliases}`)
  
      client.commands.set(pull.config.name, pull);
  if (pull.config.aliases) pull.config.aliases.forEach(alias => client.aliases.set(alias, pull.config.name))
    });
  });


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'owner'){
        message.channel.send('<@722416029342498878> is my lord');
    } else if (command == 'hi'){
        message.channel.send('Hi, I am ruin');
    } else if (command == 'meow'){
        client.commands.get('meow').execute(message, args);
    } else if (command == 'emo'){
        client.commands.get('emo').execute(message, args);
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args);
    } else if (command == 'say'){
        client.commands.get('say').execute(message, args);
    } else if (command == 'urban'){
        client.commands.get('urban').execute(message, args);
    } else if (command == 'eliminate'){
        if(message.member.roles.cache.has('977464945694363689')){
        client.commands.get('eliminate').execute(message, args);
    }} else if (command == 'banish'){
        if(message.member.roles.cache.has('977464945694363689')){
        client.commands.get('banish').execute(message, args);
    }} else if (command == '8ball'){
        client.commands.get('8ball').execute(message, args);
    }

    if(command === 'nicejob'){
        message.channel.send('happy to serve you my lord');
    } else if (command == 'info'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('I am Ruin from the Depths of Hell created by the Demon Lord')
        .setImage('https://cdn.discordapp.com/attachments/951425924501487616/983320194690740234/unknown_1.png')
        .setColor('#000000')
        message.channel.send({embeds: [embed]});
    } else if (command == 'killhim'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('Sorry my lord has told me to Execute you')
        .setImage('https://cdn.discordapp.com/attachments/951425924501487616/983318180032286731/unknown.png')
        .setColor('#000000')
        message.channel.send({embeds: [embed]});
    } else if (command == 'powerlevel'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('I use Black Magic my level is over 800M')
        .setImage('https://cdn.discordapp.com/attachments/951425924501487616/983321571735244870/unknown.png')
        .setColor('#000000')
        message.channel.send({embeds: [embed]});
    } else if (command == 'hello'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('Hello Human from the over lord!')
        .setImage('https://cdn.discordapp.com/attachments/951425924501487616/983323627200057394/unknown.png')
        .setColor('#000000')
        message.channel.send({embeds: [embed]});
    } else if (command == 'welcome'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('We welcome you to our server')
        .setImage('https://cdn.discordapp.com/attachments/983307303652577380/983327270489968710/unknown.png')
        .setColor('#000000')
        message.channel.send({embeds: [embed]});
    } else if (command == 'slap'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('*slaps*')
        .setImage('https://cdn.discordapp.com/attachments/951425924501487616/987044988577779762/unknown.png')
        .setColor('#000000')
        message.channel.send({embeds: [embed]});
    } 
        
    if(command === 'passwordisastaroth'){
        message.channel.send('Super Secret: "LMAO"');
    } else if (command == 'demon'){
        message.channel.send('recite the code my lord');
    } else if (command == 'help'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle("View all the commands here")
        .setDescription('make sure to use the prefix(-)') 
        .addFields(
          { name: 'admin', value: 'View all the admin in server' },
          { name: 'owner', value: 'View the owner name' },
          {name: 'emo', value: 'Emojify any text' },
          {name: 'avatar', value: 'Return a user(s) avatar picture!' },
          { name: 'anime', value: 'View link to best anime streaming service'},
          { name: 'manga', value: 'View website link for reading manga' },
          { name: 'swear', value: '`ruin`, `dumb`, `trash`, `stop`' },
          { name: 'helpdemon', value: 'View secret demon commands' },
          { name: 'info', value: 'Who is Ruin' },
        )
        message.channel.send({embeds: [embed]});
    } else if (command == 'helpdemon'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle("View all the Demon Commands here")
        .setDescription('make sure to use the prefix(-)') 
        .addFields(
          { name: 'welcome', value: 'Ruin will welcome' },
          { name: 'info', value: ' Ruin will reveal himself' },
          { name: 'hello', value: 'hello?'},
          { name: 'killhim', value: 'Ruin will execute him' },
          { name: 'powerlevel', value: 'Wanna know how strong ruin is?' },       
        )
        message.channel.send({embeds: [embed]});
    } else if (command == 'spells'){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle("List of Spells I can use")
        .setDescription('') 
        .addFields(
          { name: 'purge', value: 'Ruin will purge everything' }, 
          { name: 'eliminate', value: 'Ruin will eliminate the target (**kick**)' },  
          { name: 'banish', value: 'Ruin will banish the target (**ban**)' },    
        )
        message.channel.send({embeds: [embed]});
    } 


    
    if(command === 'purge'){
        if(message.member.roles.cache.has('977464945694363689')){
    {var amount = parseInt(args[0])

        if (!amount) return message.reply("Tell me the amount of power I am supposed to use")
        if (amount < 1 || amount > 100) return message.channel.send("That's too strong for me")

        message.channel.bulkDelete(amount + 1).catch(err => {
          message.channel.send("I can't purge it") })
      }}      
     }
    if(command === 'avatar'){        
    }
});
     
client.login(''); //#Your discord bot Token goes here