// Importing necessary modules
import express from 'express';
import * as mainController from '../controllers/mainController.js';

// Create a router object
const router = express.Router();

// Home page route
router.get('/', mainController.home);
router.post('/search', mainController.search);

// Export the router
export default router;
