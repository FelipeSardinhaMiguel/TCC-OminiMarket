const products = [
  {
    id: 1,
    name: 'Bicicleta',
    price: 'R$ 219,99',
    description: 'Bicicleta de roda fina.',
    image: '../IMG/veiculo 1.jfif',
    vendedor: 'Micaela Duarte'
  },
  {
    id: 2,
    name: 'Moto',
    price: 'R$ 1.804,99',
    description: 'Motocicleta.',
    image: '../IMG/veiculo 2.jfif',
    vendedor: 'Ricardo Moura'
  },
  {
    id: 3,
    name: 'Patinete',
    price: 'R$ 159,99',
    description: 'Patinete elétrico preto.',
    image: '../IMG/veiculo 3.jfif',
    vendedor: 'Tainá Santana'
  },
  {
    id: 4,
    name: 'Patis Brancos',
    price: 'R$ 198,99',
    description: 'Patins brancos femininnos tamanho 36',
    image: '../IMG/veiculo 4.jfif',
    vendedor: 'Jorge Henrique'
  },
  {
    id: 5,
    name: 'Hoverboard Rosa',
    price: 'R$ 149,99',
    description: 'Hoverboard rosa com 18 horas de bateria.',
    image: '../IMG/veiculo 5.jfif',
    vendedor: 'Adriana Souza'
  },
  {
    id: 6,
    name: 'Bicicleta Rosa',
    price: 'R$ 120,99',
    description: 'Bicicleta pequena rosa infantil.',
    image: '../IMG/veiculo 6.jfif',
    vendedor: 'Pedro Henrique'
  },
  {
    id: 7,
    name: 'Carro Jesko',
    price: 'R$ 2.024,99',
    description: 'Carro de luxo Jesko preto.',
    image: '../IMG/veiculo 7.jfif',
    vendedor: 'Carina Barcellos'
  },
  {
    id: 8,
    name: 'Van Branca',
    price: 'R$ 889,99',
    description: 'Van branca modelo 2010.',
    image: '../IMG/veiculo 8.jfif',
    vendedor: 'Rafael Gomes'
  },
  {
    id: 9,
    name: 'Fusca Preto 1981',
    price: 'R$ 1.980,99',
    description: 'Fuscão Preto feito de aço.',
    image: '../IMG/veiculo 9.jfif',
    vendedor: 'Almir Rogério'
  },
  {
    id: 10,
    name: 'Patinete Rosa',
    price: 'R$ 92,99',
    description: 'Patinete rosa infantil.',
    image: '../IMG/veiculo 10.jfif',
    vendedor: 'Marcelo Antunes'
  },
  {
    id: 11,
    name: 'Patins Roxo',
    price: 'R$ 117,99',
    description: 'Patins infantil roxo.',
    image: '../IMG/veiculo 11.jfif',
    vendedor: 'Vivian Serra'
  },
  {
    id: 12,
    name: 'Moto Azul',
    price: 'R$ 1.050,99',
    description: 'Motocicleta Azul modelo 2007.',
    image: '../IMG/veiculo 12.jfif',
    vendedor: 'Thiago Duarte'
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
