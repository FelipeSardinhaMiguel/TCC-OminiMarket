const products = [
  {
    id: 1,
    name: 'Brinco Azul',
    price: 'R$ 22,99',
    description: 'Brinco com perolas verde água',
    image: '../IMG/brinco azul.jpg',
    vendedor: 'Bianca Carvalho'
  },
  {
    id: 2,
    name: 'Brincos com Esmeralda',
    price: 'R$ 29,99',
    description: 'Brincos com esmeraldas em formatos ovais.',
    image: '../IMG/brinco comprido verde.jpg',
    vendedor: 'Felipe Martins'
  },
  {
    id: 3,
    name: 'Brincos Corujas',
    price: 'R$ 25,99',
    description: 'Brincos em formato de corujas com olhos roxos.',
    image: '../IMG/brinco coruja.jpeg',
    vendedor: 'Juliana Alves'
  },
  {
    id: 4,
    name: 'Brincos Três Corações',
    price: 'R$ 19,99',
    description: 'Brinco pequenos em formatos de três corações ',
    image: '../IMG/brinco tres coracoes.webp',
    vendedor: 'Matheus Rocha'
  },
  {
    id: 5,
    name: 'Colar Colorido',
    price: 'R$ 129,99',
    description: 'Colar feminino com joias variadas e coloridas.',
    image: '../IMG/colar colorido.webp',
    vendedor: 'Chico Roberto de Almeida'
  },
  {
    id: 6,
    name: 'Colar Coração Colorido',
    price: 'R$ 59,99',
    description: 'Colar feminino em formato de coração colorido.',
    image: '../IMG/colar coracao colorido.jpg',
    vendedor: 'Daniela Cardoso'
  },
  {
    id: 7,
    name: 'Corrente Masculina',
    price: 'R$ 44,99',
    description: 'Corrente masculina.',
    image: '../IMG/colar-corrente-masculina.webp',
    vendedor: 'André Luiz'
  },
  {
    id: 8,
    name: 'Colar Masculino com Cruz',
    price: 'R$ 19,99',
    description: 'Colar com cruz masculina.',
    image: '../IMG/colar cruz masculino.jfif',
    vendedor: 'Larissa Lima'
  },
  {
    id: 9,
    name: 'Brincos Masculinos',
    price: 'R$ 36,99',
    description: 'Brincos Masculinos.',
    image: '../IMG/brinco masculino.webp',
    vendedor: 'Diego Moreira'
  },
  {
    id: 10,
    name: 'Corrente de Prata',
    price: 'R$ 49,99',
    description: 'Corrente masculina prateada.',
    image: '../IMG/pulseira masculina.jfif',
    vendedor: 'Rafaela Monteiro'
  },
  {
    id: 11,
    name: 'Oculos Escuros',
    price: 'R$ 22,99',
    description: 'Oculos Escuros.',
    image: '../IMG/oculos escuros.jfif',
    vendedor: 'Henrique Barbosa'
  },
  {
    id: 12,
    name: 'Aneis Vikings',
    price: 'R$ 54,99',
    description: 'Três anéis com gravuras nórdicas.',
    image: '../IMG/kit anel viking.jpg',
    vendedor: 'Isabel Cristina'
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
