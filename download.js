const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      download(res.headers.location, dest);
      return;
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded', dest);
    });
  }).on('error', (err) => {
    console.error('Error downloading', dest, err.message);
  });
};

if (!fs.existsSync('public/icons')) fs.mkdirSync('public/icons', { recursive: true });

download('https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg', 'public/icons/maps.svg');
download('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', 'public/icons/whatsapp.svg');
download('https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg', 'public/icons/instagram.svg');
download('https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Apple_Notes_icon.svg/512px-Apple_Notes_icon.svg.png', 'public/icons/notes.png');
