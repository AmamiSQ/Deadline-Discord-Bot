const { EmbedBuilder } = require('discord.js');

class EmbedClass
{
    constructor() {
        this.exampleEmbed;
    }

    fieldBuild(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.exampleEmbed
                .addFields( 
                    { name: '\u200B', value: '\u200B' },
                    { name: arr[i]['name'], value: arr[i]['date'], inline: false }
                    )

        }
    }

    emBuild(arr) {
        this.exampleEmbed = new EmbedBuilder()
            .setTitle('Upcoming deadlines')
            .setDescription('These are the upcoming deadlines required to be met.')
            .setColor(0x008B8B)
            .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e33f9ee0-7f23-4515-a1db-8fcf023ac40c/dd8p5u0-b487d4c5-d9f4-43c6-9c3d-41c28824948e.png/v1/fill/w_945,h_709,q_80,strp/rimuru_tempest_in_slime_form_by_seryko_dd8p5u0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA5IiwicGF0aCI6IlwvZlwvZTMzZjllZTAtN2YyMy00NTE1LWExZGItOGZjZjAyM2FjNDBjXC9kZDhwNXUwLWI0ODdkNGM1LWQ5ZjQtNDNjNi05YzNkLTQxYzI4ODI0OTQ4ZS5wbmciLCJ3aWR0aCI6Ijw9OTQ1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.NNkIL617xN10BX4FNml6A5cSio7LQgaRy-gE8XKKJ3U')
        
        this.fieldBuild(arr);

        return this.exampleEmbed;
    }
}

module.exports = { EmbedClass };