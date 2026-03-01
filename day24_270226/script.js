let cartScreen = document.querySelector(".cart-screen")
let items = document.querySelector(".cart-screen #items")
let bill = document.querySelector(".bill")
let cartsData = [];
let cartCount = document.querySelector(".icon span")

const productsData = [
  {
    "productname": "Amul Gold Milk 1L",
    "category": "Dairy",
    "price": 64,
    "imageurls": "https://imgs.search.brave.com/jOGTr2twRqc5LKKpxKHWeE0Wh3fEfhQhVdArfBrVu0U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF2aU5QSkJxUEwu/anBn"
  },
  {
    "productname": "Whole Wheat Bread",
    "category": "Bakery",
    "price": 45,
    "imageurls": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Basmati Rice 5kg",
    "category": "Grains",
    "price": 550,
    "imageurls": "https://images.pexels.com/photos/4792307/pexels-photo-4792307.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Toor Dal 1kg",
    "category": "Pulses",
    "price": 160,
    "imageurls": "https://images.pexels.com/photos/4061522/pexels-photo-4061522.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Fresh Apples 1kg",
    "category": "Fruits",
    "price": 180,
    "imageurls": "https://images.pexels.com/photos/39803/apples-fruit-red-ripe-39803.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Banana (12 pcs)",
    "category": "Fruits",
    "price": 70,
    "imageurls": "https://images.pexels.com/photos/208450/pexels-photo-208450.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Tomatoes 1kg",
    "category": "Vegetables",
    "price": 50,
    "imageurls": "https://images.pexels.com/photos/8390/food-vegetables-italian-tomatoes.jpg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Potatoes 1kg",
    "category": "Vegetables",
    "price": 40,
    "imageurls": "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Onions 1kg",
    "category": "Vegetables",
    "price": 55,
    "imageurls": "https://images.pexels.com/photos/131097/pexels-photo-131097.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Coca Cola 750ml",
    "category": "Beverages",
    "price": 40,
    "imageurls": "https://images.pexels.com/photos/161631/coca-cola-bottle-soda-drink-161631.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Orange Juice 1L",
    "category": "Beverages",
    "price": 95,
    "imageurls": "https://images.pexels.com/photos/594590/pexels-photo-594590.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Lay's Classic Chips",
    "category": "Snacks",
    "price": 20,
    "imageurls": "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Dark Chocolate Bar",
    "category": "Snacks",
    "price": 120,
    "imageurls": "https://images.pexels.com/photos/409912/pexels-photo-409912.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Eggs (12 Pack)",
    "category": "Dairy",
    "price": 90,
    "imageurls": "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Butter 500g",
    "category": "Dairy",
    "price": 250,
    "imageurls": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Paneer 500g",
    "category": "Dairy",
    "price": 220,
    "imageurls": "https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Sunflower Oil 1L",
    "category": "Cooking Essentials",
    "price": 145,
    "imageurls": "https://images.pexels.com/photos/690398/pexels-photo-690398.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Sugar 1kg",
    "category": "Cooking Essentials",
    "price": 45,
    "imageurls": "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Tata Salt 1kg",
    "category": "Cooking Essentials",
    "price": 22,
    "imageurls": "https://images.pexels.com/photos/42059/salt-spice-salty-42059.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    "productname": "Green Tea 25 Bags",
    "category": "Beverages",
    "price": 180,
    "imageurls": "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
]

let id = 0;
let allProducts = "";
productsData.forEach(function(elem){
  console.log(elem);
  
  allProducts += `<div id=${id} class="product-card">
                <div class="img">
                    <img src="${elem.imageurls}" alt="">
                </div>
                <div class="content">
                    <h3>Name:${elem.productname}</h3>
                    <h3>Category:${elem.category}</h3>
                    <h3>Price:${elem.price}</h3>
                </div>
        
                <div class="btns">
                    <button>Remove</button>
                    <button>Add to Cart</button>
                </div>
            </div>`

  id++;
})

let section = document.querySelector("section");

section.innerHTML = allProducts;

function renderCart(){
  id = 0;
  let cartsUi = "";
  let sum = 0
  cartsData.forEach(function(elem){
    cartsUi += `<div id=${id} class="product-card">
                  <div class="img">
                      <img src="${elem.imageurls}" alt="">
                  </div>
                  <div class="content">
                      <h3>Name:${elem.productname}</h3>
                      <h3>Category:${elem.category}</h3>
                      <h3>Price:${elem.price * elem.quantity}</h3>
                      <h3>Quantity:${elem.quantity}</h3>
                  </div>
          
                  <div class="btns">
                      <button id=>Remove</button>
                      <button >Add to Cart</button>
                  </div>
              </div>`;
              id++;
              sum += elem.price * elem.quantity;
  })
  let total = `
                  <h3>Subtotal: ₹${sum}</h3>
                  <h3>GST (5%): ₹${0.05*sum}</h3>
                  <h3>Delivery: ₹40</h3>
                  <h3>Total: ₹${0.05*sum + sum}</h3>
              `
  cartCount.textContent = `${cartsData.length}`;
  items.innerHTML = cartsUi;
  bill.innerHTML = total
}

// e.target.closest(selector) is a legitimate DOM method that traverses up from the event target element to find the nearest ancestor that matches the specified CSS selector.

section.addEventListener("click", function(e){
  console.log(e.target.closest(".product-card"));

  if(e.target.textContent !== "Add to Cart") return;
  const card = e.target.closest(".product-card");

  const productId = card.id;
  const product = productsData[productId];
  
  addToCart(product)
  renderCart();

})

let cartBtn = document.querySelector(".icon i")

let navLinks = document.querySelectorAll(".links p")
console.log(navLinks);

let homeBtn = navLinks[0];

cartBtn.addEventListener("click", function(){
  let display = cartScreen.style.display == "flex" ? "none" : "flex";
cartScreen.style.display = display;
  cartScreen.classList.toggle("active");
})

homeBtn.addEventListener("click", function(){
  cartScreen.style.display = "none";
})

cartScreen.addEventListener("click",function(e){
  if(e.target.textContent !== "Remove") return;

  const card = e.target.closest(".product-card");
  console.log(card);
  
  deleteFromCart(card.id);
  renderCart();
})

// add to cart 
function addToCart(card){
  const existingItem = cartsData.find(
    item => item.productname === card.productname
  );

  if(existingItem){
    existingItem.quantity += 1;
  }else{
    cartsData.push({
      ...card,
      quantity:1
    }); 
  } 

  renderCart();
}

// delete function 
function deleteFromCart(id){
  cartsData.splice(id, 1);
}