// community.js - Lógica para o Mural da Comunidade e Feedbacks

const COMMUNITY_STORAGE_KEY = 'mf_community_posts';
const DEVICE_ID_KEY = 'mf_device_id';

// Gerar ID de dispositivo único se não existir
function getDeviceId() {
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);
    if (!deviceId) {
        deviceId = 'device_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem(DEVICE_ID_KEY, deviceId);
    }
    return deviceId;
}

// Dados Iniciais (Mensagens de Boas-vindas)
const defaultPosts = [
    {
        id: 'post_welcome_1',
        author: 'Mente Forjada',
        authorId: 'admin_1',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MenteForjadaAdmin',
        text: 'Bem-vindos à nossa Comunidade! 🏛️\n\nEste é um espaço exclusivo para quem adquiriu o Mente Forjada. Aqui vocês podem compartilhar relatos, trocar conselhos, comemorar vitórias diárias e interagir uns com os outros. A jornada do autoconhecimento e disciplina é melhor quando compartilhada. Sintam-se em casa! 🔥',
        tag: 'Motivação',
        likes: 15,
        date: new Date(Date.now() - 86400000 * 2).toISOString(),
        replies: []
    },
    {
        id: 'post_welcome_2',
        author: 'Carlos',
        authorId: 'system_user_carlos',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
        text: 'E aí pessoal! Acabei de começar a usar o site e já estou sentindo uma diferença enorme na minha rotina matinal. Alguém tem alguma dica de qual frequência sonora é melhor para manter o foco no trabalho?',
        tag: 'Dúvida',
        likes: 4,
        date: new Date(Date.now() - 3600000 * 5).toISOString(),
        replies: [
            {
                id: 'reply_welcome_2_1',
                author: 'Mente Forjada',
                authorId: 'admin_1',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MenteForjadaAdmin',
                text: 'Olá Carlos! Recomendamos usar o "Foco Zen" (Ondas Beta) para leitura e estudos, e os "Tambores Xamânicos" quando precisar de mais energia física e ritmo. Fique à vontade para testar! 🎧',
                date: new Date(Date.now() - 3600000 * 3).toISOString()
            }
        ]
    }
];

// Carregar posts do localStorage
function getCommunityPosts() {
    const saved = localStorage.getItem(COMMUNITY_STORAGE_KEY);
    let posts = [];
    if (saved) {
        posts = JSON.parse(saved);
        
        // Se tiver o post do "Felipe" (dados antigos da demonstração lotada), reseta para mostrar apenas as 2 novas
        if (posts.some(p => p.author === 'Felipe' || p.id === 'post_1')) {
            posts = defaultPosts;
            saveCommunityPosts(posts);
        } else {
            // Garante que não falte a array de replies em posts antigos do storage
            posts.forEach(p => { if (!p.replies) p.replies = []; });
        }
    } else {
        posts = defaultPosts;
        saveCommunityPosts(posts);
    }
    return posts;
}

// Salvar posts no localStorage
function saveCommunityPosts(posts) {
    localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(posts));
}

function getTagIcon(tag) {
    switch (tag) {
        case 'Relato': return '📖';
        case 'Motivação': return '🔥';
        case 'Dúvida': return '❓';
        case 'Sugestão': return '💡';
        case 'Agradecimento': return '🙏';
        default: return '💬';
    }
}

// Obter nome e avatar do usuário logado
function getCurrentUser(isAnon = false) {
    if (isAnon) {
        return {
            name: 'Anônimo',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous' + Math.random().toString(36).substring(7)
        };
    }
    
    let authorName = 'Visitante Anônimo';
    let avatarUrl = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + Math.random().toString(36).substring(7);
    
    const savedSettings = localStorage.getItem('mf_settings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        if (settings.profileName) {
            authorName = settings.profileName;
            avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${authorName}`;
        }
        if (settings.profileAvatar) {
            avatarUrl = settings.profileAvatar;
        }
    }
    return { name: authorName, avatar: avatarUrl };
}

// Renderizar o feed
window.renderCommunityFeed = function() {
    const feedContainer = document.getElementById('community-feed');
    if (!feedContainer) return;
    
    let posts = getCommunityPosts();
    const myDeviceId = getDeviceId();
    
    // Obter filtros
    const filterTagEl = document.getElementById('community-filter-tag');
    const filterTag = filterTagEl ? filterTagEl.value : 'all';
    
    const sortEl = document.getElementById('community-sort');
    const sortBy = sortEl ? sortEl.value : 'recent';
    
    // Aplicar Filtro
    if (filterTag !== 'all') {
        posts = posts.filter(p => p.tag === filterTag);
    }
    
    // Aplicar Ordenação
    if (sortBy === 'likes') {
        posts.sort((a, b) => b.likes - a.likes || new Date(b.date) - new Date(a.date));
    } else {
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    feedContainer.innerHTML = '';
    
    if (posts.length === 0) {
        feedContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 20px;">Nenhum depoimento encontrado com esses filtros. Seja o primeiro!</p>';
        return;
    }
    
    // Renderiza
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.style.cssText = 'background: var(--surface-light); border: 1px solid var(--border-color); border-radius: 12px; padding: 15px; display: flex; flex-direction: column; gap: 10px;';
        
        const displayTag = post.tag || 'Relato';
        const tagIcon = getTagIcon(displayTag);
        const isMyPost = post.authorId === myDeviceId;
        
        // Gerar HTML das Respostas
        let repliesHtml = '';
        if (post.replies && post.replies.length > 0) {
            repliesHtml = '<div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--border-subtle); display: flex; flex-direction: column; gap: 10px;">';
            post.replies.forEach(reply => {
                const isMyReply = reply.authorId === myDeviceId;
                
                let replyActionsHtml = '';
                if (isMyReply) {
                    replyActionsHtml = `
                        <button onclick="editCommunityReply('${post.id}', '${reply.id}')" title="Editar" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer;"><i class="ph-bold ph-pencil-simple"></i></button>
                        <button onclick="deleteCommunityReply('${post.id}', '${reply.id}')" title="Apagar" style="background:transparent; border:none; color:#ff4444; cursor:pointer;"><i class="ph-bold ph-trash"></i></button>
                    `;
                }
                
                repliesHtml += `
                    <div style="display: flex; gap: 10px; padding-left: 15px; border-left: 2px solid var(--border-color);">
                        <img src="${reply.avatar}" alt="Avatar" style="width: 28px; height: 28px; border-radius: 50%; background: var(--bg-void);">
                        <div style="flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                <h5 style="color: var(--text-primary); margin: 0; font-size: 0.85rem;">${reply.author}</h5>
                                <div style="display:flex; gap:5px; align-items:center;">
                                    <small style="color: var(--text-muted); font-size: 0.7rem;">${new Date(reply.date).toLocaleDateString()}</small>
                                    ${replyActionsHtml}
                                </div>
                            </div>
                            <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.4; margin: 2px 0 0 0; white-space: pre-wrap;">${reply.text}</p>
                        </div>
                    </div>
                `;
            });
            repliesHtml += '</div>';
        }
        
        let postActionsHtml = '';
        if (isMyPost) {
            postActionsHtml = `
                <button onclick="editCommunityPost('${post.id}')" class="btn-icon-ambient" style="padding: 5px 10px; font-size: 0.8rem; display: flex; align-items: center; gap: 5px; cursor: pointer; border: none; background: transparent; color: var(--gold-pure);">
                    <i class="ph-bold ph-pencil-simple"></i> Editar
                </button>
                <button onclick="deleteCommunityPost('${post.id}')" class="btn-icon-ambient" style="padding: 5px 10px; font-size: 0.8rem; display: flex; align-items: center; gap: 5px; cursor: pointer; border: none; background: transparent; color: #ff4444;">
                    <i class="ph-bold ph-trash"></i> Apagar
                </button>
            `;
        }
        
        postEl.innerHTML = `
            <!-- Cabeçalho do Post -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="${post.avatar}" alt="Avatar" style="width: 40px; height: 40px; border-radius: 50%; background: var(--bg-void);">
                    <div>
                        <h4 style="color: var(--gold-pure); margin: 0; font-size: 0.95rem;">${post.author}</h4>
                        <small style="color: var(--text-muted); font-size: 0.75rem;">${new Date(post.date).toLocaleDateString()}</small>
                    </div>
                </div>
                <span style="background: var(--bg-void); color: var(--text-secondary); border: 1px solid var(--border-metal); padding: 3px 8px; border-radius: 12px; font-size: 0.75rem;">
                    ${tagIcon} ${displayTag}
                </span>
            </div>
            
            <!-- Texto do Post -->
            <p style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.5; margin: 0; white-space: pre-wrap;">${post.text}</p>
            
            <!-- Ações do Post -->
            <div style="display: flex; flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--border-subtle); padding-top: 10px; margin-top: 5px;">
                <button onclick="likeCommunityPost('${post.id}')" class="btn-icon-ambient" style="padding: 5px 10px; font-size: 0.8rem; display: flex; align-items: center; gap: 5px; cursor: pointer; border: none; background: transparent; color: var(--text-secondary);">
                    <i class="ph-bold ph-heart"></i> ${post.likes}
                </button>
                <button onclick="document.getElementById('reply-box-${post.id}').style.display='flex'" class="btn-icon-ambient" style="padding: 5px 10px; font-size: 0.8rem; display: flex; align-items: center; gap: 5px; cursor: pointer; border: none; background: transparent; color: var(--text-secondary);">
                    <i class="ph-bold ph-chat-text"></i> Responder
                </button>
                <button onclick="shareCommunityPost('${post.id}')" class="btn-icon-ambient" style="padding: 5px 10px; font-size: 0.8rem; display: flex; align-items: center; gap: 5px; cursor: pointer; border: none; background: transparent; color: var(--text-secondary);">
                    <i class="ph-bold ph-copy"></i> Copiar
                </button>
                ${postActionsHtml}
            </div>
            
            <!-- Respostas Existentes -->
            ${repliesHtml}
            
            <!-- Caixa de Nova Resposta (Escondida por Padrão) -->
            <div id="reply-box-${post.id}" style="display: none; flex-direction: column; gap: 8px; margin-top: 10px; padding-left: 15px; border-left: 2px solid var(--border-color);">
                <textarea id="reply-input-${post.id}" placeholder="Escreva sua resposta..." style="width: 100%; height: 50px; background: var(--bg-void); border: 1px solid var(--border-metal); color: var(--text-primary); border-radius: 8px; padding: 8px; font-family: inherit; resize: none; font-size: 0.85rem;"></textarea>
                <div style="display: flex; justify-content: flex-end; gap: 10px;">
                    <button onclick="document.getElementById('reply-box-${post.id}').style.display='none'" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.85rem; padding: 5px 10px;">Cancelar</button>
                    <button onclick="replyCommunityPost('${post.id}')" class="btn-gold-action" style="padding: 5px 15px; font-size: 0.85rem; min-width: auto; min-height: auto; width: auto; line-height: 1;">Enviar</button>
                </div>
            </div>
        `;
        feedContainer.appendChild(postEl);
    });
};

// Publicar novo post principal
window.publishCommunityPost = function() {
    const textInput = document.getElementById('community-post-text');
    const tagInput = document.getElementById('community-post-tag');
    const anonInput = document.getElementById('community-post-anon');
    
    const text = textInput.value.trim();
    const tag = tagInput ? tagInput.value : 'Relato';
    const isAnon = anonInput ? anonInput.checked : false;
    
    if (!text) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo Vazio',
            text: 'Escreva alguma coisa antes de publicar!',
            background: 'var(--bg-surface)',
            color: 'var(--text-steel)',
            confirmButtonColor: 'var(--gold-pure)'
        });
        return;
    }
    
    const user = getCurrentUser(isAnon);
    const myDeviceId = getDeviceId();
    
    const newPost = {
        id: 'post_' + Date.now(),
        author: user.name,
        authorId: myDeviceId,
        avatar: user.avatar,
        text: text,
        tag: tag,
        likes: 0,
        date: new Date().toISOString(),
        replies: []
    };
    
    const posts = getCommunityPosts();
    posts.push(newPost);
    saveCommunityPosts(posts);
    
    textInput.value = '';
    if (anonInput) anonInput.checked = false;
    
    Swal.fire({
        icon: 'success',
        title: 'Publicado!',
        text: 'Sua mensagem foi adicionada ao mural da comunidade.',
        background: 'var(--bg-surface)',
        color: 'var(--text-steel)',
        confirmButtonColor: 'var(--gold-pure)',
        timer: 2000,
        showConfirmButton: false
    }).then(() => {
        renderCommunityFeed();
    });
};

// Publicar uma resposta
window.replyCommunityPost = function(postId) {
    const replyInput = document.getElementById(`reply-input-${postId}`);
    if (!replyInput) return;
    
    const text = replyInput.value.trim();
    if (!text) return;
    
    const user = getCurrentUser(false);
    const myDeviceId = getDeviceId();
    
    const newReply = {
        id: 'reply_' + Date.now(),
        author: user.name,
        authorId: myDeviceId,
        avatar: user.avatar,
        text: text,
        date: new Date().toISOString()
    };
    
    const posts = getCommunityPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.replies.push(newReply);
        saveCommunityPosts(posts);
        renderCommunityFeed();
    }
};

// Editar Post
window.editCommunityPost = async function(postId) {
    const posts = getCommunityPosts();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) return;
    
    const { value: newText } = await Swal.fire({
        title: 'Editar Relato',
        input: 'textarea',
        inputValue: posts[postIndex].text,
        inputPlaceholder: 'Escreva seu novo texto aqui...',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Salvar',
        background: 'var(--bg-surface)',
        color: 'var(--text-steel)',
        confirmButtonColor: 'var(--gold-pure)',
        cancelButtonColor: 'transparent',
    });

    if (newText && newText.trim().length > 0) {
        posts[postIndex].text = newText.trim();
        saveCommunityPosts(posts);
        renderCommunityFeed();
    }
};

// Excluir Post
window.deleteCommunityPost = function(postId) {
    Swal.fire({
        title: 'Apagar Relato?',
        text: 'Tem certeza que deseja excluir esta publicação? Essa ação não pode ser desfeita.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, apagar',
        cancelButtonText: 'Cancelar',
        background: 'var(--bg-surface)',
        color: 'var(--text-steel)',
        confirmButtonColor: '#ff4444',
        cancelButtonColor: 'transparent',
    }).then((result) => {
        if (result.isConfirmed) {
            let posts = getCommunityPosts();
            posts = posts.filter(p => p.id !== postId);
            saveCommunityPosts(posts);
            renderCommunityFeed();
        }
    });
};

// Editar Resposta
window.editCommunityReply = async function(postId, replyId) {
    const posts = getCommunityPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    const replyIndex = post.replies.findIndex(r => r.id === replyId);
    if (replyIndex === -1) return;
    
    const { value: newText } = await Swal.fire({
        title: 'Editar Comentário',
        input: 'textarea',
        inputValue: post.replies[replyIndex].text,
        inputPlaceholder: 'Escreva seu novo texto aqui...',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Salvar',
        background: 'var(--bg-surface)',
        color: 'var(--text-steel)',
        confirmButtonColor: 'var(--gold-pure)'
    });

    if (newText && newText.trim().length > 0) {
        post.replies[replyIndex].text = newText.trim();
        saveCommunityPosts(posts);
        renderCommunityFeed();
    }
};

// Excluir Resposta
window.deleteCommunityReply = function(postId, replyId) {
    Swal.fire({
        title: 'Apagar Comentário?',
        text: 'Tem certeza que deseja excluir sua resposta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, apagar',
        cancelButtonText: 'Cancelar',
        background: 'var(--bg-surface)',
        color: 'var(--text-steel)',
        confirmButtonColor: '#ff4444'
    }).then((result) => {
        if (result.isConfirmed) {
            const posts = getCommunityPosts();
            const post = posts.find(p => p.id === postId);
            if (post) {
                post.replies = post.replies.filter(r => r.id !== replyId);
                saveCommunityPosts(posts);
                renderCommunityFeed();
            }
        }
    });
};

// Curtir post
window.likeCommunityPost = function(postId) {
    const posts = getCommunityPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes += 1;
        saveCommunityPosts(posts);
        renderCommunityFeed();
    }
};

// Compartilhar post
window.shareCommunityPost = function(postId) {
    const posts = getCommunityPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
        const shareText = `${getTagIcon(post.tag || 'Relato')} ${post.tag || 'Relato'} de ${post.author} sobre o Mente Forjada:\n"${post.text}"\n\nConheça: https://menteforjada.com`;
        navigator.clipboard.writeText(shareText).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Copiado!',
                text: 'Depoimento copiado para a área de transferência.',
                background: 'var(--bg-surface)',
                color: 'var(--text-steel)',
                confirmButtonColor: 'var(--gold-pure)',
                timer: 2000,
                showConfirmButton: false
            });
        });
    }
};

// Enviar para um amigo
window.sendCommunityPostToFriend = function(postId) {
    const posts = getCommunityPosts();
    const post = posts.find(p => p.id === postId);
    if (post) {
        const textToShare = `Olha o ${(post.tag || 'relato').toLowerCase()} que ${post.author} deixou sobre o site Mente Forjada:\n\n"${post.text}"\n\nTô te mandando porque achei que você ia gostar dessa energia boa também! Acesse: https://menteforjada.com`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(textToShare)}`;
        window.open(whatsappUrl, '_blank');
    }
};
