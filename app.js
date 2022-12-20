const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');


//menyimpan data otentikasi ke file
const client = new Client({
    authStrategy: new LocalAuth(),
});

client.initialize();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});
const webpBase64Data = '';
//Membalas Pesan dengan gambar dari url
client.on('message', async (message) => {
    if (message.body === 'hello') {
        const media = await MessageMedia.fromUrl('https://i.ibb.co/3WHQGvS/c.png');
        client.sendMessage(message.from, media, { sendMediaAsSticker: true });

    } else if (message.body === 'hai') {
        message.reply('Hiiiii');
    } else {
        const months = ["ga ngerti, lu ngomong apaan dah", "Gajelas lu bang", "ga ngerti aku mah", "haaa..apa..", "hmmmmmmmm", "yang bener kalau ngetik", "hah?"];
        const random = Math.floor(Math.random() * months.length);
        message.reply(months[random]);
    }
});