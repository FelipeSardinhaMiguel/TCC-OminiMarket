const products = [
  {
    id: 1,
    name: '',
    price: 'R$ 1,00',
    description: 'Brigadeiros, um real cada.',
    image: '../IMG/comida 1.jfif',
    vendedor: 'Júlia Assis'
  },
  {
    id: 2,
    name: 'Bolos Personalizados.',
    price: 'R$ 67,99',
    description: 'Peça já seu próprio bolo.',
    image: '../IMG/comida 2.jfif',
    vendedor: 'Eduardo Magalhães'
  },
  {
    id: 3,
    name: 'Coxinhas',
    price: 'R$ 7,00',
    description: 'Salgados encomendados.',
    image: '../IMG/comida 3.jfif',
    vendedor: 'Amanda Torres'
  },
  {
    id: 4,
    name: 'Pizzas',
    price: 'R$ 38,69',
    description: 'Pizzas com os melhores e mais exóticos sabores.',
    image: '../IMG/comida 4.jfif',
    vendedor: 'Pará Lanches'
  },
  {
    id: 5,
    name: 'X - Bacon',
    price: 'R$ 28,99',
    description: 'Lanches caseiros e deliciosos.',
    image: '../IMG/comida 5.jfif',
    vendedor: 'Sabrina Burguers'
  },
  {
    id: 6,
    name: 'Pães Franceses',
    price: 'R$ 8,00',
    description: 'Pães franceses, oito reais cada.',
    image: '../IMG/comida 6.jfif',
    vendedor: 'Padaria Fábio Araújo'
  },
  {
    id: 7,
    name: 'Potes de Açaí',
    price: 'R$ 27,99',
    description: 'Potes pequenos, médios e grandes de açaí.',
    image: '../IMG/comida 7.jfif',
    vendedor: 'Rayssa Figueiredo'
  },
  {
    id: 8,
    name: 'Esfihas Abertas',
    price: 'R$ 0,99',
    description: 'Esfihas abertas por 99 centavos cada, sabores de carne, queijo, escarola, frango, etc',
    image: '../IMG/comida 8.jfif',
    vendedor: 'Maurício Campos'
  },
  {
    id: 9,
    name: 'Pastéis e Caldo de Cana',
    price: 'R$ 16,99',
    description: 'Vendo pastéis e caldo de cana.',
    image: '../IMG/comida 9.jfif',
    vendedor: 'Manuella Pereira'
  },
  {
    id: 10,
    name: 'Macarons',
    price: 'R$ 14,99',
    description: 'Macarons recheados',
    image: '../IMG/comida 10.jfif',
    vendedor: 'Daniel Correia'
  },
  {
    id: 11,
    name: 'Churros',
    price: 'R$ 11,99',
    description: 'Churros de variados sabores.',
    image: '../IMG/comida 11.jfif',
    vendedor: 'Yasmim Costa'
  },
  {
    id: 12,
    name: 'Frango Assado',
    price: 'R$ 49,99',
    description: 'Frango assaso com batata assada e farofa.',
    image: '../IMG/comida 12.jfif',
    vendedor: 'Gustavo Neri'
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
