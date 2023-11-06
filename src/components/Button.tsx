import { ComponentPropsWithoutRef } from 'react';
import { classNames } from '../utils';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export function Button(props: ButtonProps) {
    const { children, className, ...rest } = props;

    return (
        <button className={classNames('btn', className)} {...rest}>
            {children}
        </button>
    );
}

interface ButtonGroupProps extends ComponentPropsWithoutRef<'div'> {
    /**
     * The direction of the button group
     * @default horizontal
     */
    direction?: 'horizontal' | 'vertical';
}

export function ButtonGroup(props: ButtonGroupProps) {
    const { children, className, direction = 'horizontal', ...rest } = props;

    return (
        <div
            className={classNames(
                'btn-group',
                direction && `btn-group--${direction}`,
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
