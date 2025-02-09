const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ajuda",
  aliases: ["h"],
  description: "Mostra todos os comandos e suas descrições",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Ajuda LoSDJ")
      .setDescription("Lista de comandos")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
