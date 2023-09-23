const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireauth')

const router = express.Router()

// auth for workout routes
router.use(requireAuth)

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

// delete a single workout
router.delete('/:id', deleteWorkout)

// update a single workout
router.patch('/:id', updateWorkout)

module.exports = router