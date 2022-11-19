const client = require('..');

client.on('guildMemberRemove', async member => {
    member.guild.channels.cache.get('1030484724700950631')
        .send(`${member.user.username} has left the server, We're sorry to heard that :/ `);
});