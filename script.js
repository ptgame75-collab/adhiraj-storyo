// Loading Logic मा सुधार
window.addEventListener('DOMContentLoaded', () => {
    console.log("App checking files...");
    
    // यदि २.६ सेकेन्ड पछि पनि लोडिङ स्क्रिन हटेन भने जबरजस्ती हटाउने
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        const app = document.getElementById('app');
        
        if(loader) loader.classList.add('hidden');
        if(app) app.classList.remove('hidden');
        
        // कथाहरू लोड गर्ने प्रयास गर्ने
        if (typeof renderList === "function") {
            renderList();
        } else {
            console.error("renderList function not found! Check stories.js");
        }
    }, 2600);
});
