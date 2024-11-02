import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  tabledata=[
      
        {
          "category": "Meals",
          "dish": {
            "name": "Mahshy",
            "description": "Flavorful dish is often served with a rich tomato sauce",
            "image": "leaves.jpg",
            "rating": 5,
            "price": "185 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Bamiah Tagine",
            "description": "The dish is prepared using lamb and served with rice or fresh bread.",
            "image": "Tbamya.jpg",
            "rating": 4.5,
            "price": "235 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Koshary",
            "description": "Made from a mix of rice, lentils, and pasta, topped with spicy tomato sauce and fried onions.",
            "image": "koshery.jpg",
            "rating": 4.3,
            "price": "75 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Shakshoka",
            "description": "Consisting of eggs poached in a flavorful tomato sauce with onions, bell peppers, and spices. Served with fresh bread.",
            "image": "shakshoka.jpg",
            "rating": 4.7,
            "price": "85 LE"
          }
        },
      
    
        {
          "category": "Meals",
          "dish": {
            "name": "Fattah",
            "description": "Made of rice and pieces of toasted bread, served with cooked meat. Garlic and vinegar are added.",
            "image": "fata.png",
            "rating": 5,
            "price": "130 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Hamam Mahshy",
            "description": "Made of pigeon stuffed with seasoned rice and cooked with a blend of spices.",
            "image": "hamam2.jpg",
            "rating": 5,
            "price": "220 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Mesaqaa",
            "description": "Made primarily with layers of eggplant, minced meat, and tomato sauce. The eggplant is usually sliced, and then layered with the meat mixture.",
            "image": "mesaka3a.jpg",
            "rating": 4.1,
            "price": "110 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Mix Grill",
            "description": "Mix Grill platter served with egypt rise.",
            "image": "grilled.jpg",
            "rating": 4.3,
            "price": "250 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Bechamel",
            "description": "Consisting of layers of boiled pasta and a filling made from minced meat cooked with onions and spices, all topped with a creamy béchamel sauce.",
            "image": "pasta.jpg",
            "rating": 4.3,
            "price": "125 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Mammar Rice",
            "description": "Made from rice cooked with milk and spices, and topped with nuts or pieces of chicken or meat.",
            "image": "m3mr.jpg",
            "rating": 4.3,
            "price": "155 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Tamiah",
            "description": "Made from crushed fava beans (ful medames), mixed with onions, garlic, and spices such as cumin and coriander.",
            "image": "tamia.jpg",
            "rating": 5,
            "price": "30 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Molokhia",
            "description": "Served with chicken or meat broth, giving it a delicious flavor and a smooth texture. Garlic and coriander are added to enhance the taste.",
            "image": "molokhia.jpg",
            "rating": 4.8,
            "price": "115 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Bechamel",
            "description": "Consisting of layers of boiled pasta and a filling made from minced meat cooked with onions and spices, all topped with a creamy béchamel sauce.",
            "image": "pasta.jpg",
            "rating": 4.3,
            "price": "125 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Mahalabiah",
            "description": "Made from milk, cornstarch, and sugar, and topped with pistachios or coconut.",
            "image": "mahalabia.jpg",
            "rating": 4.2,
            "price": "50 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Zalabia",
            "description": "Dough shaped into small balls and dipped in syrup.",
            "image": "zalabia.jpg",
            "rating": 4.3,
            "price": "80 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Konafa",
            "description": "Stuffed with nuts or cheese.",
            "image": "konafa.jpg",
            "rating": 4.3,
            "price": "80 LE"
          }
        },
        
        {
          "category": "Meals",
          "dish": {
            "name": "Karkadeh",
            "description": "Made from dried hibiscus flowers, served hot or cold.",
            "image": "karkadeh.jpg",
            "rating": 3.2,
            "price": "30 LE"
          }
        },
        {
          "category": "Meals",
          "dish": {
            "name": "Fetter",
            "description": "Served with honey and cheese.",
            "image": "feter.jpg",
            "rating": 4.3,
            "price": "125 LE"
          }
      },
      {
          "category": "Soup&Salad",
          "dish": {
            "name": "Ads Soup",
            "description": "Lentils, onion, carrot, garlic, cumin, salt, black pepper, and olive oil.",
            "image": "3ds.jpg",
            "rating": 4.5,
            "price": "100 LE"
          }
      },
      {
          "category": "Soup&Salad",
          "dish": {
            "name": "Green Salad",
            "description": "Lettuce, Cucumber, Tomato, Onion, Bell Pepper, Carrot.",
            "image": "salad.jpg",
            "rating": 3.5,
            "price": "50 LE"
          }
        },
        {
          "category": "Dessert&Drinks",
          "dish": {
            "name": "Mawlid Sweets",
            "description": "Ingredients of Mawlid Sweets include sesame, honey, sugar, pistachios, walnuts, tahini, chocolate, nuts (such as almonds and cashews), cream, and natural flavors such as rose water.",
            "image": "moled.jpg",
            "rating": 4.3,
            "price": "380 LE"
          }
        },
        {
          "category": "Dessert&Drinks",
          "dish": {
            "name": "Golash",
            "description": "Layers of phyllo dough filled with nuts and sweetened with honey.",
            "image": "baklava.jpg",
            "rating": 3.9,
            "price": "90 LE"
          }
        },
        {
          "category": "Dessert&Drinks",
          "dish": {
            "name": "Qamar Alddin",
            "description": "Dried Apricot Drink with Rose Water and a Hint of Cinnamon.",
            "image": "qamar.jpg",
            "rating": 4.3,
            "price": "85 LE"
          }
        },
       
        {
          "category": "Dessert&Drinks",
          "dish": {
            "name": "Balah Alsham",
            "description": "Fried dough in the shape of fingers soaked in sugar syrup.",
            "image": "balah.jpg",
            "rating": 4.3,
            "price": "60 LE"
          }
        },
        {
          "category": "Dessert&Drinks",
          "dish": {
            "name": "Basbosa",
            "description": "Made from semolina sweetened with syrup and topped with nuts.",
            "image": "basbosa.jpg",
            "rating": 4.1,
            "price": "70 LE"
          }
        },
        
        {
          "category": "Dessert&Drinks",
          "dish": {
            "name": "Qamar Alddin",
            "description": "Dried Apricot Drink with Rose Water and a Hint of Cinnamon.",
            "image": "qamar.jpg",
            "rating": 4.3,
            "price": "85 LE"
          }
        },
        {
          "category": "Dessert&Drinks",
          "dish": {
            "name": "Sahlab",
            "description": "Made from milk and orchid, sweetened with sugar and garnished with cinnamon and nuts.",
            "image": "sahlab.jpg",
            "rating": 4.0,
            "price": "110 LE"
          }
        }
      ]
    }