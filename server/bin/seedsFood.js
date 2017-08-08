const Food = require('../models/Food');
const mongoose = require('mongoose');
const urlDB = process.env.MONGO_URL;
mongoose.connect(urlDB)

    let foods = [
      {
        foodName: 'Pizza Diavola',
        foodCategory: 'italiana',
        foodSubCategory: 'Pizza',
        price: 7,
        rate: 3,
        imgAvatar: "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250",
        restaurantName: 'Don Giovanni',
        restaurantAddress: 'Via Cordova 13',
        restaurantFoodName: 'Pizza Diavoletto',
        review: 'Pizza tasted great!',
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at"
        }
      },
      {
        foodName: 'Pique Macho a lo Marifer',
        foodCategory: 'boliviana',
        foodSubCategory: 'Pique Macho',
        price: 13,
        rate: 5,
        imgAvatar: "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250",
        restaurantName: 'Casa Bolivia',
        restaurantAddress: 'Calle Ponzano 5',
        restaurantFoodName: 'Pique Macho casero de Marifer',
        review: 'Aútentico Pique Macho que lleva de todo, locoto incluido.',
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at"
        }
      },
      {
        foodName: 'Kebab al Ebola',
        foodCategory: 'fast-food',
        foodSubCategory: 'Kebab',
        price: 3,
        rate: 2,
        imgAvatar: "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250"
        restaurantName: 'Casa Kebab',
        restaurantAddress: "Calle Ponzano 5",
        restaurantFoodName: 'Kebab de Dani',
        review: 'Un Kebab de otro curso',
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at"
        }
      },
    ];

    Food.create(foods, (err, food
      if (err) {throw(err)}; }
      console.lolg("Success seed", foods);
      mongoose.connection.close();
  });
