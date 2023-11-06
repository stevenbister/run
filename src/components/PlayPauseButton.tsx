import { ComponentPropsWithoutRef } from 'react';
import { TimerStatus } from '../types';
import { classNames } from '../utils';

interface PlayPauseButtonProps extends ComponentPropsWithoutRef<'button'> {
    /**
     * The current status of the timer for displaying the correct icon
     */
    status: TimerStatus;
}

export function PlayPauseButton(props: Omit<PlayPauseButtonProps, 'children'>) {
    const { status, className, ...rest } = props;

    return (
        <button className={classNames('play-pause-btn', className)} {...rest}>
            {status === 'ticking' ? (
                <svg
                    id="pause"
                    width="19"
                    height="38"
                    viewBox="0 0 19 38"
                    fill="none"
                    className="play-pause-btn__icon"
                >
                    <rect width="7" height="38" rx="3.5" fill="currentColor" />
                    <rect
                        x="12"
                        width="7"
                        height="38"
                        rx="3.5"
                        fill="currentColor"
                    />
                </svg>
            ) : (
                <svg
                    id="play"
                    width="38"
                    height="42"
                    viewBox="0 0 38 42"
                    fill="none"
                    className="play-pause-btn__icon play-pause-btn__icon--play"
                >
                    <path
                        d="M0.123061 4.72244C0.0927236 1.75637 3.18807 -0.209755 5.85999 1.07843L35.7255 15.4773C38.5508 16.8394 38.7806 20.7751 36.1331 22.4568L6.60663 41.2116C3.9591 42.8933 0.494243 41.0124 0.462164 37.8761L0.123061 4.72244Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </button>
    );
}
