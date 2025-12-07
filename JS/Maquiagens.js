const products = [
  {
    id: 1,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/base em po.jfif'
  },
  {
    id: 2,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/base liquida.webp'
  },
  {
    id: 3,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/batom avon rosa.jpg'
  },
  {
    id: 4,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/deliniador fino.png'
  },
  {
    id: 5,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/lapis de olho.png'
  },
  {
    id: 6,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/po compacto.jpg'
  },
  {
    id: 7,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/gloss.jgp'
  },
  {
    id: 8,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/'
  },
  {
    id: 9,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/'
  },
  {
    id: 10,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/'
  },
  {
    id: 11,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/'
  },
  {
    id: 12,
    name: '',
    price: 'R$ 00,00',
    description: '',
    image: '../IMG/'
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
