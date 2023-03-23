const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'avatar',
    aliases: ['av'],
    cooldown: 5,
    async execute(message, args) {
       let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;
       let avatar = member.user.displayAvatarURL({ size: 1024, dynamic: true });

       const embed = new Discord.MessageEmbed()
        .setTitle(`${member.user.username}'s Avatar`)
        .setImage(avatar)
        .setColor("BLACK")
        .setAuthor(member.user.username);
        message.channel.send({embeds: [embed]});
    },
};