const products = [
  {
    id: 1,
    name: 'Tabuleiro de Xadrez',
    price: 'R$ 34,99',
    description: 'Tabuleiro de xadrez com peças de madeira maciça.',
    image: '../IMG/xadrez.jfif',
    vendedor: 'Renato Vasconcelos'
  },
  {
    id: 2,
    name: 'Microfone para Lapela',
    price: 'R$ 30,00',
    description: 'Microfone de plástico do Silvio Santos.',
    image: '../IMG/microfone do silvio.webp',
    vendedor: 'Rafaella Teles'
  },
  {
    id: 3,
    name: 'Funko Pop BMO',
    price: 'R$ 34,99',
    description: 'Boneco Funko Pop BMO de Hora de Aventura.',
    image: '../IMG/brinquedo 12.jfif',
    vendedor: 'Rodrigo Menezes'
  },
  {
    id: 4,
    name: 'Trem de Brinquedo',
    price: 'R$ 44,99',
    description: 'Ferrovia de brinquedo (2 metros de trilho).',
    image: '../IMG/brinquedo 8.jfif',
    vendedor: 'Stéfany Lima'
  },
  {
    id: 5,
    name: 'Dinossauro T-Rex',
    price: 'R$ 18,99',
    description: 'Dinossauro T-Rex de plástico.',
    image: '../IMG/brinquedo 7.jfif',
    vendedor: 'Luiz Fernando'
  },
  {
    id: 6,
    name: 'Boneco Steve',
    price: 'R$ 42,99',
    description: 'Boneco articulado Steve do Minecraft.',
    image: '../IMG/brinquedo 2.jfif',
    vendedor: 'Priscila Braga'
  },
  {
    id: 7,
    name: 'Usinho Pelúcia',
    price: 'R$ 29,99',
    description: 'Ursinho de pelúcia com coração.',
    image: '../IMG/brinquedo 10.jfif',
    vendedor: 'Caio Henrique'
  },
  {
    id: 8,
    name: 'Casa de Boneca',
    price: 'R$ 45,00',
    description: 'Casa da Barbie.',
    image: '../IMG/brinquedo 3.jfif',
    vendedor: 'Márcia Vasconcellos'
  },
  {
    id: 9,
    name: 'Pop It',
    price: 'R$ 18,99',
    description: 'Pop It colorido.',
    image: '../IMG/brinquedo 11.jfif',
    vendedor: 'Igor Ribeiro'
  },
  {
    id: 10,
    name: 'Bola de futebol',
    price: 'R$ 19,99',
    description: '',
    image: '../IMG/brinquedo 9.jfif',
    vendedor: 'Caroline Duarte'
  },
  {
    id: 11,
    name: 'Carrinho de Brinquedo',
    price: 'R$ 19,99',
    description: 'Carrinho vermelho grande.',
    image: '../IMG/brinquedo 6.jfif',
    vendedor: 'Fabio Teixeira'
  },
  {
    id: 12,
    name: 'Balde de Praia',
    price: 'R$ 33,99',
    description: 'Balde de brinquedo com ferramentas e formas.',
    image: '../IMG/brinquedo 5.jfif',
    vendedor: 'Estela Araújo'
  }
];

/*=====================================================================================================*/
/*Avaliações dos produtos*/
const reviews = [
  {
    id: 1,
    product: 'Tênis Adidas - ADI2099',
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
