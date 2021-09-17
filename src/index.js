const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const commandsDir = `${__dirname}/commands`;
const eventsDir = `${__dirname}/events`;

client.commands = new Collection();

const commandFiles = fs
  .readdirSync(commandsDir)
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`${commandsDir}/${file}`);
  client.commands.set(command.data.name, command);
}

const eventFiles = fs
  .readdirSync(eventsDir)
  .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`${eventsDir}/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(process.env.BOT_TOKEN);
