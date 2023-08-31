const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { Countdown } = require('./classes/countdown.js');
const { EmbedClass } = require('./classes/embed.js');

const prefix = '!';

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const temp = new Countdown();
const embed = new EmbedClass();

client.once('ready', () => {
    console.log('*doom music*');
    client.user.setActivity('Bringer of Anxiety');

    interval();
});

function interval() {
    const channel = client.channels.cache.get('1146383458667610173');
    const array = temp.counter();
    
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(7, 0, 0, 0);

    if (now >= target) {
        target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target - now;

    setTimeout(() => {
        channel.send({ embeds: [embed.emBuild(array)] });
        interval();
    }, diff);


}



client.login(token);