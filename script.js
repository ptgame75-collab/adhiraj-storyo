let currentLang = 'ne';
let currentFontSize = 18;

// Loading logic
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        renderList();
    }, 2600);
});

function renderList() {
    const grid = document.getElementById('story-grid');
    grid.innerHTML = '';
    storyDatabase[currentLang].forEach(story => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        card.innerHTML = `<h3>${story.title}</h3>`;
        card.onclick = () => openStory(story);
        grid.appendChild(card);
    });
}

function openStory(story) {
    document.getElementById('story-title').innerText = story.title;
    document.getElementById('story-text').innerText = story.content;
    document.getElementById('story-text').style.fontSize = currentFontSize + 'px';
    document.getElementById('story-reader').classList.add('open');
}

function closeStory() {
    document.getElementById('story-reader').classList.remove('open');
}

function switchLanguage(lang) {
    currentLang = lang;
    document.getElementById('btn-ne').classList.toggle('active', lang === 'ne');
    document.getElementById('btn-hi').classList.toggle('active', lang === 'hi');
    renderList();
}

function changeFontSize(size) {
    currentFontSize += size;
    document.getElementById('story-text').style.fontSize = currentFontSize + 'px';
}

document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
};
