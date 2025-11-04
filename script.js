const products = [
  { id: 1, name_en: "Smartphone", name_hi: "स्मार्टफोन", price: "₹19,999", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 2, name_en: "Headphones", name_hi: "हेडफ़ोन", price: "₹2,499", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 3, name_en: "Laptop", name_hi: "लैपटॉप", price: "₹59,999", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 4, name_en: "Smart Watch", name_hi: "स्मार्ट वॉच", price: "₹3,499", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" },
];

let currentLang = "en";

function loadProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name_en}">
        <h3>${currentLang === "en" ? p.name_en : p.name_hi}</h3>
        <p>${p.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

function changeLanguage() {
  currentLang = currentLang === "en" ? "hi" : "en";
  document.getElementById("heroText").textContent = currentLang === "en" ? "Welcome to BuyFlix!" : "BuyFlix में आपका स्वागत है!";
  document.getElementById("heroSub").textContent = currentLang === "en" ? "Your one-stop shop for everything you love." : "आपकी पसंद की हर चीज़ अब एक ही जगह।";
  loadProducts();
}

loadProducts();
const products = [
  { id: 1, name_en: "Smartphone", name_hi: "स्मार्टफोन", price: "₹19,999", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", desc_en: "High-speed 5G smartphone with amazing camera.", desc_hi: "तेज़ 5G स्मार्टफोन शानदार कैमरे के साथ।" },
  { id: 2, name_en: "Headphones", name_hi: "हेडफ़ोन", price: "₹2,499", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", desc_en: "Noise cancelling wireless headphones.", desc_hi: "नॉइज़ कैंसलिंग वायरलेस हेडफ़ोन।" },
  { id: 3, name_en: "Laptop", name_hi: "लैपटॉप", price: "₹59,999", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", desc_en: "Powerful laptop for work and gaming.", desc_hi: "काम और गेमिंग के लिए शक्तिशाली लैपटॉप।" },
  { id: 4, name_en: "Smart Watch", name_hi: "स्मार्ट वॉच", price: "₹3,499", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", desc_en: "Track your fitness and stay connected.", desc_hi: "अपनी फिटनेस ट्रैक करें और जुड़े रहें।" },
];

let currentLang = "en";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let user = localStorage.getItem("user") || null;

function loadProducts(searchTerm = "") {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  const filtered = products.filter(p =>
    (p.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.name_hi.includes(searchTerm))
  );

  filtered.forEach(p => {
    list.innerHTML += `
      <div class="product" onclick="openProduct(${p.id})">
        <img src="${p.img}" alt="${p.name_en}">
        <h3>${currentLang === "en" ? p.name_en : p.name_hi}</h3>
        <p>${p.price}</p>
        <button onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function changeLanguage() {
  currentLang = currentLang === "en" ? "hi" : "en";
  document.getElementById("heroText").textContent = currentLang === "en" ? "Welcome to BuyFlix!" : "BuyFlix में आपका स्वागत है!";
  document.getElementById("heroSub").textContent = currentLang === "en" ? "Your one-stop shop for everything you love." : "आपकी पसंद की हर चीज़ अब एक ही जगह।";
  loadProducts();
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${item.name_en} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

function toggleCart() {
  const modal = document.getElementById("cartModal");
  const list = document.getElementById("cartItems");
  list.innerHTML = cart.map(p => `<li>${p.name_en} - ${p.price}</li>`).join("");
  modal.style.display = "flex";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function showLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function loginUser() {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("Please enter your name");
  localStorage.setItem("user", name);
  user = name;
  alert(`Welcome, ${name}!`);
  document.getElementById("loginModal").style.display = "none";
}

function openProduct(id) {
  localStorage.setItem("selectedProduct", id);
  const link = document.getElementById("hiddenLink");
  link.href = "product.html";
  link.click();
}

document.getElementById("searchBox").addEventListener("input", e => {
  loadProducts(e.target.value);
});

loadProducts();
updateCartCount();
