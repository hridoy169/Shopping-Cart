const products = [
  {
    id: 1,
    title: "Black T Shirt",
    price: 2500,
    img: "https://m.media-amazon.com/images/I/91kMhf-3iDL._AC_UL320_.jpg",
  },
  {
    id: 2,
    title: "Check Shirt",
    price: 3000,
    img: "https://m.media-amazon.com/images/I/A1n3+8uTtzL._AC_UL320_.jpg",
  },
  {
    id: 3,
    title: "White shirt",
    price: 1000,
    img: "https://m.media-amazon.com/images/I/71HPp3rsd6S._AC_UL320_.jpg",
  },
  {
    id: 4,
    title: "Business Dress",
    price: 3000,
    img: "https://m.media-amazon.com/images/I/71pA6tWXD5L._AC_UL320_.jpg",
  },
  {
    id: 5,
    title: "Olive Green",
    price: 2000,
    img: "https://m.media-amazon.com/images/I/71TPXsgWAzS._AC_UL320_.jpg",
  },
  {
    id: 6,
    title: "Dark Red",
    price: 1500,
    img: "https://m.media-amazon.com/images/I/91f1goyFg3L._AC_UL320_.jpg",
  },
  {
    id: 7,
    title: "Long Sleeve",
    price: 1900,
    img: "https://m.media-amazon.com/images/I/A13KEbS4wEL._AC_UL320_.jpg",
  },
  {
    id: 8,
    title: "Polo Shirt",
    price: 1500,
    img: "https://m.media-amazon.com/images/I/61TQ+8GSSLL._AC_UL320_.jpg",
  },
  {
    id: 9,
    title: "Red Polo",
    price: 1800,
    img: "https://m.media-amazon.com/images/I/91lzxitCDcL._AC_UL320_.jpg",
  },
  {
    id: 10,
    title: "Pink Polo",
    price: 1600,
    img: "https://m.media-amazon.com/images/I/61ox-qy49BS._AC_UL320_.jpg",
  },
  {
    id: 11,
    title: "Classic Polo",
    price: 2000,
    img: "https://m.media-amazon.com/images/I/91yTTq8tqtL._AC_UL320_.jpg",
  },
  {
    id: 12,
    title: "Long Sleeve",
    price: 1800,
    img: "https://m.media-amazon.com/images/I/71lpWzZbGPL._AC_UL320_.jpg",
  },
  {
    id: 13,
    title: "Sky Blue",
    price: 1200,
    img: "https://m.media-amazon.com/images/I/81VNea0o3AL._AC_UL320_.jpg",
  },
  {
    id: 14,
    title: "Jeans Shirt",
    price: 1400,
    img: "https://m.media-amazon.com/images/I/A1jriYKpDEL._AC_UL320_.jpg",
  },
  {
    id: 15,
    title: "Polo Ralph",
    price: 3500,
    img: "https://m.media-amazon.com/images/I/816dl-8EL1L._AC_UL320_.jpg",
  },
];

const cart = [];

const removeFromCart = (id) => {
  const foundProductIndex = cart.findIndex((product) => product.id === id);
  cart.splice(foundProductIndex, 1);
  updateCart();
};

const updateCart = () => {
  const cartContainer = document.getElementById("cart-container");
  const totalDiv = Array.from(document.getElementsByClassName("total"));

  const totalPrice = cart.reduce((acc, product) => (acc += product.price), 0);

  totalDiv.forEach((div) => (div.innerHTML = `BDT ${totalPrice}`));

  cartContainer.innerHTML = cart
    .map((product) => {
      return `
          <div class="cart_items">
              <span class="item_img"
                ><img
                  src=${product.img}
                  alt="shirt-3"
                  height="30px"
                  width="30px"
              /></span>
              <span class="item_name">${product.title}</span>
              <span class="item_price">BDT ${product.price}</span>
              <button onclick="removeFromCart(${product.id})" class="item_trash"><i class="fas fa-trash-alt"></i></button>
          </div>
      `;
    })
    .join("");
};

const addToCart = (id) => {
  const foundProduct = products.find((product) => product.id === id);
  cart.push(foundProduct);
  updateCart();
};

const productsContainer = document.getElementById("products");

productsContainer.innerHTML = products
  .map((product) => {
    return `
      <div onclick="addToCart(${product.id})" class="card">
          <img class="card_img" src=${product.img} alt="shirt-1" />
          <div class="card_item">
            <p>${product.title}</p>
          </div>
      </div>
  `;
  })
  .join("");
