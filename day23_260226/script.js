var currentInventory = [
  {
    "name": "Amul Doodh",
    "category": "Dairy",
    "price": 30,
    "quantity": 120,
    "expiryDate": "2026-03-02"
  },
  {
    "name": "Mother Dairy Paneer",
    "category": "Dairy",
    "price": 85,
    "quantity": 60,
    "expiryDate": "2026-03-05"
  },
  {
    "name": "Britannia Bread",
    "category": "Bakery",
    "price": 40,
    "quantity": 150,
    "expiryDate": "2026-03-01"
  },
  {
    "name": "Tata Salt",
    "category": "Grocery",
    "price": 28,
    "quantity": 200,
    "expiryDate": "2028-12-31"
  },
  {
    "name": "Bisleri Water Bottle",
    "category": "Beverages",
    "price": 20,
    "quantity": 300,
    "expiryDate": "2027-06-15"
  }
];


var form = document.querySelector("form")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("hello");
})


var sum = ''
currentInventory.forEach((elem)=>{
    sum += `<div class="item">
                <h3>${elem.name}</h3>
                <h4>Category: <span>${elem.category}</span></h4>
                <h4>Price: <span>${elem.price}</span></h4>
                <h3>Quantity: <span>${}</span></h3>
                <h4>Expiry Date = 2026-03-02</h4>
                <div>
                    <button class ="remove">Remove</button>
                    <button class="edit">Edit</button>
                </div>
            </div>`
})


document.querySelector(".all-data").innerHTML = sum;