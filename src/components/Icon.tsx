import {
    ComponentPropsWithoutRef,
    ReactNode,
    createContext,
    useContext,
} from 'react';
import { classNames as cx } from '../utils';

interface IconProps extends ComponentPropsWithoutRef<'svg'> {
    /**
     * The id of the icon to reference from the spritesheet
     */
    id: string;
}

export function Icon(props: IconProps) {
    const { className, id, ...rest } = props;
    // const size = 30;
    const { spriteSheetPath } = useSpritesheetContext();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width={width}
            // height={height}
            // viewBox={`0 0 ${width} ${height}`}
            fill="none"
            className={cx('icon', className)}
            {...rest}
        >
            <use href={`${spriteSheetPath}#${id}`} />
        </svg>
    );
}

/* -------------------------------------------------------------------------------------------------
 * Spritesheet provider
 * -----------------------------------------------------------------------------------------------*/
const SpritesheetContext = createContext<{
    spriteSheetPath: string | undefined;
}>({
    spriteSheetPath: undefined,
});

export interface SpritesheetProviderProps {
    /**
     * The content of the button.
     */
    children?: ReactNode;

    /**
     * Spritesheet path.
     *
     * @default ./spritesheet.svg
     */
    spriteSheetPath?: string;
}
export function SpritesheetProvider(props: SpritesheetProviderProps) {
    const { children, spriteSheetPath = './spritesheet.svg' } = props;

    return (
        <SpritesheetContext.Provider
            value={{
                spriteSheetPath,
            }}
        >
            {children}
        </SpritesheetContext.Provider>
    );
}

/* -------------------------------------------------------------------------------------------------
 * useSpritesheetContext
 * -----------------------------------------------------------------------------------------------*/
function useSpritesheetContext() {
    const context = useContext(SpritesheetContext);

    // if `undefined`, throw an error
    if (context === undefined) {
        throw new Error(
            'useSpritesheetContext was used outside of its Provider'
        );
    }

    return context;
}
