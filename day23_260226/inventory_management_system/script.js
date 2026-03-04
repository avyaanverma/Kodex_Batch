const inventory = {
  "products": [
    {
      "id": 1,
      "name": "Crocin Advance",
      "brand": "GSK",
      "category": "Pain Relief",
      "dosage": "500mg Tablet",
      "in_stock": true,
      "cost_price": 12,
      "selling_price": 18,
      "image": "./assets/medicines/crocin.jpg"
    },
    {
      "id": 2,
      "name": "Azithromycin",
      "brand": "Cipla",
      "category": "Antibiotic",
      "dosage": "500mg Tablet",
      "in_stock": true,
      "cost_price": 70,
      "selling_price": 95,
      "image": "./assets/medicines/azithromycin.jpg"
    },
    {
      "id": 3,
      "name": "Amoxicillin",
      "brand": "Sun Pharma",
      "category": "Antibiotic",
      "dosage": "250mg Capsule",
      "in_stock": true,
      "cost_price": 45,
      "selling_price": 60,
      "image": "./assets/medicines/amoxicillin.jpg"
    },
    {
      "id": 4,
      "name": "Cetirizine",
      "brand": "Zyrtec",
      "category": "Allergy",
      "dosage": "10mg Tablet",
      "in_stock": true,
      "cost_price": 10,
      "selling_price": 20,
      "image": "./assets/medicines/cetirizine.jpg"
    },
    {
      "id": 5,
      "name": "Ibuprofen",
      "brand": "Brufen",
      "category": "Pain Relief",
      "dosage": "400mg Tablet",
      "in_stock": false,
      "cost_price": 22,
      "selling_price": 35,
      "image": "./assets/medicines/ibuprofen.jpg"
    },
    {
      "id": 6,
      "name": "Pantoprazole",
      "brand": "Pantocid",
      "category": "Acidity",
      "dosage": "40mg Tablet",
      "in_stock": true,
      "cost_price": 25,
      "selling_price": 40,
      "image": "./assets/medicines/pantoprazole.jpg"
    },
    {
      "id": 7,
      "name": "Metformin",
      "brand": "Glycomet",
      "category": "Diabetes",
      "dosage": "500mg Tablet",
      "in_stock": true,
      "cost_price": 30,
      "selling_price": 50,
      "image": "./assets/medicines/metformin.jpg"
    }
  ]
}

const form = document.querySelector("#medicine-form");
const inventoryContainer = document.querySelector("#inventoryContainer");


form.addEventListener("submit", (e)=>{
  e.preventDefault();
})

inventoryContainer.addEventListener