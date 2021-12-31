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
