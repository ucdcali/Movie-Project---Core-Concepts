import express from 'express';
import fetch from 'node-fetch';

// Import env variables
import dotenv from 'dotenv'; 
dotenv.config({ path: 'process.env' });

const app = express();

// Body-parser setup (Express now includes this functionality)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Import routes
import routes from './routes/routes.js';
app.use('/', routes);



const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
