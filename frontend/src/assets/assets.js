import  herobg from '../assets/herobg.jpg'
// import  img1 from '../assets/briyani.png'
import img1 from '../assets/briyani.png'
import  img2 from '../assets/burger.jpg'
import  img3 from '../assets/cokeberger.png'
import  carticon  from '../assets/cart.png'
import  img4 from '../assets/croissant.png'
import  img5 from '../assets/doughnut.png'
import  img6 from '../assets/fruitbowl.jpg'
import  img7 from '../assets/fruits.jpg'
import  img8 from '../assets/hotdog.jpg'
import  img9 from '../assets/icecream.png'
import  img10 from '../assets/juices.png'
import  img11 from '../assets/khalti.png'
import  img12 from '../assets/logofork.png'
import  img13 from '../assets/momoplatter.png'
import  img14 from '../assets/pestry.jpg'
import  img15 from '../assets/pizza.png'
import  img16 from '../assets/search-line.png'
import  img17 from '../assets/SpecialDrink.jpg'
import  img18 from '../assets/wholechicken.png'
import  img19 from '../assets/wine.jpg'
import  profileicon from '../assets/profile-icon.png'
import  img21 from '../assets/menu-icon.png'
import  dropdownicon from '../assets/dropdownicon.png'
import  searchhero from '../assets/searchhero.png'
import service from '../assets/service.png'
import verified from '../assets/verified.png'
import delivery from '../assets/delivery.png'
import send from '../assets/vector.png'
import crossicon from '../assets/crossicon.png'
import pizzaforward from '../assets/pizzaforward.png'
import pizzaleft from '../assets/pizzaleft.png'
import pizzaslice from '../assets/pizzaslice.png'
import staricon from '../assets/staricon.png'
import stardullicon from '../assets/stardullicon.png'
import razorpaylogo from '../assets/razorpaylogo.png'



export const assets ={

herobg ,
carticon ,
  img1 ,
  img2 ,
  img3 ,
  img4 ,
  img5 ,
  img6 ,
  img7 ,
  img8 ,
  img9 ,
 img10 ,
 img11 ,
 img12 ,
 img13 ,
 img14 ,
 img15 ,
  img16,
 img17 ,
 img18 ,
 img19 ,
 profileicon,
 img21 ,
 dropdownicon,
 searchhero,
 service,
 verified,
 delivery,
 send,
 crossicon,
 pizzaslice,
 pizzaforward,
 pizzaleft,
 staricon,
 stardullicon,
 razorpaylogo


}

export const products= [ 
    {
      _id: "001",
      name: "Biryani",
      description: "A fragrant rice dish made with spices and meat or vegetables.",
      price: 250,
      image: [assets.img1,assets.img1],
      category: "Dinner",
      subCategory: "Non-Veg",
      stock:"Out of stock",
      sizes: ["Small", "Medium", "Large"],
      date: 1716634345448,
      bestseller: false
    },
    {
     




      _id: "002",
      name: "Pizza",
      description: "A cheesy delight topped with fresh ingredients.",
      price: 350,
      image: [assets.img15,pizzaslice,pizzaforward,pizzaleft],
      category: "Snacks",
      subCategory: "Non-Veg",
      stock:"In stock",
      sizes: ["S", "M", "L"],
      date: 1716634345448,
      bestseller: false
    },
    {
      _id: "003",
      name: "Coke & Burger Combo",
      description: "A delicious burger served with a refreshing coke.",
      price: 480,
      image: [assets.img3,assets.img3],
      category: "Snacks",
      subCategory: "Non-Veg",
      sizes: ["Regular", "Large"],
      date: 1716634345448,
      stock:"In stock",
      bestseller: true
    },
    {
      _id: "004",
      name: "Croissant",
      description: "A flaky, buttery pastry perfect for breakfast or snacks.",
      price: 150,
      image: [assets.img4,assets.img4],
      category: "Snacks",
      subCategory: "Desert",
      sizes: ["S","M"],
      date: 1716634345448,
      bestseller: false
    },
    {
      _id: "005",
      name: "Doughnut",
      description: "A soft and sweet deep-fried treat with a sugary glaze.",
      price: 60,
      image: [assets.img5,assets.img5],
      category: "Brunch",
      subCategory: "Desert",
      sizes: ["M"],
      date: 1716634345448,
      bestseller: true
    },
    {
      _id: "06",
      name: "Pastry",
      description: "A delicious sweet treat with rich flavors.",
      price: 100,
      image:[ assets.img14, assets.img14],
      category: "Snacks",
      subCategory: "Desert",
      sizes: ["S"],
      date: 1716634345448,
      bestseller: false
    },
    {
      _id: "07",
      name: "Burger",
      description: "A juicy patty sandwiched in a soft bun with fresh toppings.",
      price: 150,
      image: [assets.img2,assets.img2],
      category: "Snacks",
      subCategory: "Non-Veg",
      sizes: ["S", "L"],
      date: 1716634345448,
      bestseller: false

    },
    {
      _id: "08",
      name: "Special Drink",
      description: "A unique beverage with a refreshing twist.",
      price: 150,
      image: [assets.img17,assets.img17],
      category: "Dinner",
      subCategory: "Drinks",
      sizes: ["S"],
      date: 1716634345448,
      bestseller: true
    },








    
    {
      _id: "009",
      name: "Ice Cream",
      description: "A creamy and delightful frozen dessert.",
      price: 90,
      image: [assets.img9,assets.img9],
      category: "Lunch",
      subCategory: "Desert",
      sizes: ["Small", "Medium", "Large"],
      date: 1716634345448,
      bestseller: true
    },
    {
      _id: "010",
      name: "Juices",
      description: "Freshly squeezed fruit juices for a refreshing taste.",
      price: 70,
      image: [assets.img10,assets.img10],
      category: "Lunch",
      subCategory: "Drinks",
      sizes: ["Small", "Large"],
      date: 1716634345448,
      bestseller: true
    },
    {
      _id: "011",
      name: "Momo Platter",
      description: "Steamed dumplings served with spicy dips.",
      price: 220,
      image: [assets.img2,assets.img2],
      category: "Brunch",
      subCategory: "Non-veg",
      sizes: ["8 pcs", "12 pcs"],
      date: 1716634345448,
      bestseller: true
    },

    {
      _id: "012",
      name: "Fruit Bowl",
      description: "A healthy mix of fresh seasonal fruits.",
      price: 120,
      image: [assets.img6,assets.img6],
      category: "Brunch",
      subCategory: "Veg",
      sizes: ["Small", "Large"],
      date: 1716634345448,
      bestseller: true
    },
    {
      _id: "013",
      name: "Fruits",
      description: "Fresh organic fruits packed with nutrients.",
      price: 100,
      image: [assets.img7,assets.img7],
      category: "Snacks",
      subCategory: "Veg",
      sizes: ["Regular"],
      date: 1716634345448,
      bestseller: false
    },
    {
      _id: "014",
      name: "Hotdog",
      description: "A grilled sausage served in a bun with condiments.",
      price: 130,
      image: [assets.img8,assets.img8],
      category: "Snacks",
      subCategory: "Non-Veg",
      sizes: ["Regular"],
      date: 1716634345448,
      bestseller: false
    },


    
    {
      _id: "015",
      name: "Whole Chicken",
      description: "Perfectly roasted whole chicken with spices.",
      price: 500,
      image: [assets.img18,assets.img18],
      category: "Lunch",
      subCategory: "Non-Veg",
      sizes: ["Whole"],
      date: 1716634345448,
      bestseller: true
    },
    {
      _id: "016",
      name: "Wine",
      description: "A fine selection of red and white wines.",
      price: 800,
      image: [assets.img19,assets.img19],
      category: "Dinner",
      subCategory: "Drinks",
      sizes: ["Glass", "Bottle"],
      date: 1716634345448,
      bestseller: false
    }
  ];
  
  export default products;
  