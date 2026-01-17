let currentLang = 'ne';

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        loadList();
    }, 2600);
};

function loadList() {
    const grid = document.getElementById('story-grid');
    grid.innerHTML = '';
    stories[currentLang].forEach(s => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        card.innerHTML = `<h3>${s.title}</h3>`;
        card.onclick = () => {
            document.getElementById('r-title').innerText = s.title;
            document.getElementById('r-body').innerText = s.content;
            document.getElementById('reader').classList.add('open');
        };
        grid.appendChild(card);
    });
}

function setLang(l) {
    currentLang = l;
    document.getElementById('tab-ne').classList.toggle('active', l==='ne');
    document.getElementById('tab-hi').classList.toggle('active', l==='hi');
    loadList();
}

function closeStory() { document.getElementById('reader').classList.remove('open'); }

// --- Install Application Feature ---
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.createElement('button');
    installBtn.innerText = "📲 App Install गर्नुहोस्";
    installBtn.style = "position:fixed; bottom:20px; left:50%; transform:translateX(-50%); z-index:5000; background:black; color:white; padding:10px 20px; border-radius:50px; border:none;";
    document.body.appendChild(installBtn);

    installBtn.onclick = () => {
        deferredPrompt.prompt();
        installBtn.remove();
    };
});
