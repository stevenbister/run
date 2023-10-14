import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { TimerStatus } from '../types';

export interface TimerProps extends ComponentPropsWithoutRef<'div'> {
    /**
     * The status of the timer
     */
    status?: TimerStatus;
    /**
     * The max duration of the timer in seconds
     */
    maxDuration?: number;
    /**
     * Callback function to be called when the timer ends
     */
    onTimerEnd?: () => void;
}

export function Timer(props: TimerProps) {
    const {
        status = 'idle',
        maxDuration,
        onTimerEnd = () => {},
        ...rest
    } = props;
    const [timeElapsed, setTimeElapsed] = useState(0);

    const seconds = Math.floor(timeElapsed % 60);
    const minutes = Math.floor((timeElapsed / 60) % 60);
    const hours = Math.floor((timeElapsed / 60 / 60) % 24);

    useEffect(() => {
        if (maxDuration === timeElapsed) {
            setTimeElapsed(0);
            onTimerEnd();
        }
    }, [maxDuration, onTimerEnd, timeElapsed]);

    useInterval(
        () => {
            setTimeElapsed((timeElapsed) => timeElapsed + 1);
        },
        status === 'ticking' ? 1000 : null
    );

    return (
        <div {...rest}>
            {twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}
        </div>
    );
}

/**
 * Returns a string representation of a number with at least two digits.
 * If the number has less than two digits, a leading zero is added.
 *
 * @param num - The number to convert to a string with at least two digits.
 * @returns A string representation of the number with at least two digits.
 */
const twoDigits = (num: number) => String(num).padStart(2, '0');
