import { ComponentPropsWithoutRef } from 'react';
import { classNames as cx } from '../utils';

interface CardProps extends ComponentPropsWithoutRef<'li'> {}

export function Card(props: CardProps) {
    const { children, className, ...rest } = props;

    return (
        <li className={cx('card', className)} {...rest}>
            {children}
        </li>
    );
}

interface CardGridProps extends ComponentPropsWithoutRef<'ul'> {}

export function CardGrid(props: CardGridProps) {
    const { children, className, ...rest } = props;

    return (
        <ul className={cx('card__grid', className)} {...rest}>
            {children}
        </ul>
    );
}
