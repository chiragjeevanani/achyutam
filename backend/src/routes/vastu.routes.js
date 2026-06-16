import express from 'express';
import {
  getVastuTips,
  getDirections,
  updateDirection,
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getMistakes,
  createMistake,
  updateMistake,
  deleteMistake,
  getRemedies,
  createRemedy,
  updateRemedy,
  deleteRemedy,
  getSeasons,
  updateSeason,
  getElements,
  updateElement,
} from '../controllers/vastuTipController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public aggregate query
router.get('/', getVastuTips);

// Directions
router.route('/directions')
  .get(getDirections);
router.route('/directions/:code')
  .put(protect, updateDirection);

// Rooms
router.route('/rooms')
  .get(getRooms)
  .post(protect, createRoom);
router.route('/rooms/:id')
  .put(protect, updateRoom)
  .delete(protect, deleteRoom);

// Mistakes
router.route('/mistakes')
  .get(getMistakes)
  .post(protect, createMistake);
router.route('/mistakes/:id')
  .put(protect, updateMistake)
  .delete(protect, deleteMistake);

// Remedies
router.route('/remedies')
  .get(getRemedies)
  .post(protect, createRemedy);
router.route('/remedies/:id')
  .put(protect, updateRemedy)
  .delete(protect, deleteRemedy);

// Seasons
router.route('/seasons')
  .get(getSeasons);
router.route('/seasons/:id')
  .put(protect, updateSeason);

// Elements
router.route('/elements')
  .get(getElements);
router.route('/elements/:id')
  .put(protect, updateElement);

export default router;
