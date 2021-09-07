import mongoose from 'mongoose';
import User from './models/userModel.js';
import Team from './models/teamModel.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    let users = {
      name: 'Tom',
      surname: 'Somers',
      email: 'tom@email.com',
      password: 'aa',
    };

    let teams = [
      {
        image:
          'https://site-cdn.givemesport.com/images/20/05/04/90b679f76c0210f34a64c925e7686c95/690.jpg',
      },
      {
        image:
          'https://site-cdn.givemesport.com/images/20/05/04/3534c8939c58ba28f747765170abef05/690.jpg',
      },
      {
        image:
          'https://site-cdn.givemesport.com/images/20/05/04/e016f8952ef0149340ff5eefe08e7308/690.jpg',
      },
      {
        image:
          'https://site-cdn.givemesport.com/images/20/05/04/41a579684c32c7acf0b609e1a2e80d54/690.jpg',
      },
      {
        image:
          'https://site-cdn.givemesport.com/images/20/05/04/029fe5c07b35f2ec1d233a04e2062377/690.jpg',
      },
    ];

    User.insertMany(users);
    Team.insertMany(teams);

    console.log('Data sended to MongoDB');
  });
