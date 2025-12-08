const products = [
  {
    id: 1,
    name: 'Cadeira Gamer',
    price: 'R$ 37,99',
    description: 'Cadeira gamer branca reclinável.',
    image: '../IMG/cadeira gamer fox.webp',
    vendedor: 'Fernando Pontes'
  },
  {
    id: 2,
    name: 'Mesa de jantar',
    price: 'R$ 129,99',
    description: 'Mesa de jantar grande de 8 pessoas.',
    image: '../IMG/mesa de jantar italia.jpg',
    vendedor: 'Bruna Ribeiro'
  },
  {
    id: 3,
    name: 'Poltrona',
    price: 'R$ 129,99',
    description: 'Poltrona de sala na cor creme.',
    image: '../IMG/poltrona.jfif',
    vendedor: 'Caio César'
  },
  {
    id: 4,
    name: 'Sofá de veludo',
    price: 'R$ 158,99',
    description: 'Sofá de veludo cinza três acentos.',
    image: '../IMG/sofa veludo cinza.jfif',
    vendedor: 'Nathalia Queiroz'
  },
  {
    id: 5,
    name: 'Gabinete Pequeno de Banheiro',
    price: 'R$ 144,99',
    description: 'Gabinete para banheiro.',
    image: '../IMG/gabinete banheiro.jfif',
    vendedor: 'Everton Silva'
  },
  {
    id: 6,
    name: 'Espelho de Banheiro',
    price: 'R$ 68,99',
    description: 'Espelo redondo para banheiro.',
    image: '../IMG/espelho banheiro.jfif',
    vendedor: 'Elisa Fernandes'
  },
  {
    id: 7,
    name: 'Espelho para Corredor',
    price: 'R$ 122,99',
    description: 'Espelho grande reto para corredor e quartos.',
    image: '../IMG/espelho corredor.jfif',
    vendedor: 'Igor Macedo'
  },
  {
    id: 8,
    name: 'Baú de madeira',
    price: 'R$ 99,99',
    description: 'Baú de madeira 220cm X 90cm.',
    image: '../IMG/bau de quarto.jfif',
    vendedor: 'Paola Andrade'
  },
  {
    id: 9,
    name: 'Cama Box',
    price: 'R$ 195,99',
    description: 'Cama box de solteiro.',
    image: '../IMG/cama box.jfif',
    vendedor: 'Samuel Teixeira'
  },
  {
    id: 10,
    name: 'Abajur de Quarto',
    price: 'R$ 120,99',
    description: 'Abajur de modelo antigo para quartos.',
    image: '../IMG/abajur.jfif',
    vendedor: 'Helena Barros'
  },
  {
    id: 11,
    name: 'Mesinha de Quato',
    price: 'R$ 104,99',
    description: 'Mesinha para quartos.',
    image: '../IMG/mesinha de canto.jfif',
    vendedor: 'Renato Dias'
  },
  {
    id: 12,
    name: 'Ventilador Arno',
    price: 'R$ 129,99',
    description: 'Ventilador Arno de seis palhetas.',
    image: '../IMG/ventilador arno.jfif',
    vendedor: 'Júlia Assis'
  }
];

/*=====================================================================================================*/
/*Avaliações dos produtos*/
const reviews = [
  {
    id: 1,
    product: 'Tênis Adidas - ADI2000',
    rating: 5,
    comment: 'Ótimo tênis, serve bem muito confortável',
    reviewer: 'Fernando Henrique',
    date: '28/10/2025',
    avatar: 'FH'
  },
  {
    id: 2,
    product: 'Sofá Retrátil',
    rating: 4,
    comment: 'Chegou antes do prazo estipulado',
    reviewer: 'Renata Souza',
    date: '19/09/2024',
    avatar: 'RS'
  },
  {
    id: 3,
    product: 'Galinha de Estante',
    rating: 5,
    comment: 'Ficou muito bonita, gostei demais',
    reviewer: 'Pedro Carlos',
    date: '05/03/2025',
    avatar: 'PC'
  }
];

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <div class="product-price">${product.price}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-vendedor">${product.vendedor}</div>
      </div>
    `;

    productCard.addEventListener('click', () => {
      alert(`Você clicou em: ${product.name}\nPreço: ${product.price}`);
    });

    productsGrid.appendChild(productCard);
  });
}

function renderReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');

  reviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';

    const starsHTML = Array(5).fill(0).map((_, index) =>
      `<span class="star ${index < review.rating ? '' : 'empty'}">★</span>`
    ).join('');

    reviewCard.innerHTML = `
      <div class="review-stars">
        ${starsHTML}
      </div>
      <div class="review-title">${review.product}</div>
      <div class="review-text">${review.comment}</div>
      <div class="reviewer-info">
        <div class="reviewer-avatar">${review.avatar}</div>
        <div class="reviewer-details">
          <div class="reviewer-name">${review.reviewer}</div>
          <div class="review-date">${review.date}</div>
        </div>
      </div>
    `;

    reviewsGrid.appendChild(reviewCard);
  });
}

function setupSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
      alert('Por favor, digite algo para buscar');
      return;
    }

    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );

    if (results.length > 0) {
      const resultNames = results.map(p => p.name).join('\n');
      alert(`Encontramos ${results.length} produto(s):\n\n${resultNames}`);
    } else {
      alert('Nenhum produto encontrado para sua busca.');
    }

    searchInput.value = '';
  }

  searchBtn.addEventListener('click', performSearch);

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderReviews();
  setupSearch();

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.textContent;
      alert(`Você selecionou a categoria: ${category}`);
    });
  });

  const btnLogin = document.querySelector('.btn-login');
  const btnRegister = document.querySelector('.btn-register');

  btnLogin.addEventListener('click', () => {
    alert('Funcionalidade de Login em desenvolvimento');
  });

  btnRegister.addEventListener('click', () => {
    alert('Funcionalidade de Cadastro em desenvolvimento');
  });

  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
