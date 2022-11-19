const fs = require('fs');

let AsciiTable = require('ascii-table');
let table = new AsciiTable();
table.setHeading('Commands', 'Stats').setBorder('|', '=', '0', '0');

module.exports = (client) => {
    fs.readdirSync('./commands/').forEach(dir => {
        const files = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));
        if (!files || files.length <= 0) {
            console.log('Commands - 0');
        }
        files.forEach((file) => {
            let command = require(`../commands/${dir}/${file}`);
            if (command) {
                client.commands.set(command.name, command);
                if (command.aliases && Array.isArray(command.aliases)) {
                    command.aliases.forEach(alias => {
                        client.aliases.set(alias, command.name);
                    });
                }
                table.addRow(command.name, '✅');
            } else {
                table.addRow(file, '⛔');
            }
        });
    });
    console.log(table.toString());
};
