/*document.addEventListener("DOMContentLoaded", () => {
  const subMenus = document.querySelectorAll(".subMenu");

  subMenus.forEach((menu) => {
    const botao = menu.querySelector(".Produtos");
    botao.addEventListener("click", (e) => {
      e.preventDefault(); // evita que o link recarregue a página
      menu.classList.toggle("ativo"); // alterna entre mostrar/esconder

      // opcional: fecha outros submenus quando abrir um
      subMenus.forEach((outro) => {
        if (outro !== menu) {
          outro.classList.remove("ativo");
        }
      });
    });
  });
});*/

const products = [
  {
    id: 1,
    name: 'Tenis Adidas Preto',
    price: 'R$ 209,99',
    description: 'Tênis preto da Adidas para passear',
    image: '../IMG/Adidas preto.jfif'
  },
  {
    id: 2,
    name: '',
    price: 'R$ ,',
    description: '',
    image: ''
  },
  {
    id: 3,
    name: 'Calça Cargo Preta',
    price: 'R$ 54,99',
    description: 'Calça modelo cargo preta unissex',
    image: '../IMG/Calça cargo preta.webp'
  },
  {
    id: 4,
    name: 'Calça Jeans Feminina',
    price: 'R$ 129,99',
    description: 'Calça jeans feminina tamanho 38',
    image: '../IMG/calça jeans feminina.webp'
  },
  {
    id: 5,
    name: 'Calça Cargo preta',
    price: 'R$ 169,99',
    description: 'Calça unissex modelo cargo',
    image: '../IMG/camisa feminina branca.jpg'
  },
  {
    id: 6,
    name: 'Camiseta Feminina Preta',
    price: 'R$ 107,99',
    description: 'Pendrive dourado de 16GB',
    image: '../IMG/camisa feminina preta.jfif'
  },
  {
    id: 7,
    name: '',
    price: 'R$ ,',
    description: '',
    image: ''
  },
  {
    id: 8,
    name: '',
    price: 'R$ ,',
    description: '',
    image: ''
  },
  {
    id: 9,
    name: '',
    price: 'R$ ,',
    description: '',
    image: ''
  },
  {
    id: 10,
    name: '',
    price: 'R$ ,',
    description: '',
    image: ''
  },
  {
    id: 11,
    name: '',
    price: 'R$ ,',
    description: '',
    image: ''
  },
  {
    id: 12,
    name: '',
    price: 'R$ ,',
    description: '',
    image: ''
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
