module.exports = {
    name: 'eliminate',
    description: "This commands kicks a member!",
    execute(message ,args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been eliminated");
        }else{
            message.channel.send("Spell went wrong");
        }
    }
}
