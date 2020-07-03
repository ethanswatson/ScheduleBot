require('dotenv').config();

import { Client } from 'discord.js';

const client = new Client();

client.on('ready', () => {
  console.log(`I am ready!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    console.log(`Recieved ping message from ${message.author.username}`);
    message.channel.send('pong');
  }
});

const discordToken = process.env.DISCORD_TOKEN;

client
  .login(discordToken)
  .then(res => {
    console.log('Login successful');
  })
  .catch(err => {
    console.error(`Login error: ${err}`);
  });
