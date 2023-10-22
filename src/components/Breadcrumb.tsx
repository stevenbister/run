import { ComponentPropsWithoutRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { classNames as cx } from '../utils';

interface BreadcrumbProps extends ComponentPropsWithoutRef<typeof Link> {}

export const Breadcrumb = (props: BreadcrumbProps) => {
    const { className, ...rest } = props;

    return (
        <NavLink className={cx('breadcrumb', className)} {...rest}>
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="breadcrumb__icon"
            >
                <path
                    d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </NavLink>
    );
};
