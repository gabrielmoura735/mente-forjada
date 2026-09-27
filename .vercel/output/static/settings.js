// ==========================================================================
// 21. CONFIGURAÇÕES & I18N (INTERNACIONALIZAÇÃO)
// ==========================================================================
let savedSettings = null;
try {
    savedSettings = JSON.parse(localStorage.getItem('mf_settings'));
} catch(e) { console.warn('Erro ao ler mf_settings', e); }

window.appSettings = savedSettings || {
    uiLang: 'pt-BR',
    voiceLang: 'pt-BR',
    ttsVoiceURI: '',
    profile: null, // { name, email, avatar, birthdate }
    uiTheme: 'escuro'
};

if (!window.appSettings.uiTheme) {
    window.appSettings.uiTheme = 'escuro';
}

document.documentElement.setAttribute('data-theme', window.appSettings.uiTheme);

const i18nDict = {
    'pt-BR': {
        'nav_lockscreen': 'Tela de Bloqueio',
        'nav_settings': 'Configurações',
        'settings_title': 'Configurações da Conta',
        'settings_desc': 'Ajuste o idioma do site e suas preferências de áudio do podcast.',
        'settings_ui_lang': 'Idioma do Site (Interface)',
        'settings_voice_lang': 'Filtro de Idioma do Áudio',
        'settings_voice_select': 'Qual Voz Ouvir no Podcast?',
        'settings_save': 'Salvar Preferências'
    },
    'en-US': {
        'nav_lockscreen': 'Lockscreen',
        'nav_settings': 'Settings',
        'settings_title': 'Account Settings',
        'settings_desc': 'Adjust site language and podcast audio preferences.',
        'settings_ui_lang': 'Site Language (UI)',
        'settings_voice_lang': 'Audio Language Filter',
        'settings_voice_select': 'Which Voice for Podcast?',
        'settings_save': 'Save Preferences'
    },
    'es-ES': {
        'nav_lockscreen': 'Pantalla Bloq.',
        'nav_settings': 'Configuración',
        'settings_title': 'Ajustes de la Cuenta',
        'settings_desc': 'Ajusta el idioma del sitio y tus preferencias de audio del podcast.',
        'settings_ui_lang': 'Idioma del Sitio (UI)',
        'settings_voice_lang': 'Filtro de Idioma de Audio',
        'settings_voice_select': '¿Qué Voz Escuchar?',
        'settings_save': 'Guardar Preferencias'
    }
};

function applyTranslations() {
    const texts = i18nDict[window.appSettings.uiLang] || i18nDict['pt-BR'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            if (el.tagName === 'INPUT' && el.type === 'placeholder') {
                el.placeholder = texts[key];
            } else {
                el.textContent = texts[key];
            }
        }
    });
}




document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();

    const modalSettings = document.getElementById('modal-settings');
    const btnOpenSettings = document.getElementById('btn-open-settings-modal');
    const btnCloseSettings = document.getElementById('btn-close-settings-modal');
    const btnSaveSettings = document.getElementById('btn-save-settings');
    
    const selUiLang = document.getElementById('select-ui-lang');
    const selUiTheme = document.getElementById('select-ui-theme');

    if (selUiLang) selUiLang.value = window.appSettings.uiLang;
    if (selUiTheme) {
        selUiTheme.value = window.appSettings.uiTheme;
        selUiTheme.addEventListener('change', (e) => {
            document.documentElement.setAttribute('data-theme', e.target.value);
        });
    }

    if (btnOpenSettings && modalSettings) {
        btnOpenSettings.addEventListener('click', () => {
            modalSettings.style.display = 'flex';
        });
    }

    if (btnCloseSettings && modalSettings) {
        btnCloseSettings.addEventListener('click', () => {
            modalSettings.style.display = 'none';
        });
    }

    if (btnSaveSettings) {
        btnSaveSettings.addEventListener('click', () => {
            if (selUiLang) window.appSettings.uiLang = selUiLang.value;
            if (selUiTheme) window.appSettings.uiTheme = selUiTheme.value;
            
            localStorage.setItem('mf_settings', JSON.stringify(window.appSettings));
            
            // Re-aplicar traduções
            applyTranslations();
            
            modalSettings.style.display = 'none';
            if(window.showToast) window.showToast('Preferências salvas com sucesso!', 'ph-check');
        });
    }

    // PROFILE & LOGIN LOGIC
    const modalLogin = document.getElementById('modal-login');
    const btnOpenLogin = document.getElementById('btn-open-login-modal');
    const btnCloseLogin = document.getElementById('btn-close-login-modal');
    const btnSubmitLogin = document.getElementById('btn-submit-login');
    const btnLogout = document.getElementById('btn-logout');

    const btnUploadAvatar = document.getElementById('btn-upload-avatar');
    const inputUploadAvatar = document.getElementById('input-upload-avatar');
    const btnGenerateAvatar = document.getElementById('btn-generate-avatar');
    const inputBirthdate = document.getElementById('profile-birthdate');

    function renderProfileUI() {
        const secLoggedOut = document.getElementById('profile-section-logged-out');
        const secLoggedIn = document.getElementById('profile-section-logged-in');
        if (!secLoggedOut || !secLoggedIn) return;

        if (window.appSettings.profile) {
            secLoggedOut.style.display = 'none';
            secLoggedIn.style.display = 'block';
            
            document.getElementById('profile-display-name').textContent = window.appSettings.profile.name;
            document.getElementById('profile-display-email').textContent = window.appSettings.profile.email;
            
            const avatarImg = document.getElementById('profile-avatar-img');
            if (window.appSettings.profile.avatar) {
                avatarImg.src = window.appSettings.profile.avatar;
            } else {
                avatarImg.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=' + encodeURIComponent(window.appSettings.profile.name);
            }

            if (inputBirthdate) {
                inputBirthdate.value = window.appSettings.profile.birthdate || '';
            }
        } else {
            secLoggedOut.style.display = 'block';
            secLoggedIn.style.display = 'none';
        }
    }

    renderProfileUI();

    // Sincronização em tempo real entre abas abertas
    window.addEventListener('storage', (e) => {
        if (e.key === 'mf_settings') {
            try {
                const newData = JSON.parse(e.newValue);
                if (newData) {
                    window.appSettings = newData;
                    applyTranslations();
                    renderProfileUI();
                    if (window.appSettings.uiTheme) {
                        document.documentElement.setAttribute('data-theme', window.appSettings.uiTheme);
                        const selUiTheme = document.getElementById('select-ui-theme');
                        if (selUiTheme) selUiTheme.value = window.appSettings.uiTheme;
                    }
                    const selUiLang = document.getElementById('select-ui-lang');
                    if (selUiLang) selUiLang.value = window.appSettings.uiLang;
                }
            } catch(err) {
                console.warn('Erro ao sincronizar configurações entre abas', err);
            }
        }
    });

    if (btnOpenLogin && modalLogin) {
        btnOpenLogin.addEventListener('click', () => {
            modalSettings.style.display = 'none';
            modalLogin.style.display = 'flex';
        });
    }

    if (btnCloseLogin && modalLogin) {
        btnCloseLogin.addEventListener('click', () => {
            modalLogin.style.display = 'none';
        });
    }

    if (btnSubmitLogin) {
        btnSubmitLogin.addEventListener('click', () => {
            const name = document.getElementById('login-name').value.trim();
            const email = document.getElementById('login-email').value.trim();
            
            if (!name || !email) {
                if(window.showToast) window.showToast('Preencha nome e e-mail!', 'ph-warning');
                return;
            }

            window.appSettings.profile = {
                name: name,
                email: email,
                avatar: '',
                birthdate: ''
            };
            
            localStorage.setItem('mf_settings', JSON.stringify(window.appSettings));
            renderProfileUI();
            modalLogin.style.display = 'none';
            modalSettings.style.display = 'flex';
            if(window.showToast) window.showToast('Conta criada com sucesso!', 'ph-check');
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            window.appSettings.profile = null;
            localStorage.setItem('mf_settings', JSON.stringify(window.appSettings));
            renderProfileUI();
            if(window.showToast) window.showToast('Sessão encerrada.', 'ph-info');
        });
    }

    function optimizePromptForAI(rawPrompt) {
        if (!rawPrompt) return 'masterpiece anime avatar portrait, 8k resolution, centered composition, highly detailed';
        
        let p = rawPrompt;
        let lower = rawPrompt.toLowerCase();
        let characterExtraDetails = '';

        const characterMap = [
            { key: /goku/i, detail: 'Son Goku from Dragon Ball Z, iconic spiky hair, orange and blue gi martial arts uniform, ki aura, official anime character design, exact likeness' },
            { key: /vegeta/i, detail: 'Vegeta from Dragon Ball Z, dark spiked hair, royal Saiyan armor suit, intense confident expression, official anime character design, exact likeness' },
            { key: /gohan/i, detail: 'Gohan Beast from Dragon Ball Super, long spiky white hair, red glowing eyes, purple gi, official anime character design' },
            { key: /trunks/i, detail: 'Future Trunks from Dragon Ball Z, purple hair, sword on back, Capsule Corp jacket, official anime character design' },
            { key: /broly/i, detail: 'Broly Legendary Super Saiyan from Dragon Ball, green spiky hair, massive muscular build, green ki energy, official anime character design' },
            { key: /naruto/i, detail: 'Naruto Uzumaki from Naruto Shippuden, spiky blonde hair, blue eyes, whisker marks on cheeks, orange headband jacket, official anime character design' },
            { key: /sasuke/i, detail: 'Sasuke Uchiha from Naruto, dark hair, red Sharingan or purple Rinnegan eye, blue collar shirt, official anime character design' },
            { key: /kakashi/i, detail: 'Kakashi Hatake from Naruto, spiky silver hair, face mask covering nose and mouth, Leaf Ninja headband over eye, official anime character design' },
            { key: /itachi/i, detail: 'Itachi Uchiha from Naruto, long black hair, Mangekyou Sharingan eyes, black Akatsuki cloak with red clouds, official anime character design' },
            { key: /madara/i, detail: 'Madara Uchiha from Naruto, long spiky black hair, red armor plates, Sharingan eyes, official anime character design' },
            { key: /luffy/i, detail: 'Monkey D. Luffy Gear 5 from One Piece, white flame hair, straw hat with red band, joyful white form, purple eyes, official anime character design' },
            { key: /zoro/i, detail: 'Roronoa Zoro from One Piece, short green hair, three gold earrings, green coat, holding samurai katanas, scar over eye, official anime character design' },
            { key: /sanji/i, detail: 'Vinsmoke Sanji from One Piece, blonde hair covering one eye, black suit and tie, official anime character design' },
            { key: /shanks/i, detail: 'Shanks from One Piece, bright red hair, three scars over eye, black cape, straw hat legacy, official anime character design' },
            { key: /gojo/i, detail: 'Satoru Gojo from Jujutsu Kaisen, snow white hair, black blindfold over eyes, dark high collar jacket, glowing bright blue eyes, official anime character design' },
            { key: /sukuna/i, detail: 'Ryomen Sukuna from Jujutsu Kaisen, pink hair, black tattoo markings on face and arms, four glowing red eyes, menacing grin, official anime character design' },
            { key: /itadori/i, detail: 'Yuji Itadori from Jujutsu Kaisen, short pink and black hair, Jujutsu High school uniform hoodie, official anime character design' },
            { key: /megumi/i, detail: 'Megumi Fushiguro from Jujutsu Kaisen, spiky dark hair, dark blue uniform, summoning shadow shikigami, official anime character design' },
            { key: /toji/i, detail: 'Toji Fushiguro from Jujutsu Kaisen, short black hair, scar on corner of mouth, muscular tight black shirt, holding curse weapon, official anime character design' },
            { key: /levi/i, detail: 'Levi Ackerman from Attack on Titan, undercut black hair, green Survey Corps cape, white ascot tie, stern intense gaze, official anime character design' },
            { key: /eren/i, detail: 'Eren Yeager from Attack on Titan, long dark hair, green eyes, brown coat or Attack Titan form, official anime character design' },
            { key: /mikasa/i, detail: 'Mikasa Ackerman from Attack on Titan, short black hair, red scarf around neck, Survey Corps uniform, official anime character design' },
            { key: /tanjiro/i, detail: 'Tanjiro Kamado from Demon Slayer, dark burgundy hair, hanafuda earrings, green and black checkered haori coat, forehead scar, official anime character design' },
            { key: /nezuko/i, detail: 'Nezuko Kamado from Demon Slayer, long black hair with orange tips, bamboo mouthpiece gag, pink kimono, official anime character design' },
            { key: /zenitsu/i, detail: 'Zenitsu Agatsuma from Demon Slayer, blonde hair, yellow lightning haori coat, thunder breathing state, official anime character design' },
            { key: /inosuke/i, detail: 'Inosuke Hashibira from Demon Slayer, boar head mask, shirtless muscular torso, dual serrated swords, official anime character design' },
            { key: /rengoku/i, detail: 'Kyojuro Rengoku Flame Hashira from Demon Slayer, bright yellow hair with red streaks, flame pattern haori coat, official anime character design' },
            { key: /saitama/i, detail: 'Saitama One Punch Man, completely bald head, yellow hero suit, red gloves, white cape, heroic intense face, official anime character design' },
            { key: /genos/i, detail: 'Genos from One Punch Man, spiky blonde hair, black and silver robotic cyborg arms, glowing yellow chest reactor, official anime character design' },
            { key: /edward elric/i, detail: 'Edward Elric Fullmetal Alchemist, long blonde braided hair, red hooded coat, silver automail mechanical arm, official anime character design' },
            { key: /light yagami|kira/i, detail: 'Light Yagami Kira from Death Note, neat light brown hair, suit and tie, holding black Death Note notebook, red glowing eyes, official anime character design' },
            { key: /l lawliet/i, detail: 'L Lawliet from Death Note, messy spiky black hair, dark eyes, white long sleeve shirt, crouching pose, official anime character design' },
            { key: /ichigo/i, detail: 'Ichigo Kurosaki Bankai from Bleach, spiky orange hair, black Shinigami robes, large black Zangetsu sword, official anime character design' },
            { key: /alucard/i, detail: 'Alucard from Hellsing, long dark hair, red fedora hat, red trench coat, yellow sunglasses, holding large handguns, official anime character design' },
            { key: /walter white|heisenberg/i, detail: 'Walter White Heisenberg from Breaking Bad, Bryan Cranston likeness, bald head, dark sunglasses, black fedora hat, yellow hazmat or dark coat, photorealistic TV series portrait' },
            { key: /thomas shelby|shelby/i, detail: 'Tommy Shelby from Peaky Blinders, Cillian Murphy likeness, dark newsboy flat cap, tweed trench coat, dark suit, 1920s Birmingham setting, photorealistic TV series portrait' },
            { key: /jon snow/i, detail: 'Jon Snow from Game of Thrones, Kit Harington likeness, curly black hair, dark fur cape, Night Watch black armor, holding Valyrian steel sword, photorealistic TV portrait' },
            { key: /daenerys/i, detail: 'Daenerys Targaryen Mother of Dragons from Game of Thrones, long platinum silver braided hair, regal gown, dragon background, photorealistic TV portrait' },
            { key: /geralt/i, detail: 'Geralt of Rivia from The Witcher, Henry Cavill likeness, long white hair, yellow witcher eyes, leather and steel armor, sword on back, photorealistic portrait' },
            { key: /mandalorian|din djarin/i, detail: 'Din Djarin The Mandalorian from Star Wars, silver Beskar steel helmet and armor, dark cape, photorealistic Star Wars film portrait' },
            { key: /wednesday|wandinha/i, detail: 'Wednesday Addams from Wednesday, Jenna Ortega likeness, black braided pigtails, dark gothic outfit, stern expression, photorealistic TV series portrait' },
            { key: /batman/i, detail: 'Batman Bruce Wayne from DC Comics, dark bat cowl with ears, black armored suit with bat symbol, dark cape, Gotham City night background, photorealistic cinematic portrait' },
            { key: /homem de ferro|iron man/i, detail: 'Iron Man Tony Stark from Marvel, red and gold metallic armor suit, glowing blue Arc Reactor chest light, photorealistic Marvel cinematic portrait' },
            { key: /darth vader/i, detail: 'Darth Vader from Star Wars, glossy black helmet and mask, black armored chestplate with glowing red/blue lights, red lightsaber, photorealistic Star Wars film still' },
            { key: /aang/i, detail: 'Aang Avatar The Last Airbender, blue arrow tattoo on head, yellow and orange monk robes, wooden glider staff, official Nickelodeon animation style' },
            { key: /jinx/i, detail: 'Jinx from Arcane League of Legends, long braided twin bright blue pigtails, pink eyes, cloud tattoos, leather belts, official Riot Arcane animation character design' },
            { key: /rick/i, detail: 'Rick Sanchez from Rick and Morty, spiky light blue hair, unibrow, white lab coat over turquoise shirt, official cartoon character design' },
            { key: /john wick/i, detail: 'John Wick Keanu Reeves likeness, dark suit and tie, black hair and beard, intense tactical look, photorealistic cinematic portrait' }
        ];

        for (const item of characterMap) {
            if (item.key.test(lower)) {
                characterExtraDetails = item.detail;
                break;
            }
        }

        const replacements = [
            { pt: /em 3D hiper realista/gi, en: 'hyperrealistic 3d octane render, highly detailed face' },
            { pt: /desenho em aquarela dark/gi, en: 'dark watercolor art style, expressive strokes' },
            { pt: /estilo cyberpunk sombrio/gi, en: 'dark cyberpunk style, glowing neon aesthetics' },
            { pt: /renderização Unreal Engine 5/gi, en: 'unreal engine 5 render, photorealistic details' },
            { pt: /com armadura de ouro puro/gi, en: 'wearing ornate pure gold armor, gleaming metallic reflections' },
            { pt: /estilo anime épico dark fantasy/gi, en: 'epic anime dark fantasy artwork, detailed illustration' },
            { pt: /iluminação cinematográfica dramática/gi, en: 'dramatic cinematic lighting, volumetric shadows' },
            { pt: /estilo minimalista preto e branco/gi, en: 'minimalist black and white art, high contrast line art' },
            { pt: /traços de carvão e grafite/gi, en: 'charcoal and graphite sketch, dark fine lines' },
            { pt: /neon synthwave escuro/gi, en: 'dark synthwave neon lighting, retrowave aesthetics' },
            { pt: /em chamas azuis/gi, en: 'surrounded by vivid blue flames and energy aura' },
            { pt: /estilo pintura a óleo/gi, en: 'classic oil painting texture, rich color palette' },
            { pt: /em 3D 8K/gi, en: '3D 8K resolution character portrait, highly detailed' },
            { pt: /estilo concept art épico/gi, en: 'epic concept art, masterpiece illustration' },
            { pt: /estilo quadrinhos dark/gi, en: 'dark comic book art style, bold ink lines' },
            { pt: /feito de mármore/gi, en: 'carved from smooth white marble statue' },
            { pt: /em estilo anime/gi, en: 'vibrant anime art style, crisp linework' },
            { pt: /renderização Pixar escuro/gi, en: 'dark 3d animated movie style, detailed 3d render' },
            { pt: /estilo renascentista/gi, en: 'renaissance masterpiece oil painting style' },
            { pt: /estilo vitral gótico/gi, en: 'gothic stained glass art, vivid glowing colors' },
            { pt: /pintura digital hiper detalhada/gi, en: 'hyper-detailed digital painting, masterpiece' },
            { pt: /desenho a lápis/gi, en: 'detailed pencil sketch drawing' },
            { pt: /estilo cyberpunk neon/gi, en: 'neon cyberpunk aesthetics, glowing lights' },
            { pt: /estilo steampunk de engrenagens/gi, en: 'steampunk gear aesthetic, brass and copper details' },
            { pt: /estilo pixel art 16bit/gi, en: 'detailed 16-bit pixel art style' },
            { pt: /estilo fantasia medieval/gi, en: 'epic medieval fantasy illustration' },
            { pt: /estilo de terror cósmico/gi, en: 'cosmic horror dark fantasy art' },
            { pt: /feito de ouro maciço/gi, en: 'solid gold statue, gleaming metallic reflections' },
            { pt: /feito de sombras e névoa/gi, en: 'made of swirling dark shadows and mystical mist' },
            { pt: /estilo holograma futurista/gi, en: 'glowing futuristic hologram effect' },
            { pt: /com iluminação cinematográfica/gi, en: 'cinematic lighting, masterpiece' },
            { pt: /sob a luz da lua de sangue/gi, en: 'under blood red moonlight' },
            { pt: /com aura mágica brilhante/gi, en: 'with glowing magical aura' },
            { pt: /em meio a uma tempestade de raios/gi, en: 'surrounded by intense lightning storm' },
            { pt: /com sombras dramáticas noir/gi, en: 'dramatic noir shadows' }
        ];

        replacements.forEach(r => {
            p = p.replace(r.pt, r.en);
        });

        p = p.replace(/\s*\([^)]*\)/g, '');

        const corePrompt = characterExtraDetails !== '' ? `${characterExtraDetails}, ${p.trim()}` : p.trim();

        return `${corePrompt}, square profile avatar portrait, centered character face, exact character likeness, official character design, masterpiece, ultra detailed, 8k resolution`;
    }

    if (btnGenerateAvatar) {
        btnGenerateAvatar.addEventListener('click', () => {
            if (!window.appSettings.profile) {
                if (window.showToast) window.showToast('Crie sua conta ou faça login primeiro!', 'ph-warning');
                return;
            }
            const promptInput = document.getElementById('ai-prompt-input');
            let userPrompt = promptInput && promptInput.value.trim() !== '' ? promptInput.value : 'Um guerreiro estoico hiper realista, armadura dourada e preta, olhar focado';
            
            const seed = Math.floor(Math.random() * 9999999);
            const finalPrompt = optimizePromptForAI(userPrompt);
            const newAvatarUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}?width=512&height=512&nologo=true&model=flux&enhance=true&seed=${seed}`;
            
            const originalHTML = btnGenerateAvatar.innerHTML;
            btnGenerateAvatar.disabled = true;
            btnGenerateAvatar.innerHTML = '<i class="ph-bold ph-circle-notch spin"></i> Gerando...';
            
            const avatarImg = document.getElementById('profile-avatar-img');
            if (avatarImg) avatarImg.style.opacity = '0.4';

            if (window.showToast) window.showToast('Gerando arte por IA FLUX... (Aguarde alguns segundos)', 'ph-magic-wand');

            const imgLoader = new Image();
            imgLoader.onload = () => {
                if (avatarImg) {
                    avatarImg.src = newAvatarUrl;
                    avatarImg.style.opacity = '1';
                }
                window.appSettings.profile.avatar = newAvatarUrl;
                localStorage.setItem('mf_settings', JSON.stringify(window.appSettings));
                btnGenerateAvatar.disabled = false;
                btnGenerateAvatar.innerHTML = originalHTML;
                if (window.showToast) window.showToast('Arte IA gerada com sucesso!', 'ph-check');
            };

            imgLoader.onerror = () => {
                const fallbackUrl = 'https://api.dicebear.com/7.x/bottts/svg?seed=' + encodeURIComponent(userPrompt);
                if (avatarImg) {
                    avatarImg.src = fallbackUrl;
                    avatarImg.style.opacity = '1';
                }
                window.appSettings.profile.avatar = fallbackUrl;
                localStorage.setItem('mf_settings', JSON.stringify(window.appSettings));
                btnGenerateAvatar.disabled = false;
                btnGenerateAvatar.innerHTML = originalHTML;
                if (window.showToast) window.showToast('Servidor de IA instável. Usando avatar de suporte.', 'ph-warning');
            };

            imgLoader.src = newAvatarUrl;
        });
    }

    // Lógica do Datalist Dinâmico e "Infinito"
    const dlPrompts = document.getElementById('ai-prompts');
    const promptInput = document.getElementById('ai-prompt-input');
    
    if (dlPrompts && promptInput) {
        const animeCharacters = [
            "Goku Super Saiyajin (Dragon Ball)", "Vegeta Prince (Dragon Ball)", "Gohan Beast (Dragon Ball)", "Trunks do Futuro (Dragon Ball)", "Broly Lendário (Dragon Ball)",
            "Naruto Uzumaki Modo Sage (Naruto)", "Sasuke Uchiha Rinnegan (Naruto)", "Kakashi Hatake Sharingan (Naruto)", "Itachi Uchiha (Naruto)", "Madara Uchiha (Naruto)", "Jiraiya Sannin (Naruto)",
            "Monkey D. Luffy Gear 5 (One Piece)", "Roronoa Zoro Tres Espadas (One Piece)", "Vinsmoke Sanji (One Piece)", "Shanks o Ruivo (One Piece)", "Portgas D. Ace (One Piece)",
            "Satoru Gojo Expansão de Dominio (Jujutsu Kaisen)", "Ryomen Sukuna Rei dos Demonios (Jujutsu Kaisen)", "Yuji Itadori (Jujutsu Kaisen)", "Megumi Fushiguro (Jujutsu Kaisen)", "Toji Fushiguro (Jujutsu Kaisen)",
            "Levi Ackerman Capitão (Attack on Titan)", "Eren Yeager Tita Fundador (Attack on Titan)", "Mikasa Ackerman (Attack on Titan)",
            "Saitama Careca de Um Soco (One Punch Man)", "Genos Ciborgue (One Punch Man)", "Garou Caçador de Herois (One Punch Man)",
            "Tanjiro Kamado Respiração do Sol (Demon Slayer)", "Nezuko Kamado Oni (Demon Slayer)", "Zenitsu Agatsuma Respiração do Trovão (Demon Slayer)", "Inosuke Hashibira (Demon Slayer)", "Kyojuro Rengoku Hashira das Chamas (Demon Slayer)", "Giyu Tomioka Hashira da Agua (Demon Slayer)",
            "Edward Elric Alquimista de Aço (Fullmetal Alchemist)", "Roy Mustang Alquimista das Chamas (Fullmetal Alchemist)",
            "Light Yagami Kira (Death Note)", "L Lawliet Detetive (Death Note)",
            "Ichigo Kurosaki Bankai (Bleach)", "Byakuya Kuchiki (Bleach)", "Kenpachi Zaraki (Bleach)",
            "Alucard Vampiro Rei (Hellsing)", "Spike Spiegel (Cowboy Bebop)", "Baki Hanma Campeão (Baki)", "Yujiro Hanma a Criatura Mais Forte (Baki)", "Miyamoto Musashi (Vagabond)",
            "All Might Simbolo da Paz (My Hero Academia)", "Izuku Midoriya Deku One For All (My Hero Academia)", "Katsuki Bakugo (My Hero Academia)", "Shoto Todoroki (My Hero Academia)",
            "Meliodas Pecado da Ira (Seven Deadly Sins)", "Natsu Dragneel Dragon Slayer (Fairy Tail)",
            "Gon Freecss (Hunter x Hunter)", "Killua Zoldyck (Hunter x Hunter)", "Hisoka Morow (Hunter x Hunter)",
            "Mob Shigeo Kageyama 100% (Mob Psycho 100)", "Thorfinn Karlsefni Guerreiro (Vinland Saga)", "Askeladd (Vinland Saga)",
            "Denji Chainsaw Man (Chainsaw Man)", "Makima Demonio do Controle (Chainsaw Man)", "Aki Hayakawa (Chainsaw Man)"
        ];

        const seriesCharacters = [
            "Walter White Heisenberg (Breaking Bad)", "Jesse Pinkman (Breaking Bad)",
            "Thomas Shelby (Peaky Blinders)", "Jon Snow (Game of Thrones)", "Daenerys Targaryen (Game of Thrones)",
            "Tyrion Lannister (Game of Thrones)", "Night King Rei da Noite (Game of Thrones)",
            "Daemon Targaryen (House of the Dragon)", "Aemond Targaryen (House of the Dragon)",
            "Geralt de Rivia (The Witcher)", "Din Djarin O Mandaloriano (The Mandalorian)",
            "Eleven Onze (Stranger Things)", "Vecna (Stranger Things)",
            "Wednesday Wandinha Addams (Wednesday)", "Joel Miller (The Last of Us)", "Ellie Williams (The Last of Us)",
            "Homelander Capitao Patria (The Boys)", "Billy Butcher Brutamontes (The Boys)",
            "Ragnar Lothbrok (Vikings)", "Bjorn Ironside (Vikings)", "Lucifer Morningstar (Lucifer)"
        ];

        const cartoonCharacters = [
            "Aang O Ultimo Dobrador de Ar (Avatar)", "Zuko Principe do Fogo (Avatar)", "Korra (Avatar)",
            "Rick Sanchez Cientista (Rick and Morty)", "Morty Smith (Rick and Morty)",
            "Ben 10 Alien Force (Ben 10)", "Vilgax (Ben 10)",
            "Vi (Arcane League of Legends)", "Jinx (Arcane League of Legends)", "Jayce (Arcane League of Legends)", "Viktor (Arcane League of Legends)",
            "Batman Animado (DC Cartoons)", "Miles Morales Aranhaverso (Spider-Verse)",
            "Finn O Humano (Hora de Aventura)", "Jake O Cao (Hora de Aventura)", "Wolverine (X-Men 97)"
        ];

        const movieCharacters = [
            "Batman O Cavaleiro das Trevas (DC Comics)", "Coringa Joaquin Phoenix (Joker)",
            "Homem de Ferro Mark 85 (Marvel)", "Homem-Aranha Traje Preto Simbionte (Marvel)",
            "Darth Vader Senhor Sith (Star Wars)", "Luke Skywalker Mestre Jedi (Star Wars)", "Boba Fett (Star Wars)",
            "Neo O Escolhido (The Matrix)", "Morpheus (The Matrix)",
            "Gandalf O Cinzento (Senhor dos Aneis)", "Aragorn Rei de Gondor (Senhor dos Aneis)", "Legolas (Senhor dos Aneis)",
            "Harry Potter Bruxos (Harry Potter)", "Lord Voldemort (Harry Potter)",
            "John Wick O Bicho Papao (John Wick)", "Maximus Gladiador Romano (Gladiador)",
            "Exterminador do Futuro T-800 (Terminator)", "Optimus Prime Lider (Transformers)", "Capitão Jack Sparrow (Piratas do Caribe)"
        ];

        const subjectsAZ = [
            "Anjo de Fogo", "Arqueiro Élfico", "Assassino das Sombras", "Alquimista Antigo", "Avatar da Luz",
            "Bárbaro Nórdico", "Besta Mitológica", "Bruxo Negro", "Bandeirante de Aço", "Basilisco Gigante",
            "Cavaleiro Templário", "Ciborgue Neon", "Corsário Negro", "Centauro Guerreiro", "Caçador de Recompensas",
            "Dragão Negro", "Deus Grego", "Demônio Maior", "Druida da Floresta", "Divindade Solar",
            "Estrategista Militar", "Imperador Romano", "Espectro da Morte", "Elfo Sombrio", "Espírito Lobo",
            "Fênix de Fogo", "Filósofo Estoico", "Fantasma Amaldiçoado", "Fada da Floresta", "Faraó Egípcio",
            "Gladiador Invicto", "Gárgula de Pedra", "Guerreiro Espartano", "Gênio da Lâmpada", "General Samurai",
            "Hoplita Grego", "Herói Caído", "Homem de Ferro Vintage", "Harpia Selvagem", "Hidra de Lerna",
            "Imperador Asiático", "Ilusionista Arcano", "Inquisidor Implacável", "Lobisomem Ancião", "Lobo Prateado",
            "Javali de Batalha", "Jedi Sombrio", "Jóia Viva", "Juiz do Submundo", "Jaguar Cibernético",
            "Kitsune de Nove Caudas", "Kraken das Profundezas", "Kunoichi Mortal", "Lorde Feiticeiro", "Ladrão de Almas",
            "Mago Arcano", "Monge Shaolin", "Minotauro Furioso", "Múmia Ancestral", "Mutante Radioativo",
            "Ninja Silencioso", "Necromante Negro", "Nobre Cavaleiro", "Náiade dos Rios", "Nuvem Senciente",
            "Ogro Gigante", "Oráculo Divino", "Observador Galáctico", "Paladino da Luz", "Pantera Negra",
            "Pirata Lendário", "Príncipe Desterrado", "Quimera Mitológica", "Quasar Vivo", "Ranger Solitário",
            "Rei Antigo", "Ronin Desonrado", "Reptiliano Guerreiro", "Samurai Negro", "Sacerdote das Trevas",
            "Sentinela de Prata", "Sombra Assassina", "Tigre Branco", "Titã de Fogo", "Templário das Neves",
            "Urso Pardo Blindado", "Vampiro Nobre", "Viking Furioso", "Valquíria Dourada", "Viajante do Tempo",
            "Wendigo", "Wyvern Esmeralda", "Xamã Tribal", "Xerife Ciborgue", "Yeti das Montanhas",
            "Yokai Demoníaco", "Zumbi Mágico", "Zelote Religioso"
        ];
        
        const coreStyles = [
            "em 3D hiper realista", "desenho em aquarela dark", "estilo cyberpunk sombrio", "renderização Unreal Engine 5",
            "com armadura de ouro puro", "estilo anime épico dark fantasy", "iluminação cinematográfica dramática",
            "estilo minimalista preto e branco", "traços de carvão e grafite", "neon synthwave escuro", "em chamas azuis"
        ];

        const customArtStyles = [
            "estilo pintura a óleo", "em 3D 8K", "estilo concept art épico", "estilo quadrinhos dark",
            "feito de mármore", "em estilo anime", "renderização Pixar escuro", "estilo renascentista",
            "em estilo origami", "em estilo vitral gótico", "pintura digital hiper detalhada", "desenho a lápis",
            "estilo cyberpunk neon", "estilo steampunk de engrenagens", "estilo pixel art 16bit", "estilo fantasia medieval",
            "estilo de terror cósmico", "feito de ouro maciço", "feito de sombras e névoa", "estilo holograma futurista"
        ];
        
        const customLighting = [
            "com iluminação cinematográfica", "sob a luz da lua de sangue", "com aura mágica brilhante",
            "em meio a uma tempestade de raios", "com sombras dramáticas noir"
        ];

        function populateDefaultList() {
            dlPrompts.innerHTML = '';
            
            // 1. Injeta todos os personagens de Animes, Séries, Desenhos e Filmes diretamente ("de primeira mão")
            const allFirstHandCharacters = [
                ...animeCharacters,
                ...seriesCharacters,
                ...cartoonCharacters,
                ...movieCharacters
            ];

            allFirstHandCharacters.forEach(charName => {
                const opt = document.createElement('option');
                opt.value = charName;
                dlPrompts.appendChild(opt);
            });

            // 2. Gera combinações com estilos para todos os personagens e temas
            const allSubjects = [...allFirstHandCharacters, ...subjectsAZ];
            allSubjects.forEach(sub => {
                coreStyles.forEach(sty => {
                    const opt = document.createElement('option');
                    opt.value = `${sub} ${sty}`;
                    dlPrompts.appendChild(opt);
                });
            });
        }

        function populateCustomVariations(userInput) {
            dlPrompts.innerHTML = '';
            // Gera exatamente 100 variações épicas (20 estilos * 5 iluminações) usando o texto do usuário
            customArtStyles.forEach(sty => {
                customLighting.forEach(light => {
                    const opt = document.createElement('option');
                    opt.value = `${userInput} ${sty} ${light}`;
                    dlPrompts.appendChild(opt);
                });
            });
        }

        // Preenche com a lista de A-Z no início
        populateDefaultList();

        // Ouve o que o usuário digita
        promptInput.addEventLis