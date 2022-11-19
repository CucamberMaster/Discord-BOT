const client = require('..');

client.on('guildMemberRemove', async member => {
    member.guild.channels.cache.get('yourchannelid')
        .send(`${member.user.username} has left the server, We're sorry to heard that :/ `);
});