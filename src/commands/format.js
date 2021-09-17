const { SlashCommandBuilder } = require('@discordjs/builders');
const { codeBlock } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('format')
    .setDescription('Format a code block')
    .addStringOption((option) =>
      option
        .setName('language')
        .setDescription('Programming language')
        .setRequired(false)
    ),
  execute(interaction) {
    let language = interaction.options.getString('language', false);
    language = language || '';

    interaction.reply('Please enter a code block.').then(() => {
      const filter = (m) => interaction.user.id == m.author.id;

      interaction.channel
        .awaitMessages({
          filter,
          time: 60000,
          max: 1,
          errors: ['time'],
        })
        .then((messages) => {
          const msg = messages.first();
          const code = msg.content;
          interaction.channel.messages.delete(msg.id);
          const formatted = codeBlock(language, code);
          console.log(formatted);
          interaction.followUp(formatted);
        })
        .catch(() => {
          interaction.followUp('You did not enter a code block!');
        });
    });
  },
};
