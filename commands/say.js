module.exports = {
    name: "say",
    description: "says something",

    
    async execute (message, args){  
        if (message.content.includes("@everyone") || (message.content.includes("@here")  ))return 
 
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return 

        let textChannel = message.mentions.channels.first() 
        if(!args[0]) return message.channel.send('Provide a channel for me to send the message in!'); 
        if(!args[1]) return message.channel.send('Provide a message to say!');
        if (!message.guild.channels.cache.has(textChannel.id)) return; 
        message.delete() 

            msg = args.slice(1).join(" "); 
            textChannel.send(msg) 

        }
    }