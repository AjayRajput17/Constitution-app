import express from 'express';
import {
  getResources,
  getFeaturedResources,
  getResourceById,
  getLibraryStats,
  searchResources
} from '../controllers/libraryController.js';

const router = express.Router();

// Get all resources with filtering and pagination
router.get('/resources', getResources);

// Get featured resources
router.get('/featured', getFeaturedResources);

// Get resource by ID
router.get('/resources/:id', getResourceById);

// Get library statistics
router.get('/stats', getLibraryStats);

// Search resources
router.get('/search', searchResources);

export default router;
