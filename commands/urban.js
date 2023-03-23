const { request } = require('undici')

module.exports = {
    name: 'urban',
    aliases: ['ub'],
    description: 'Searches on the Urban dictionary',
    async execute(message, args) {
        if (!args.length) return message.channel.send('You forgot to define your search term'); // Handles empty search queries

        try {
            let res = await request(`https://api.urbandictionary.com/v0/define?term=${args.join(' ')}`).then(r => r.body.json().then(s => s.list)); // Searches on the urban dictionary API

            if (!res || !res.length) return message.channel.send('There were no results for your search term'); // Handles 0 results
            res = res[0]

            let img = 'https://lh3.googleusercontent.com/unQjigibyJQvru9rcCOX7UCqyByuf5-h_tLpA-9fYH93uqrRAnZ0J2IummiejMMhi5Ch'

            // Replacing [subwords] in definition
            let defmatch = res.definition.match(/\[.*?\]/gm)
            if (defmatch?.length) defmatch.forEach(v => {
                let subword = v.match(/(?<=\[)[^)]*(?=\])/gm)[0]
                res.definition = res.definition.replace(v, `[${subword}](https://www.urbandictionary.com/define.php?term=${subword.replace(/ /gm, '%20')})`)
            })
            
            // Replacing [subwords] in example
            let exmatch = res.example.match(/\[.*?\]/gm)
            if (exmatch?.length) exmatch.forEach(v => {
                let subword = v.match(/(?<=\[)[^)]*(?=\])/gm)[0]
                res.example = res.example.replace(v, `[${subword}](https://www.urbandictionary.com/define.php?term=${subword.replace(/ /gm, '%20')})`)
            })

            // Sending the message
            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor(`Urban Dictionary`, img)
                        .setTitle(res.word)
                        .setURL(res.permalink)
                        .setThumbnail(img)
                        .setColor("#134FE6")
                        .addFields(
                            { name: '📖 Definition', value: !res.definition ? 'No Definition' : (res.definition.length > 1022 ? res.definition.substring(0, 1023) : res.definition) },
                            { name: '💬 Examples', value: !res.example ? 'No Definition' : (res.example.length > 1022 ? res.example.substring(0, 1023) : res.example) },
                            { name: '👍 Upvotes', value: res.thumbs_up.toLocaleString() || 'N/A', inline: true },
                            { name: '👎 Downvotes', value: res.thumbs_down.toLocaleString() || 'N/A', inline: true }
                        )
                        .setTimestamp(new Date(res.written_on).getTime())
                        .setFooter(`Written by ${res.author || "unknown"}`)
                ]
            })
        } catch (err) {
            // Handles Errors
            message.channel.send('An error occured');
            console.error(err);
        }
    }
}