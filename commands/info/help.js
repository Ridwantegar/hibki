const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help",
   aliases: ["hlp","h"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Page Home\n"+ client.user.username + " | Made by CoderFredi", client.user.displayAvatarURL())
        .setImage(`https://share.creavite.co/w0XL1SW5AMU6824e.gif`)
        .setTitle(` :muscle: **__My Features__**
     :notes: An advanced **Music System** with **Audio Filtering**
:video_game: A unique Music Request System and way much more! Prefix: u!`)
        .setDescription(`
  > ☆ MUSIC 
  > ☆ MODERATOR 
  > ☆ MEME 
  > ☆ FUN 
  > ☆ WHY
  > ☆ GAME`)
        .setColor(colors.Crazy);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('Admin & Info Commands')
        .addField("ㅤ⠀⠀⠀ \n ⚙️ **Admin** | 🔴 **Enabled**",
          "`addrole` `announce` `ban` `embed` `hackban` `lockdown` `kick` `lock` `nuke` `removerole` `unban` `unlock` `membercount` `moveaall` `nuke` `poll` `purge` `react` `setnick` `slowmode` `snipe` `steal-emoji` `unban` `mute` `unmute` `voicekick` `warn` `autorole` `role-all`\n\nℹ️ **Info** | 🔴 **Enabled** \n `anime` `avatar` `badges` `botinfo` `country` `invite` `web` `steam` `sourcebin` `whois` `shorturl` `savatar` `pokemon` `ping` `menu` `credits`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Crazy);

        const embed2 = new Discord.MessageEmbed()
      .setTitle('Music & Image Commands')
      .addField("⠀⠀⠀ \n🎶 **Music** | 🔴 **Enabled**",
        "`join` `leave` `play` `loop` `lyrics` `pause` `nowplaying` `playlist` `queue` `remove` `resume` `search` `shuffle` `skip` `skipto` `stop` `volume`\n\n🔥 **Image** | 🔴 **Enabled** \n `grave` `heaven` `triggered` `wasted` `aplica` `bird` `camel` `cat` `dog` `duck` `feed` `fox` `holo` `panda` `slap` `tweet` `gae`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Crazy);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('Rank , Suggest And Fun Commands')
      .addField("ㅤ⠀⠀⠀ \n🤖 **Rank** | 🔴 **Enabled**","`rank` `leaderboard`\n\n ✨ **Suggest** | 🔴 **Enabled** \n`set-channel` `suggest` \n\n 😁 **Fun** | 🔴 **Enabled** \n`8ball` `advice` `fact` `hack` `joke` `tictactoe` `topic` `why`",)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.Crazy);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin & Info Commands')
        .setEmoji('892090597433823323')  
        .setValue('option1')
        .setDescription('List Admin And Info Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Music & Image Commands')
        .setEmoji('891240754993844244')
        .setValue('option2')
        .setDescription('List Music And Image Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Rank , Suggest & Fun Commands')
        .setEmoji('892889434163408919')
        .setValue('option3')
        .setDescription('List Rank , Suggest & Fun Commands')

        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("❌  This help menu is expired! Please retype the command to view again.")
    })

    }
  };