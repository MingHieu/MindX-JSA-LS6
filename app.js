const data = [
  {
    src: "assets/images/brown-shirt.jpeg",
    name: "Áo Thun Basic Kem - ATBD Kem",
    price: "171,100đ",
  },
  {
    src: "assets/images/dark-green-shirt.jpeg",
    name: "Áo Thun Basic Xanh Rêu - ATBD Xanh Rêu",
    price: "171,100đ",
  },
  {
    src: "assets/images/red-shirt.jpeg",
    name: "Áo Thun Basic Đỏ - ATBD Đỏ",
    price: "171,100đ",
  },
  {
    src: "assets/images/white-shirt.jpeg",
    name: "Áo Thun Basic Trắng - ATBD Trắng",
    price: "171,100đ",
  },
];

function render() {
  const appProduct = document.querySelector(".app-product");
  appProduct.innerHTML = "";
  for (let x of data) {
    appProduct.innerHTML += `
        <div class="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
            <div class="product" data-product-id="${data.indexOf(x)}" >
                <img src="${x.src}" alt="" width="100%">
                <div class="product-body">
                    <h5 class="product-name">${x.name}</h5>
                    <p class="product-price">${x.price}</p>
                </div>
                <button class="product-button" data-product-id="${data.indexOf(
                  x
                )}" >Add to cart</button>
            </div>
        </div>`;
  }
}
render();

let getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart === null || cart === undefined) {
    cart = [];
  }
  return cart;
};

let renderCart = () => {
  let cart = getCart();
  const cartNumber = document.querySelector(".cart-number");
  if (cart.length) {
    cartNumber.style.display = "block";
    cartNumber.innerHTML = cart.length;
  } else {
    cartNumber.style.display = "none";
  }
  let cartDom = document.querySelector(".cart");
  cartDom.innerHTML = "";
  for (let x of cart) {
    cartDom.innerHTML += `
    <div class="cart-product">
      <div class="cart-product-preview">
          <img src="${x.src}" alt="" width="100%">
      </div>
      <div class="cart-product-body">
          <h5 class="cart-product-name">${x.name}</h5>
          <p class="cart-product-price">${x.price}</p>
      </div>
    </div>
    `;
  }
  let cartContainer = document.querySelector(".cart-container");
  cartContainer.onclick = (e) => {
    if (e.target == cartContainer) {
      cartDom.style.transform = "translateX(100%)";
      setTimeout(() => {
        cartContainer.style.display = "none";
      }, 300);
    }
  };
  let showCartBtn = document.querySelector(".cart-icon-wrapper");
  showCartBtn.onclick = () => {
    cartContainer.style.display = "block";
    setTimeout(() => {
      cartDom.style.transform = "translateX(0)";
    }, 1);
  };
};
renderCart();

let saveItem = () => {
  const addToCartBtn = document.querySelectorAll(".product-button");
  for (let x of addToCartBtn) {
    x.onclick = () => {
      const productId = x.getAttribute("data-product-id");
      const product = data[productId];
      let cart = getCart();
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    };
  }
};
saveItem();
