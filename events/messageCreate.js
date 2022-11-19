const client = require('..');

const prefix = client.prefix;

client.on('messageCreate', async message => {
    if (message.author.bot) {
        return;
    }
    if (message.channel.type !== 0) {
        return;
    }
    if (!message.content.startsWith(prefix)) {
        return;
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) {
        return;
    }
    let command = client.commands.get(cmd);
    if (!command) {
        command = client.commands.get(client.aliases.get(cmd));
    }
    command.run(client, message, args);
});
