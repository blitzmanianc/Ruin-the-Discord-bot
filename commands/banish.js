module.exports = {
    name: 'banish',
    description: "This commands bans a member!",
    execute(message ,args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been Banished");
        }else{
            message.channel.send("Spell went wrong");
        }
    }
}