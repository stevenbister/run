import { useState } from 'react';
import notification from '../assets/sounds/soft-tone-001-9755.mp3';
import { Timer } from '../components/Timer';
import type { TimerStatus, Workout as WorkoutType } from '../types';
import { Button, ButtonGroup } from './Button';
import { PlayPauseButton } from './PlayPauseButton';

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
            PROGRESS BAR HERE
            <Timer
                status={status}
                maxDuration={intervals[currentTimerIndex].duration}
                onTimerEnd={handleTimerEnd}
            />
            <div className="effort-section">
                <h2 className="effort-section__ttl">effort</h2>
                <h3 className="effort-section__sub-ttl">
                    {intervals[currentTimerIndex].effort}
                </h3>
            </div>
            <ButtonGroup direction="vertical">
                <PlayPauseButton
                    status={status}
                    onClick={() => {
                        switch (status) {
                            case 'idle':
                                setStatus('ticking');
                                break;
                            case 'ticking':
                                setStatus('idle');
                                break;
                            default:
                                setStatus('idle');
                                break;
                        }
                    }}
                />

                <Button
                    onClick={() => {
                        setStatus('idle');
                        setCurrentTimerIndex(0);
                    }}
                >
                    reset
                </Button>
            </ButtonGroup>
        </>
    );
}
