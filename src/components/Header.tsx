import { ComponentPropsWithoutRef } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames as cx } from '../utils';
import { Breadcrumb } from './Breadcrumb';

interface HeaderProps extends ComponentPropsWithoutRef<'header'> {}

export function Header(props: HeaderProps) {
    const { className, ...rest } = props;
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className={cx('header', className)} {...rest}>
            {isHome ? null : <Breadcrumb to="/" />}

            <h1 className="header__title">run.</h1>
        </header>
    );
}
