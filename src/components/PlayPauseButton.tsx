import { ComponentPropsWithoutRef } from 'react';
import { TimerStatus } from '../types';
import { classNames } from '../utils';
import { Icon } from './Icon';

interface PlayPauseButtonProps extends ComponentPropsWithoutRef<'button'> {
    status: TimerStatus;
}

export function PlayPauseButton(props: Omit<PlayPauseButtonProps, 'children'>) {
    const { status, className, ...rest } = props;

    return (
        <button className={classNames('play-pause-btn', className)} {...rest}>
            {status === 'ticking' ? (
                <Icon id="pause" className="play-pause-btn__icon" />
            ) : (
                <Icon id="play" className="play-pause-btn__icon" />
            )}
        </button>
    );
}
