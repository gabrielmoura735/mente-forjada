const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

const desktopGenCode = `// ==========================================================================
// 19.5 GERADOR DE PAPEL DE PAREDE PARA COMPUTADOR (16:9 - 1920x1080)
// ==========================================================================
window.generateDesktopWallpaper = function(principle, theme = 'gold') {
    const canvas = document.getElementById('canvas-card-export');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1920;
    canvas.height = 1080;

    let bgGrad, borderCol, goldCol, textCol, quoteCol, tagCol;
    if (theme === 'crimson') {
        bgGrad = ctx.createLinearGradient(0, 0, 1920, 1080);
        bgGrad.addColorStop(0, '#190608');
        bgGrad.addColorStop(0.5, '#07090c');
        bgGrad.addColorStop(1, '#110304');
        borderCol = '#e63946';
        goldCol = '#ff6b6b';
        textCol = '#f8fafc';
        quoteCol = '#ffffff';
        tagCol = '#fda4af';
    } else if (theme === 'dark') {
        bgGrad = ctx.createLinearGradient(0, 0, 1920, 1080);
        bgGrad.addColorStop(0, '#0f1318');
        bgGrad.addColorStop(0.5, '#07090c');
        bgGrad.addColorStop(1, '#0b0e12');
        borderCol = '#94a3b8';
        goldCol = '#cbd5e1';
        textCol = '#f1f5f9';
        quoteCol = '#ffffff';
        tagCol = '#94a3b8';
    } else {
        bgGrad = ctx.createLinearGradient(0, 0, 1920, 1080);
        bgGrad.addColorStop(0, '#11151c');
        bgGrad.addColorStop(0.5, '#07090c');
        bgGrad.addColorStop(1, '#181409');
        borderCol = '#f5b73d';
        goldCol = '#f5b73d';
        textCol = '#f8fafc';
        quoteCol = '#ffffff';
        tagCol = '#fcd34d';
    }

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1920, 1080);

    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 40;
    ctx.shadowOffsetY = 20;

    const boxW = 1200;
    const boxH = 600;
    const boxX = (1920 - boxW) / 2;
    const boxY = (1080 - boxH) / 2;

    ctx.fillStyle = 'rgba(15, 19, 24, 0.6)';
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 20);
    ctx.fill();

    ctx.strokeStyle = borderCol;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'transparent';

    ctx.fillStyle = borderCol;
    ctx.font = 'bold 36px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText('Mente Forjada', 1920 / 2, boxY + 80);

    ctx.fillStyle = textCol;
    ctx.font = 'bold 42px "Cinzel", serif';
    const textLines = wrapTextDesktop(ctx, principle.title.toUpperCase(), boxW - 100);
    let titleY = boxY + 180;
    textLines.forEach(l => {
        ctx.fillText(l, 1920 / 2, titleY);
        titleY += 50;
    });

    ctx.fillStyle = quoteCol;
    ctx.font = 'italic 34px "Plus Jakarta Sans", sans-serif';
    const quoteLines = wrapTextDesktop(ctx, '"' + principle.quote + '"', boxW - 160);
    let qY = titleY + 40;
    quoteLines.forEach(l => {
        ctx.fillText(l, 1920 / 2, qY);
        qY += 45;
    });

    if (principle.author) {
        ctx.fillStyle = goldCol;
        ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('- ' + principle.author, 1920 / 2, qY + 40);
    }

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = \`MenteForjada_Desktop_16x9_\${principle.id}.png\`;
    link.href = dataUrl;
    link.click();
};

function wrapTextDesktop(context, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = context.measureText(currentLine + ' ' + word).width;
        if (width < maxWidth) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}
`;

app = app.replace(/window\.downloadLockscreenWallpaperForPrinciple = function/, desktopGenCode + '\nwindow.downloadLockscreenWallpaperForPrinciple = function');

const targetInitFunc = /function initLockscreenNotifications\(\) \{[\s\S]*?\}\s*$/m;

const newInitFunc = `function initLockscreenNotifications() {
    const btnEnable = document.getElementById('btn-enable-lockscreen-notify');
    const btnTest = document.getElementById('btn-test-lockscreen-notify');
    const btnGenWallMobile = document.getElementById('btn-generate-lockscreen-wallpaper');
    const btnGenWallDesktop = document.getElementById('btn-generate-desktop-wallpaper');
    const selectPhrase = document.getElementById('wallpaper-phrase-select');

    if (selectPhrase) {
        selectPhrase.innerHTML = '<option value="random">🌟 Frase Aleatória Surpresa</option>';
        const all = getAllPrinciples();
        all.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = \`[\${p.tag}] \${p.title}\`;
            selectPhrase.appendChild(opt);
        });
    }

    let selectedWTheme = 'gold';
    const tBtns = document.querySelectorAll('.lockscreen-modal-box .theme-btn');
    tBtns.forEach(b => {
        b.addEventListener('click', () => {
            sfx.play('click');
            tBtns.forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            selectedWTheme = b.getAttribute('data-theme');
        });
    });

    if (btnGenWallMobile) {
        btnGenWallMobile.addEventListener('click', () => {
            sfx.play('star');
            const all = getAllPrinciples();
            let chosen;
            if (selectPhrase && selectPhrase.value !== 'random') {
                chosen = all.find(x => String(x.id) === selectPhrase.value);
            }
            if (!chosen) chosen = all[Math.floor(Math.random() * all.length)];
            
            generateLockscreenWallpaper(chosen, selectedWTheme);
        });
    }

    if (btnGenWallDesktop) {
        btnGenWallDesktop.addEventListener('click', () => {
            sfx.play('star');
            const all = getAllPrinciples();
            let chosen;
            if (selectPhrase && selectPhrase.value !== 'random') {
                chosen = all.find(x => String(x.id) === selectPhrase.value);
            }
            if (!chosen) chosen = all[Math.floor(Math.random() * all.length)];
            
            generateDesktopWallpaper(chosen, selectedWTheme);
        });
    }
}
`;

app = app.replace(targetInitFunc, newInitFunc);

fs.writeFileSync('app.js', app, 'utf8');
