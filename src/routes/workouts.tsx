import { useState } from 'react';
import { LoaderFunctionArgs, json } from 'react-router-dom';
import notification from '../assets/soft-tone-001-9755.mp3';
import { Timer } from '../components/Timer';
import WORKOUT_DATA from '../data/workouts.json';
import { TimerStatus } from '../types';

export async function loader({ params }: LoaderFunctionArgs) {
    const workoutExists = WORKOUT_DATA.map((workout) => workout.id).includes(
        Number(params.id)
    );

    if (!workoutExists) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        });
    }

    return json({});
}

export default function Workouts() {
    // TODO: Abstract all of this stuff away into a component
    const [status, setStatus] = useState<TimerStatus>('idle');
    const [currentTimerIndex, setCurrentTimerIndex] = useState(0);
    // TODO: Sample / testing data - will come from a data file later
    const timers = [3, 5];
    const audioElement = new Audio(notification);

    // When the timer ends, move to the next timer
    function handleTimerEnd() {
        if (currentTimerIndex < timers.length - 1) {
            setCurrentTimerIndex(currentTimerIndex + 1);
            audioElement.play();
        } else {
            // All timers have ended
            setStatus('idle');
            // Reset the current timer index
            setCurrentTimerIndex(0);
            audioElement.play();
        }
    }

    return (
        <>
            <Timer
                status={status}
                maxDuration={timers[currentTimerIndex]}
                onTimerEnd={handleTimerEnd}
            />

            <button onClick={() => setStatus('ticking')}>start</button>
            <button onClick={() => setStatus('idle')}>stop</button>
        </>
    );
}
