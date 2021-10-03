# How to Contribute to Codecademy Community Bot

All input is welcomed! Below are some of the basic steps to contribute to this project. Please read all of it to make sure you stay consistent with everybody else.

Please review the _Issues_ tab and self-assign or ask to be assigned to one if you want to try to help in those. This keeps the efforts tidy and we know who is working on what.

## Initial Setup

If you don't have it already, install/setup Git on your machine.

### Clone This Repo

1. In the main page of the repo, notice the big green button that says "Code". Click it.
2. Using the HTTPS or SSH option, copy the URL.
3. If you are using HTTPS, using Git Bash/Terminal/Bash, navigate to the folder where you want this repo to be located in your machine and use:

```
$ git clone pasteURLYouJustCopied
```

4. If you are using SSH, follow this [GitHub tutorial](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

### Node.js and npm

1. Install Node.js; it can be downloaded from [here](https://nodejs.org/en/).
2. On the command line, navigate to the cloned repo.
3. Use the following command to install all necessary packages:

```
$ npm install
```

### Add Secret Keys

1. In the cloned repo, create a file named `.env`. This will store environment variables you may want to keep secret.
2. Create variables named `BOT_TOKEN`, `GUILD_ID`, and `CLIENT_ID` (you will assign these values later on).

### Create a Discord Application and Bot

1. Head to the **Applications** section of the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
2. Navigate to the **Bot** section and click "Add Bot". You can add an icon and name for your bot.
3. Copy the bot token and paste it into the `BOT_TOKEN` field in your `.env` file.
4. Navigate to the **OAuth2** section, copy the Client ID, and paste it into the `CLIENT_ID` field in your `.env` file.
5. Check the _bot_ and _applications.commands_ checkboxes under _Scopes_, and grant your bot the desired permissions under _Bot Permissions_.
6. Copy the URL under _Scopes_, paste it into your browser, and add your bot into your desired server.
7. You should now be able to see the bot in your server (it will appear Offline).
8. Right-click on the server name in the top-left corner, click Copy ID, and paste it into the `GUILD_ID` field in your `.env` file. If you do not see the option to Copy ID, head to your User Settings and turn on Developer Mode.

### Run the Bot

1. Navigate to your local repo and enter the following command into your terminal:
```
$ npm run deploy-commands
```

2. Next, start up the bot using the following command in your terminal:
```
$ npm start
```

2. Your bot should now appear Online in your server.

## Advanced Setup (optional)

For information about our pre-commit hook and setting up your local environment to use ESLint, Prettier and Git Blame, check out the [Advanced Setup page](https://github.com/CodecademyCommunity/codecademy-discord-bot/wiki/Advanced-Setup) of our moderation bot wiki.

## Repository Git Workflow

We use a typical Git branching workflow. If you are new to Git and GitHub, visit our [Git Workflow wiki page](https://github.com/CodecademyCommunity/codecademy-discord-bot/wiki/Git-Workflow) on our moderation bot repo for a quick-start guide!

## Report Issues

Please use Github's Issues. Report a bug or request a feature there. Please do:

- Use an appropriate label for the issue. If you think the current labels don't apply, create a new one
- Don't forget to add your issue to the project Kanban board
- If it is a bug: describe the bug and how to reproduce it
- If it is a feature request: explain the idea, how you think it could be done and what need it is addressing
