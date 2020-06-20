const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "moderation",
    description: "Display bot info.",

    run(msg, args) {
      const { channel } = msg

      const clear = "$clear"
      const kick = "$kick"
      const nazwa1 = "Komendy administracyjne"

      const embed = new  MessageEmbed()
      // Set the title of the field
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(nazwa1)
      .addField("usuwa wiadomości od 2 do 100", clear, true)
      .addField("wyrzuca użytkownika/bota", kick, true)
     
     
      channel.send(embed)
    },
}