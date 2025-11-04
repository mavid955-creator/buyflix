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
