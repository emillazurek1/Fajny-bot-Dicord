const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "help",
  description: "Display bot info.",

  run(msg, args) {
    const { channel } = msg

    const invite = "$invite"
    const help = "$help"
    const ping = "$ping"
    const info = "$info"
    const nazwa = "komendy"
    const Administracja = "$help moderation"

    const embed = new  MessageEmbed()
      // Set the title of the field
      .setTitle(nazwa)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(nazwa)
      .addField("$info", info, true)
      .addField("$ping", ping, true)
      .addField("$invite", invite, true)
      .addField("$help", help, true)
      .addField("$help moderation", Administracja, true)

    channel.send(embed)
  },
}
