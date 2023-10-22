import { Maybe } from '../types';

/**
 * Joins a list of classes together, filtering out the falsy values
 *
 * @param classes A comma separated list of classNames
 * @returns A string of classNames
 * @example classNames('foo', 'bar', 'baz')
 */
export function classNames(...classes: Maybe<string>[]) {
    const classNames = classes
        .filter((className) => className)
        .join(' ')
        .trim();

    return classNames;
}
