const data = {
  "products": [
    {
      "id": 1,
      "drink_name": "Classic Cappuccino",
      "theme_color": "#6F4E37",
      "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      "description": "Rich espresso blended with steamed milk and thick milk foam. Perfect balance of bold and creamy.",
      "sizes": {
        "S": { "cup_size_ml": 180, "actual_price": 120, "discounted_price": 99 },
        "M": { "cup_size_ml": 250, "actual_price": 160, "discounted_price": 139 },
        "L": { "cup_size_ml": 350, "actual_price": 210, "discounted_price": 179 }
      }
    },
    {
      "id": 2,
      "drink_name": "Iced Caramel Latte",
      "theme_color": "#C68E17",
      "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
      "description": "Chilled espresso with creamy milk and sweet caramel syrup, served over ice.",
      "sizes": {
        "S": { "cup_size_ml": 250, "actual_price": 150, "discounted_price": 129 },
        "M": { "cup_size_ml": 350, "actual_price": 190, "discounted_price": 165 },
        "L": { "cup_size_ml": 450, "actual_price": 240, "discounted_price": 210 }
      }
    },
    {
      "id": 3,
      "drink_name": "Strawberry Smoothie",
      "theme_color": "#E63946",
      "image": "https://images.unsplash.com/photo-1497534446932-c925b458314e",
      "description": "Fresh strawberries blended with yogurt and ice for a refreshing fruity boost.",
      "sizes": {
        "S": { "cup_size_ml": 300, "actual_price": 140, "discounted_price": 119 },
        "M": { "cup_size_ml": 400, "actual_price": 180, "discounted_price": 155 },
        "L": { "cup_size_ml": 500, "actual_price": 230, "discounted_price": 199 }
      }
    },
    {
      "id": 4,
      "drink_name": "Mint Mojito (Non-Alcoholic)",
      "theme_color": "#2A9D8F",
      "image": "https://images.unsplash.com/photo-1551024709-8f23befc6c0d",
      "description": "Refreshing blend of mint leaves, lime juice, sugar syrup, and sparkling soda.",
      "sizes": {
        "S": { "cup_size_ml": 250, "actual_price": 110, "discounted_price": 95 },
        "M": { "cup_size_ml": 350, "actual_price": 150, "discounted_price": 129 },
        "L": { "cup_size_ml": 450, "actual_price": 190, "discounted_price": 165 }
      }
    },
    {
      "id": 5,
      "drink_name": "Mango Shake",
      "theme_color": "#FFB703",
      "image": "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
      "description": "Creamy mango pulp blended with chilled milk and a hint of cardamom.",
      "sizes": {
        "S": { "cup_size_ml": 300, "actual_price": 130, "discounted_price": 110 },
        "M": { "cup_size_ml": 400, "actual_price": 170, "discounted_price": 145 },
        "L": { "cup_size_ml": 500, "actual_price": 220, "discounted_price": 189 }
      }
    },
    {
      "id": 6,
      "drink_name": "Blueberry Iced Tea",
      "theme_color": "#3A86FF",
      "image": "https://images.unsplash.com/photo-1510626176961-4b37d4fbad03",
      "description": "Cold brewed tea infused with blueberry flavor and served chilled with ice cubes.",
      "sizes": {
        "S": { "cup_size_ml": 250, "actual_price": 100, "discounted_price": 85 },
        "M": { "cup_size_ml": 350, "actual_price": 140, "discounted_price": 120 },
        "L": { "cup_size_ml": 450, "actual_price": 180, "discounted_price": 155 }
      }
    }
  ]
}

const drinkSection = document.querySelector("#drinks");

const drinks = data.products;

// let sum = ''
// let i = 0;
// drinks.forEach((drink)=>{
//     sum+= `<div class="drink">
                
//             </div>`
//     i++;
// })

// drinkSection.innerHTML = sum;
