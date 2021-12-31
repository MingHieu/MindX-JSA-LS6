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

const appProduct = document.querySelector(".app-product");
function render() {
  appProduct.innerHTML = "";
  for (let x of data) {
    appProduct.innerHTML += `
        <div class="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
            <div class="product">
                <img src="${x.src}" alt="">
                <div class="product-body">
                    <h5 class="product-name">${x.name}</h5>
                    <p class="product-price">${x.price}</p>
                </div>
            </div>
        </div>`;
  }
}
render();

let cart;
let keys = Object.keys(localStorage);
if (keys.indexOf("cart") != -1) {
  cart = JSON.parse(localStorage.getItem("cart"));
} else {
  cart = [];
}
const cartNumber = document.querySelector(".cart-number");
if (cart.length) {
  cartNumber.style.display = "block";
  cartNumber.innerHTML = cart.length;
} else {
  cartNumber.style.display = "none";
}

const products = document.querySelectorAll(".product");
for (let x of products) {
  x.onclick = () => {
    const product = {
      src: "",
      name: "",
      price: "",
    };
    product.src = x.children[0].attributes[0].value;
    product.name = x.children[1].children[0].innerHTML;
    product.price = x.children[1].children[1].innerHTML;
    localStorage.setItem("product", JSON.stringify(product));
    window.location.href = "./product";
  };
}
