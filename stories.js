let currentLang = 'ne';

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        renderStories();
    }, 2600);
};

function renderStories() {
    const grid = document.getElementById('story-grid');
    grid.innerHTML = '';
    
    // stories.js बाट डेटा तान्ने
    storyDatabase[currentLang].forEach(story => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        card.innerHTML = `<h3>${story.title}</h3>`;
        card.onclick = () => openStory(story);
        grid.appendChild(card);
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    document.getElementById('btn-ne').classList.toggle('active', lang === 'ne');
    document.getElementById('btn-hi').classList.toggle('active', lang === 'hi');
    renderStories();
}

function openStory(story) {
    document.getElementById('reader-title').innerText = story.title;
    document.getElementById('reader-text').innerText = story.content;
    document.getElementById('story-reader').classList.remove('hidden');
    window.scrollTo(0,0);
}

function closeStory() {
    document.getElementById('story-reader').classList.add('hidden');
}
