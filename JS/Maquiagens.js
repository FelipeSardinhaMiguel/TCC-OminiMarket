const products = [
  {
    id: 1,
    name: 'Pó Compacto',
    price: 'R$ 18,99',
    description: 'Pó compacto para rosto.',
    image: '../IMG/base em po.jfif',
    vendedor: 'Renata Farias'
  },
  {
    id: 2,
    name: 'Base Liquida',
    price: 'R$ 15,99',
    description: 'Base liquida (esponja não inclusa).',
    image: '../IMG/base liquida.webp',
    vendedor: 'João Victor'
  },
  {
    id: 3,
    name: 'Batom Rosa',
    price: 'R$ 18,99',
    description: 'Batom rosa choque da Avon.',
    image: '../IMG/batom avon rosa.jpg',
    vendedor: 'Lívia Pinheiro'
  },
  {
    id: 4,
    name: 'Deliniador.',
    price: 'R$ 20,99',
    description: 'Deliniador fino.',
    image: '../IMG/deliniador fino.png',
    vendedor: 'Sérgio Almeida'
  },
  {
    id: 5,
    name: 'Lápis para Boca',
    price: 'R$ 18,99',
    description: 'Lápis para contorno lábial.',
    image: '../IMG/lapis de olho.png',
    vendedor: 'Nicole Batista'
  },
  {
    id: 6,
    name: 'Pó Compacto',
    price: 'R$ 23,99',
    description: 'Pó compacto para rosto.',
    image: '../IMG/po compacto.jpg',
    vendedor: 'Paulo Roberto'
  },
  {
    id: 7,
    name: 'Gloss',
    price: 'R$ 21,99',
    description: 'Gloss rosa salmão.',
    image: '../IMG/maquiagem 6.jfif',
    vendedor: 'Mirella Couto'
  },
  {
    id: 8,
    name: 'Pincel para Maquiagens',
    price: 'R$ 24,99',
    description: 'Pincel',
    image: '../IMG/maquiagen 1.jfif',
    vendedor: 'André Coelho'
  },
  {
    id: 9,
    name: 'Kit de Esponjas',
    price: 'R$ 27,99',
    description: 'Cinco esponjas com cores diferentes.',
    image: '../IMG/maquiagem 2.jfif',
    vendedor: 'Jéssica Moura'
  },
  {
    id: 10,
    name: 'Gliter',
    price: 'R$ 19,99',
    description: 'Gliter para maquiagem no rosto.',
    image: '../IMG/maquiagem 3.jfif',
    vendedor: 'Breno Carvalho'
  },
  {
    id: 11,
    name: 'Lápis de Olho',
    price: 'R$ 20,99',
    description: 'Lápis para contorno dos olhos.',
    image: '../IMG/maquiagem 4.jfif',
    vendedor: 'Samara Rezende'
  },
  {
    id: 12,
    name: 'Bolsa para Maquiagens',
    price: 'R$ 34,99',
    description: 'Bolsa de Maquiagem grande preta.',
    image: '../IMG/maquiagem 5.jfif',
    vendedor: 'Eduardo Santana'
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
