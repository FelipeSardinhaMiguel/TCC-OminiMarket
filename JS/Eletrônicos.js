const products = [
  {
    id: 1,
    name: 'Alexia',
    price: 'R$ 89,99',
    description: 'Assistente virtual em formato de bola.',
    image: '../IMG/alexia bola.jfif',
    vendedor: 'Thiago Pires'
  },
  {
    id: 2,
    name: 'Caixa de Som',
    price: 'R$ 119,99',
    description: 'Caixa de som grande.',
    image: '../IMG/caixa de som.webp',
    vendedor: 'Nicole Araújo'
  },
  {
    id: 3,
    name: 'Camera de Segurança',
    price: 'R$ 109,99',
    description: 'Camera de segurança residencial.',
    image: '../IMG/camera de segurança.jfif',
    vendedor: 'Vinícius Ramos'
  },
  {
    id: 4,
    name: 'Camêra Fotografica',
    price: 'R$ 68,99',
    description: 'Camera fotografica.',
    image: '../IMG/camera fotografica.jpg',
    vendedor: 'Eduarda Fagundes'
  },
  {
    id: 5,
    name: 'Celular Xaiomi',
    price: 'R$ 120,99',
    description: 'Celular Xaiomi semi-usado.',
    image: '../IMG/celular xaiomi.webp',
    vendedor: 'Leonardo Fonseca'
  },
  {
    id: 6,
    name: 'Impressora',
    price: 'R$ 349,99',
    description: 'Impressora da marca HG. Impresso~es em alta qualidade.',
    image: '../IMG/impressora.jfif',
    vendedor: 'Juliana Guimarães'
  },
  {
    id: 7,
    name: 'Mesa Digitalizadora',
    price: 'R$ 159,99',
    description: 'Mesa digitalizadora (caneta e luvinha incluso).',
    image: '../IMG/mesa digitalizadora.jpg',
    vendedor: 'Marcelo Brito'
  },
  {
    id: 8,
    name: 'Notebook Vaio',
    price: 'R$ 226,99',
    description: 'Notebook Vaio com 256GB.',
    image: '../IMG/notebook vaio.jpg',
    vendedor: 'Aline Costa'
  },
  {
    id: 9,
    name: 'Mouse Gamer Branco',
    price: 'R$ 39,99',
    description: 'Mouse gamer branco bluetooth.',
    image: '../IMG/mouse gamer branco.jfif',
    vendedor: 'Rodrigo Tavares'
  },
  {
    id: 10,
    name: 'Pendrive Kingston',
    price: 'R$ 27,99',
    description: 'Pendrive dourado de 16GB.',
    image: '../IMG/pendrive kingston 64.jfif',
    vendedor: 'Ludmila Costa Albuquerque'
  },
  {
    id: 11,
    name: 'PlayStation 4',
    price: 'R$ 339,99',
    description: 'Playstation 4 (dois jogos incluso).',
    image: '../IMG/ps4.jfif',
    vendedor: 'Alexandre Paiva'
  },
  {
    id: 12,
    name: 'Caixinha de Som JBL',
    price: 'R$ 19,99',
    description: 'Caixinha de som JBL.',
    image: '../IMG/caixinha jbl.jfif',
    vendedor: 'Cecília Medeiros'
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
      <div class="product-,
      vendedor: ''i,
      vendedor: ''nfo">
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
