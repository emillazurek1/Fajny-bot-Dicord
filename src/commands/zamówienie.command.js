const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "zamowienie",
    description: "zamowienie",
    args: true,
    guildOnly: true,
    usage: "<action>[add]",
  
    async run(msg, args) {
      const { channel, guild, client } = msg

      const channelName = `♥️${this.name}`
  
      const createdChannel = await guild.channels.create(channelName, {
        type: "text",
      })
  
      if (createdChannel) {
        const channelId = createdChannel.id 
  
        const { settings } = client
        // Save channel id to config
        if (!settings.get(guild.id)) {
          settings.set(guild.id, { channel: [] })
          const nazwa3 = "wpisz tutaj swój pakiet z kanału #cennik "

      const embed = new  MessageEmbed()
      // Set the title of the field
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(nazwa3)
      .addField("wpisz tutaj swój pakiet z kanału #cennik", nazwa3, true)

        channel.new.send()
        }
      }
    },
  }
