const searchInput = document.querySelector("#search");
const productsDom = document.querySelector(".products-center");
const btns = document.querySelectorAll(".btn");
let allProductsdata = [
	{
		id: 1,
		title: "watch product",
		class: "watch",
		price: 10.99,
		image: "./assets/image/watch_1.jpg",
	},
	{
		id: 2,
		title: "watch product",
		class: "watch",
		price: 14.99,
		image: "./assets/image/watch_2.jpg",
	},
	{
		id: 3,
		title: "watch product",
		class: "watch",
		price: 7.99,
		image: "./assets/image/watch_3.jpg",
	},
	{
		id: 4,
		title: "shirt product",
		class: "shirt",
		price: 16.99,
		image: "./assets/image/shirt_1.jpg",
	},
	{
		id: 5,
		title: "shirt product",
		class: "shirt",
		price: 23.99,
		image: "./assets/image/shirt_2.jpg",
	},
	{
		id: 6,
		title: "shirt product",
		class: "shirt",
		price: 21.99,
		image: "./assets/image/shirt_3.jpg",
	},
	{
		id: 7,
		title: "gown product",
		class: "gown",
		price: 21.99,
		image: "./assets/image/gown_1.jpg",
	},
	{
		id: 8,
		title: "gown product",
		class: "gown",
		price: 21.99,
		image: "./assets/image/gown_2.jpg",
	},
	{
		id: 9,
		title: "gown product",
		class: "gown",
		price: 21.99,
		image: "./assets/image/gown_3.jpg",
	},
	{
		id: 10,
		title: "jewelry product",
		class: "jewelry",
		price: 21.99,
		image: "./assets/image/jewelry_1.jpg",
	},
	{
		id: 11,
		title: "jewelry product",
		class: "jewelry",
		price: 21.99,
		image: "./assets/image/jewelry_2.jpg",
	},
	{
		id: 12,
		title: "jewelry product",
		class: "jewelry",
		price: 21.99,
		image: "./assets/image/jewelry_3.jpg",
	},
];

const filters = {
	searchItems: "",
};

document.addEventListener("DOMContentLoaded", () => {
	renderProducts(allProductsdata, filters);
});

function renderProducts(_products, _filters) {
	const filteredProducts = _products.filter((p) => {
		return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
	});
	productsDom.innerHTML = "";
	filteredProducts.forEach((item, index) => {
		const productsDiv = document.createElement("div");
		productsDiv.classList.add("product");
		productsDiv.innerHTML = `   
     <div class="img-container">
    <img src=${item.image} width="300px" height="300px"   alt="p-${index}" />
  </div>
  <div class="product-desc">
    <p class="product-price">${item.price} $</p>
    <p class="product-title">${item.title}</p>`;

		productsDom.appendChild(productsDiv);
	});
}

searchInput.addEventListener("input", (e) => {
	filters.searchItems = e.target.value;
	renderProducts(allProductsdata, filters);
});

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const filter = e.target.dataset.filter;

		filters.searchItems = filter;
		renderProducts(allProductsdata, filters);
	});
});
