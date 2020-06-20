const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "info",
  description: "Display bot info.",

  run(msg, args) {
    const { channel } = msg

    const botAuthor = "Emillaurek1"
    const botVersion = "v1.1"
    const botName = "Fajny Bot Discord"
    const prefix = "$"
    const botDescription =
      "Bot który ma komendy administracyjne ."
const informacje = "info"
    const embed = new  MessageEmbed()
      // Set the title of the field
      .setTitle(informacje)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(botDescription)
      .addField("Autor", botAuthor, true)
      .addField("Wersja", botVersion, true)
      .addField("prefix", prefix, true)
      .addField("nazwa", botName, true)

    channel.send(embed)
  },
}
