const inventory = [
  {
    id: "MED001",
    name: "Paracetamol 500mg",
    manufacturer: "Cipla",
    batchNumber: "BATCH1234",
    expiryDate: "2026-08-30",
    purchasePrice: 12,
    mrp: 20,
    quantity: 100,
    branch: "Branch A",
    createdAt: new Date().toISOString()
  }
];

const form = document.querySelector("medicine-form");
const inventoryContainer = document.querySelector("#inventoryContainer");


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  e.target.  
})

inventoryContainer.addEventListener