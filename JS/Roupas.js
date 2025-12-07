const products = [
  {
    id: 1,
    name: 'Tenis Adidas Preto',
    price: 'R$ 209,99',
    description: 'Tênis preto da Adidas para passear',
    image: '../IMG/Adidas preto.jfif',
    vendedor: 'Ana Beatriz'
  },
  {
    id: 2,
    name: 'Tenis All Stars',
    price: 'R$ 59,99',
    description: 'Tenis All Stars tamanho 38',
    image: '../IMG/All Stars cano baixo.jfif',
    vendedor: 'Lucas Ferreira'
  },
  {
    id: 3,
    name: 'Calça Cargo Preta',
    price: 'R$ 54,99',
    description: 'Calça modelo cargo preta unissex',
    image: '../IMG/Calça cargo preta.webp',
    vendedor: 'João Pedro'
  },
  {
    id: 4,
    name: 'Calça Jeans Feminina',
    price: 'R$ 129,99',
    description: 'Calça jeans feminina tamanho 38',
    image: '../IMG/calça jeans feminina.webp',
    vendedor: 'Mariana Oliveira'
  },
  {
    id: 5,
    name: 'Calça Cargo preta',
    price: 'R$ 169,99',
    description: 'Calça unissex modelo cargo',
    image: '../IMG/camisa feminina branca.jpg',
    vendedor: 'Lucas Gabriel'
  },
  {
    id: 6,
    name: 'Camiseta Feminina Preta',
    price: 'R$ 107,99',
    description: 'Pendrive dourado de 16GB',
    image: '../IMG/camisa feminina preta.jfif',
    vendedor: 'Camila Ferreira'
  },
  {
    id: 7,
    name: 'Cartola Preta',
    price: 'R$ 89,99',
    description: 'Cartola de veludo preta',
    image: '../IMG/cartola.png',
    vendedor: 'Gustavo Andrade'
  },
  {
    id: 8,
    name: 'Camisa Minecraft',
    price: 'R$ 54,99',
    description: 'Camisa infantil Minecraft tamanho p',
    image: '../IMG/camisa infantil mine.webp',
    vendedor: 'Rafael Souza'
  },
  {
    id: 9,
    name: 'Camiseta Marrom',
    price: 'R$ 119,99',
    description: 'Camiseta marrom tamanho M',
    image: '../IMG/camisa lisa bege masculina.jfif',
    vendedor: 'Letícia Mendes'
  },
  {
    id: 10,
    name: 'Camiseta Preta',
    price: 'R$ 99,99',
    description: 'Camiseta oversize preta',
    image: '../IMG/camiseta_basic_color_preto.webp',
    vendedor: 'Bruno Albuquerque'
  },
  {
    id: 11,
    name: 'Sapato Social',
    price: 'R$ 89,99',
    description: 'Sapato social tamanho 40 preto',
    image: '../IMG/sapato masculino.jpg',
    vendedor: 'Vitória Santos'
  },
  {
    id: 12,
    name: 'Calça Jeans Clara',
    price: 'R$ 169,99',
    description: 'Calça jeans clara masculina',
    image: '../IMG/calça masculina.jfif',
    vendedor: 'Guilherme Duarte'
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
