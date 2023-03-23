module.exports = {
    name: 'meow',
    description: "meow mewo command!",
    execute(message,args){
        message.channel.send('meowww!');
    }
}