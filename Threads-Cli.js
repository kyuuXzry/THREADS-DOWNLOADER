/*
 * © KyuuAI
 * WhatsApp : 62856726744
 * Instagram : Rissxzry_
 * Jangan hapus credit, hargai creator
 *
 * WAJIB UBAH SESUAI STRUKTUR BOT KALIAN MASING-MASING!
 * Kode ini masih berbentuk CLI (Command Line Interface), BUKAN plugin bot.
 * Jika ingin dipasang di bot WhatsApp, sesuaikan logika pengiriman pesan,
 * pemanggilan fungsi, dan handling limit dengan base bot kalian.
 */

const axios = require('axios');
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const c = {
    reset: '\x1b[0m',
    gray: '\x1b[90m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    white: '\x1b[37m',
    bold: '\x1b[1m'
};

const line = (char = '-', length = 60) => char.repeat(length);
const log = (tag, color, message) => {
    const time = new Date().toLocaleTimeString('en-GB');
    console.log(`${c.gray}[${time}] ${color}[${tag}] ${c.white}${message}${c.reset}`);
};

async function downloadMedia(url, filePath) {
    const writer = fs.createWriteStream(filePath);
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
        }
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

async function testThreads(url) {
    console.log(`${c.cyan}${c.bold}\n${line('=')}`);
    console.log(`  THREADS DOWNLOADER - UNDUH & BUKA OTOMATIS`);
    console.log(`${line('=')}${c.reset}\n`);

    log('INFO', c.blue, `Target URL: ${url}`);
    log('PROSES', c.yellow, 'Menghubungi API ThreadsDL...');

    try {
        const apiUrl = 'https://www.threadsdl.app/api/threads';
        const payload = { url: url };

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

        if (!data || !data.username) {
            log('GAGAL', c.red, 'Response API tidak valid atau data kosong.');
            return;
        }

        console.log(`${c.green}${c.bold}${line('-')}`);
        console.log(`  METADATA POSTINGAN`);
        console.log(`${c.green}${line('-')}`);
        console.log(`${c.white}  Username : ${c.cyan}${c.bold}@${data.username}`);
        console.log(`${c.white}  Caption  : ${c.gray}"${(data.text || 'Tidak ada caption').replace(/\n/g, ' ')}"${c.reset}`);
        console.log(`${c.green}${line('-')}\n`);

        const medias = data.medias || [];
        
        if (medias.length === 0) {
            log('GAGAL', c.red, 'Tidak ada media (foto/video) di dalam post ini.');
            return;
        }

        const downloadDir = '/storage/emulated/0/jsom';
        if (!fs.existsSync(downloadDir)) {
            log('PERINGATAN', c.yellow, `Folder ${downloadDir} tidak ditemukan, membuat folder baru...`);
            try {
                fs.mkdirSync(downloadDir, { recursive: true });
            } catch (err) {
                log('FATAL', c.red, 'Gagal membuat folder. Pastikan izin storage Termux sudah aktif (termux-setup-storage).');
                return;
            }
        }

        log('PROSES', c.yellow, `Memproses & Mengunduh ${medias.length} media ke ${downloadDir}...\n`);

        for (let i = 0; i < medias.length; i++) {
            const media = medias[i];
            const timestamp = Date.now();
            const safeUsername = data.username.replace(/[^a-zA-Z0-9]/g, '_');
            
            console.log(`${c.blue}${c.bold}[ Media ${i + 1} ]${c.reset}`);

            if (media.mediaType === 1) {
                const images = media.images || [];
                if (images.length > 0) {
                    const bestImage = images.sort((a, b) => (b.width * b.height) - (a.width * a.height))[0];
                    const fileName = `threads_${safeUsername}_${timestamp}_${i+1}.jpg`;
                    const filePath = path.join(downloadDir, fileName);

                    console.log(`  ${c.white}Tipe     : ${c.green}Foto (Gambar)`);
                    console.log(`  ${c.white}Resolusi : ${c.green}${bestImage.width}x${bestImage.height}`);
                    log('UNDUH', c.yellow, `Mengunduh foto...`);
                    
                    await downloadMedia(bestImage.url, filePath);
                    log('SELESAI', c.green, `Tersimpan: ${fileName}`);
                    
                    exec(`termux-open "${filePath}"`, (err) => {
                        if (err) {
                            log('PERINGATAN', c.yellow, `Gagal membuka file otomatis (Pastikan termux-api terinstall).`);
                        }
                    });
                    console.log('');
                }
            } 
            else if (media.mediaType === 2) {
                const videos = media.videos || [];
                if (videos.length > 0) {
                    const bestVideo = videos.find(v => v.type === 101) || videos[0];
                    const qualityLabel = bestVideo.type === 101 ? 'Asli / HD' : 'Standar / SD';
                    const fileName = `threads_${safeUsername}_${timestamp}_${i+1}.mp4`;
                    const filePath = path.join(downloadDir, fileName);

                    console.log(`  ${c.white}Tipe     : ${c.green}Video (MP4)`);
                    console.log(`  ${c.white}Kualitas : ${c.green}${qualityLabel}`);
                    log('UNDUH', c.yellow, `Mengunduh video...`);

                    await downloadMedia(bestVideo.url, filePath);
                    log('SELESAI', c.green, `Tersimpan: ${fileName}`);
                    
                    exec(`termux-open "${filePath}"`, (err) => {
                        if (err) {
                            log('PERINGATAN', c.yellow, `Gagal membuka file otomatis (Pastikan termux-api terinstall).`);
                        }
                    });
                    console.log('');
                }
            }
        }

        console.log(`${c.green}${c.bold}${line('-')}`);
        console.log(`  SEMUA PROSES SELESAI`);
        console.log(`  Lokasi File: ${downloadDir}`);
        console.log(`${c.green}${c.bold}${line('-')}\n`);

    } catch (error) {
        log('FATAL', c.red, 'Terjadi kesalahan sistem:');
        console.log(`${c.red}${line('-')}`);
        console.log(`${c.red}  Pesan: ${error.message}`);
        console.log(`${c.red}${line('-')}\n`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`${c.cyan}${c.bold}Masukkan Link Threads (contoh: https://www.threads.net/@user/post/xxxx):${c.reset}`);
rl.question(`${c.yellow}> ${c.reset}`, async (link) => {
    if (!link || (!link.includes('threads.net') && !link.includes('threads.com'))) {
        console.log(`${c.red}${c.bold}Error: Link tidak valid! Harus link Threads.${c.reset}`);
        rl.close();
        return;
    }

    await testThreads(link.trim());
    rl.close();
});