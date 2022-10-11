let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [085172446692]
│ •  [082131369002]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
