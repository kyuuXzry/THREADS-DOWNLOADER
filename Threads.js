/*
 * © KyuuAI
 * WhatsApp : 62856726744
 * Instagram : Rissxzry_
 * Jangan hapus credit, hargai creator
 *
 * WAJIB UBAH SESUAI STRUKTUR BOT KALIAN MASING-MASING!
 * Kode ini menggunakan struktur standar Baileys (m, conn, text, command, usedPrefix).
 * Jika base bot kalian berbeda, sesuaikan parameter dan pemanggilan fungsinya.
 *
 * Plugin: Threads Downloader
 * API: threadsdl.app
 */

const axios = require('axios');

module.exports = async (m, { conn, text, command, usedPrefix }) => {
    if (!['threads', 'threadsdl', 'threadsdownloader'].includes(command)) return;

    if (!text || (!text.includes('threads.net') && !text.includes('threads.com'))) {
        return m.reply(
            `*THREADS DOWNLOADER*\n\n` +
            `Format: ${usedPrefix + command} [url]\n` +
            `Contoh: ${usedPrefix + command} https://www.threads.net/@user/post/xxxx`
        );
    }

    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    try {
        const apiUrl = 'https://www.threadsdl.app/api/threads';
        const payload = { url: text };

        const headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'Origin': 'https://www.threadsdl.app',
            'Referer': 'https://www.threadsdl.app/id/',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
        };

        const response = await axios.post(apiUrl, payload, { headers, timeout: 30000 });
        const data = response.data;

        if (!data || !data.username || !data.medias || data.medias.length === 0) {
            throw new Error('Gagal mengambil metadata atau media kosong.');
        }

        const username = data.username;
        const captionText = data.text || 'Postingan Threads';

        const caption = 
            `*THREADS DOWNLOADER*\n\n` +
            `Username: @${username}\n` +
            `Caption: ${captionText.substring(0, 100)}${captionText.length > 100 ? '...' : ''}\n` +
            `Status: Sukses`;

        for (let i = 0; i < data.medias.length; i++) {
            const media = data.medias[i];

            if (media.mediaType === 1) {
                const images = media.images || [];
                if (images.length > 0) {
                    const bestImage = images.sort((a, b) => (b.width * b.height) - (a.width * a.height))[0];
                    
                    await conn.sendMessage(m.chat, {
                        image: { url: bestImage.url },
                        caption: i === 0 ? caption : ''
                    }, { quoted: m });
                    
                    await new Promise(r => setTimeout(r, 1000));
                }
            } 
            else if (media.mediaType === 2) {
                const videos = media.videos || [];
                if (videos.length > 0) {
                    const bestVideo = videos.find(v => v.type === 101) || videos[0];
                    
                    await conn.sendMessage(m.chat, {
                        video: { url: bestVideo.url },
                        mimetype: 'video/mp4',
                        caption: i === 0 ? caption : ''
                    }, { quoted: m });

                    await new Promise(r => setTimeout(r, 1000));
                }
            }
        }

        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error('[THREADS ERROR]', error);
        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        
        let errorMsg = error.message || 'Terjadi kesalahan tidak terduga.';
        if (error.code === 'ECONNABORTED') {
            errorMsg = 'Koneksi timeout. Server terlalu lama merespons.';
        }
        
        m.reply(
            `*THREADS DOWNLOADER*\n\n` +
            `Status: Gagal\n` +
            `Alasan: ${errorMsg}`
        );
    }
};

module.exports.command = ['threads', 'threadsdl', 'threadsdownloader'];
module.exports.tags = ['downloader'];
module.exports.help = [
    'threads <url> - Download media dari Threads'
];