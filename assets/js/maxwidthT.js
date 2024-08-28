const translations = {
    En: {
        home: "Home",
        about: "About HBA",
        products: "Products",
        contact: "Contact"
    },
    Ar: {
        home: "الصفحة الرئيسية",
        about: "حول  HBA",
        products: "المنتجات",
        contact: "اتصل"
    },
    Hi: {
        home: "होम",
        about: "HBA के बारे में",
        products: "उत्पाद",
        contact: "संपर्क करें"
    },
    Ur: {
        home: "ہوم",
        about: "HBA کے بارے میں",
        products: "مصنوعات",
        contact: "رابطہ کریں"
    }
};

document.querySelector('.language').addEventListener('change', function() {
    const selectedLanguage = this.value;

    // Translate the text content based on the selected language
    document.querySelectorAll('[data-translate]').forEach(function(element) {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[selectedLanguage][key];
    });
});

// Optional: Automatically translate based on the default selection
document.querySelector('.language').dispatchEvent(new Event('change'));
