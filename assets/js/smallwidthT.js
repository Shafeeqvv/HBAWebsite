document.addEventListener('DOMContentLoaded', function() {
    const languageSelects = document.querySelectorAll('select[aria-label="Select Language"]');

    // Function to switch language based on selection
    function switchLanguage(lang) {
        // Example translation content
        const translations = {
            en: {
                home: 'Home',
                about: 'About HBA',
                products: 'Products',
                articles: 'Articles & Advertisement',
                contact: 'Contact'
            },
            hi: {
                home: 'मुख पृष्ठ',
                about: 'एचबीए के बारे में',
                products: 'उत्पाद',
                articles: 'लेख और विज्ञापन',
                contact: 'संपर्क करें'
            },
            ar: {
                home: 'الرئيسية',
                about: 'عن HBA',
                products: 'المنتجات',
                articles: 'المقالات والإعلانات',
                contact: 'تواصل'
            },
            ur: {
                home: 'ہوم',
                about: 'ایچ بی اے کے بارے میں',
                products: 'مصنوعات',
                articles: 'مضامین اور اشتہارات',
                contact: 'رابطہ کریں'
            }
        };

        // Updating menu items with the selected language translations
        document.querySelectorAll('nav ul li a').forEach((item, index) => {
            const keys = ['home', 'about', 'products', 'articles', 'contact'];
            item.textContent = translations[lang][keys[index]];
        });
    }

    // Attach event listeners to all language selects
    languageSelects.forEach(select => {
        select.addEventListener('change', function() {
            const selectedLanguage = this.value;
            switchLanguage(selectedLanguage);
        });
    });
});
