import WORKOUT_DATA from '../data/workouts.json';

export type TimerStatus = 'idle' | 'ticking';

export type Workout = (typeof WORKOUT_DATA)[number];
