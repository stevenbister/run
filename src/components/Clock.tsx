import { ComponentPropsWithoutRef, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { ClockStatus } from '../types';

export interface ClockProps extends ComponentPropsWithoutRef<'div'> {
    status?: ClockStatus;
}

export function Clock(props: ClockProps) {
    const { status = 'idle', ...rest } = props;
    const [timeElapsed, setTimeElapsed] = useState(0);

    const seconds = Math.floor(timeElapsed % 60);
    const minutes = Math.floor((timeElapsed / 60) % 60);
    const hours = Math.floor((timeElapsed / 60 / 60) % 24);

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