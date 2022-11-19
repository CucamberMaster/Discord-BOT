const {Client, GatewayIntentBits, Collection} = require('discord.js');
const {token} = require('./config.json');
// const cmds = require('./commands/test');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

const fs = require('fs');
const config = require('./config.json');
require('dotenv').config();

client.commands = new Collection();
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;

module.exports = client;

fs.readdirSync('./handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.login(token);


