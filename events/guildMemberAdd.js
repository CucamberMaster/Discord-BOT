const client = require('..');
const {EmbedBuilder} = require('discord.js');

client.on('guildMemberAdd', async member => {
    // member.guild.channels.cache.get('1030484724700950631').send(`${member.user} has joined the server `);

    const newMemberEmbed = new EmbedBuilder()
        .setColor(0x7289DA)
        .setTitle('New  Member')
        .setDescription(` User ${member.user} has join the server`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp();
    member.guild.channels.cache.get('1030484724700950631').send(
        {
            embeds: [newMemberEmbed]
        }
    );
});