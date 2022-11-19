module.exports = {
    name: 'help',
    description: 'Pomoga Ludziom',
    cooldown: 2000,
    run: async(client, message) => {
        const string = message.author.toString();
        message.reply(`Pomoc ci w czymś ${string}`);

    }
};
