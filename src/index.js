require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot) return;

    var tickerRe = /[$]([A-Za-z]*)/g;
    var tickers = msg.content.match(tickerRe);

    if (tickers && tickers.length) {
        var description = "";
        for(t in tickers) {
            description += "[" + tickers[t] + "](https://finance.yahoo.com/quote/" + tickers[t].substring(1) + "/), ";
        }

        description = description.slice(0, -2);

        const embed = new MessageEmbed()
            .setDescription(description);

        msg.channel.send(embed);
    }
});

client.login(process.env.DISCORD_TOKEN);
