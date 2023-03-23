# Ruin-the-Discord-bot
Ruin is an example to create a discord bot using discord.js
The bot is initialized with the client object and a prefix of "-". 
The bot uses the 'fs' library to read files from directories containing events and commands, which are loaded into the client object using Discord.js Collection.

The bot's main function is to respond to commands sent by users in a Discord server, where it listens for a message event and checks if the message starts with the prefix. If it does, the bot extracts the command and arguments from the message content and runs the appropriate command using Discord.js's Collection.

The bot has several predefined commands such as 'emo', 'avatar', 'say', 'urban', 'eliminate', 'banish', and '8ball'. Additionally, there are some hard-coded responses to specific keywords like 'anime', 'manga', 'lord', 'genshingift', 'youtube', 'crackgames'.

(The bot is created solely to serve as an example for other developers when creating a Discord bot, as it contains code for various commands.)
