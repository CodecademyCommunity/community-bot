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
  async execute(interaction) {
    await interaction.reply({
      content: 'Please enter a code block.',
      fetchReply: true,
    });

    try {
      await formatCode(interaction);
    } catch (error) {
      interaction.followUp('You did not enter a code block!');
    }
  },
};

async function formatCode(interaction) {
  const language = interaction.options.getString('language', false) || '';
  const filter = (m) => interaction.user.id == m.author.id;

  const messages = await interaction.channel.awaitMessages({
    filter,
    time: 60000,
    max: 1,
    errors: ['time'],
  });

  const msg = messages.first();
  const code = msg.content;
  interaction.channel.messages.delete(msg.id);

  const formatted = codeBlock(language, code);
  interaction.editReply(formatted);
}
