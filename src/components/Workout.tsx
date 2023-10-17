import { useState } from 'react';
import notification from '../assets/soft-tone-001-9755.mp3';
import { Timer } from '../components/Timer';
import type { TimerStatus, Workout as WorkoutType } from '../types';

export interface WorkoutProps {
    workout: WorkoutType | undefined;
}

export function Workout(props: WorkoutProps) {
    const { workout } = props;

    const [status, setStatus] = useState<TimerStatus>('idle');
    const [currentTimerIndex, setCurrentTimerIndex] = useState(0);

    const intervals = workout?.intervals.map((interval) => interval);

    const audioElement = new Audio(notification);

    // When the timer ends, move to the next timer
    function handleTimerEnd() {
        if (intervals === undefined) return;

        if (currentTimerIndex < intervals.length - 1) {
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

    if (!intervals) return <p>No intervals in workout</p>;

    return (
        <>
            {intervals.map((interval, i) => (
                <div key={i}>
                    <span
                        style={{
                            color: currentTimerIndex === i ? 'red' : 'black',
                        }}
                    >
                        {interval.effort}
                    </span>
                </div>
            ))}

            <Timer
                status={status}
                maxDuration={intervals[currentTimerIndex].duration}
                onTimerEnd={handleTimerEnd}
            />

            <button onClick={() => setStatus('ticking')}>start</button>
            <button onClick={() => setStatus('idle')}>stop</button>
        </>
    );
}
