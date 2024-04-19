const productData = {
    "pizze": [
        {
            "nome": "Margherita",
            "descrizione": "Pomodoro, mozzarella, basilico fresco",
            "prezzo": "7.50",
            "immagine": "images/margherita.jpg"
        },
        {
            "nome": "Peperoni",
            "descrizione": "Pomodoro, mozzarella, peperoni",
            "prezzo": "8.00",
            "immagine": "images/peperoni.jpg"
        },
        {
            "nome": "sale",
            "descrizione": "Pomodoro, mozzarella, basilico fresco",
            "prezzo": "7.50",
            "immagine": "images/sale.jpg"
        }
    ],
    "bevande": [
        {
            "nome": "Acqua Naturale",
            "descrizione": "Bottiglia da 500ml",
            "prezzo": "1.50",
            "immagine": "images/acqua.jpg"
        }
    ],
    "antipasti": [
        // Aggiungi qui altri antipasti
    ],
    "primi": [
        // Aggiungi qui altri primi piatti
    ],
    "secondi": [
        // Aggiungi qui altri secondi piatti
    ]
};

function showCategoryPage(pageId) {
    // Nascondi tutte le pagine
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Mostra la pagina della categoria richiesta
    document.getElementById(pageId).classList.add('active');
    loadCategory(pageId.replace('Page', ''));
}

function showMainPage() {
    // Nascondi tutte le pagine e mostra la pagina principale
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('mainPage').classList.add('active');
}

function loadCategory(category) {
    const products = productData[category];
    const productContainer = document.getElementById(category + 'Products');
    productContainer.innerHTML = '';  // Pulisci i contenuti precedenti
    products.forEach(product => {
        const card = `<div class="product-card">
                        <img src="${product.immagine}" alt="${product.nome}">
                        <h3>${product.nome}</h3>
                        <p>${product.descrizione}</p>
                        <p><strong>€${product.prezzo}</strong></p>
                      </div>`;
        productContainer.innerHTML += card;
    });
}