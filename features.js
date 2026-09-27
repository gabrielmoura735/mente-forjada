// features.js
// Extensão Mente Forjada: Diário, Streak Baseado em Missões e Imagens

function getDailyReflections() {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Pick 5 principles based on day of year
    let result = [];
    const dbSize = getAllPrinciples().length;
    for(let i=0; i<5; i++) {
        let index = (dayOfYear * 5 + i) % dbSize;
        result.push(getAllPrinciples()[index]);
    }
    return result;
}

function renderDailyReflections() {
    const container = document.getElementById('daily-reflections-container');
    if (!container) return;
    container.innerHTML = '';
    
    const dailyP = getDailyReflections();
    const todayStr = new Date().toDateString();
    let savedReflections = JSON.parse(localStorage.getItem('mf_reflections') || '{}');
    
    dailyP.forEach((p, idx) => {
        const idKey = todayStr + '_' + p.id;
        const savedText = savedReflections[idKey] || '';
        
        const div = document.createElement('div');
        div.style.background = 'var(--surface-color)';
        div.style.padding = '20px';
        div.style.borderRadius = '12px';
        div.style.border = '1px solid var(--border-color)';
        
        div.innerHTML = `
            <div style="margin-bottom: 15px;">
                <span style="color: var(--accent-color); font-weight: bold; font-size: 0.9rem;">Missão  de 5</span>
                <p style="font-size: 1.1rem; color: #fff; margin: 10px 0;">" + "" + ${p.quote} + "" + "</p>
                <small style="color: var(--text-secondary);">&mdash; </small>
            </div>
            <textarea id="reflect_" rows="3" placeholder="O que você entendeu da máxima acima? Como aplicará ela hoje nas suas decisões?" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-light); color: var(--text-primary); font-family: inherit; resize: vertical;"></textarea>
            <button onclick="saveReflection('')" style="margin-top: 15px; padding: 10px 20px; background: transparent; border: 1px solid var(--accent-color); color: var(--accent-color); border-radius: 8px; cursor: pointer; font-weight: bold; width: 100%; transition: all 0.3s ease;">
                <i class="ph-bold ph-check"></i> Salvar Reflexão
            </button>
        `;
        container.appendChild(div);
    });
}

window.saveReflection = function(idKey) {
    if(typeof sfx !== 'undefined' && sfx.play) sfx.play('click');
    const text = document.getElementById('reflect_' + idKey).value;
    let savedReflections = JSON.parse(localStorage.getItem('mf_reflections') || '{}');
    savedReflections[idKey] = text;
    localStorage.setItem('mf_reflections', JSON.stringify(savedReflections));
    
    if(typeof showToast !== 'undefined') showToast('Reflexão salva no Diário de Aço!', 'ph-check-circle');
    
    checkDailyMissionsCompleted();
};

function checkDailyMissionsCompleted() {
    const dailyP = getDailyReflections();
    const todayStr = new Date().toDateString();
    let savedReflections = JSON.parse(localStorage.getItem('mf_reflections') || '{}');
    
    let completed = 0;
    dailyP.forEach(p => {
        const idKey = todayStr + '_' + p.id;
        if(savedReflections[idKey] && savedReflections[idKey].trim().length >= 5) {
            completed++;
        }
    });
    
    if(completed === 5) {
        let lastCompletedDate = localStorage.getItem('mf_last_completed_date');
        if(lastCompletedDate !== todayStr) {
            localStorage.setItem('mf_last_completed_date', todayStr);
            let currentStreak = parseInt(localStorage.getItem('mf_streak_count') || '0', 10);
            
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if(lastCompletedDate === yesterday.toDateString()) {
                currentStreak += 1;
            } else {
                currentStreak = 1; 
            }
            
            localStorage.setItem('mf_streak_count', currentStreak);
            
            const streakEl = document.getElementById('streak-counter');
            if (streakEl) streakEl.textContent = currentStreak;
            
            if(typeof sfx !== 'undefined' && sfx.play) sfx.play('complete');
            if(typeof Swal !== 'undefined') {
                Swal.fire({
                    title: 'Fogo Forjado!',
                    text: `Você completou suas 5 reflexões diárias. Seu fogo aumentou para ${currentStreak} dia(s)!`,
                    icon: 'success',
                    background: '#1f1f1f',
                    color: '#fff',
                    confirmButtonColor: '#f5b73d'
                });
            }
        }
    }
}

window.checkStreakUpdate = function() {
    const streakEl = document.getElementById('streak-counter');
    const count = localStorage.getItem('mf_streak_count') || '0';
    if (streakEl) streakEl.textContent = count;
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if(typeof getAllPrinciples !== 'undefined' && getAllPrinciples().length > 0) {
            renderDailyReflections();
            window.checkStreakUpdate();
        }
    }, 800);
});
