// Default language
let currentLanguage = en;

// Function to set language based on selected value
function setLanguage(language) {
    localStorage.setItem('language', language);
    document.body.setAttribute('dir', language === 'ar' || language === 'ur' ? 'rtl' : 'ltr');

    // Update the selected language for both selectors
    document.querySelectorAll('.language-select').forEach(select => {
        select.value = language;
    });

    // Set the language object
    switch (language) {
        case 'en':
            currentLanguage = en;
            break;
        case 'ar':
            currentLanguage = ar;
            break;
        case 'hi':
            currentLanguage = hi;
            break;
        case 'ur':
            currentLanguage = ur;
            break;
    }
    updateText();
}

// Function to update the text on the page
function updateText() {
    document.querySelector('.home').textContent = currentLanguage.home;
    document.querySelector('.about').textContent = currentLanguage.about;
    document.querySelector('.product').textContent = currentLanguage.product;
    document.querySelector('.article').textContent = currentLanguage.article;
    document.querySelector('.contact').textContent = currentLanguage.contact;
}

// Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
});
