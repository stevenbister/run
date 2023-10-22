import { Outlet } from 'react-router-dom';
import spritesheet from '../assets/spritesheet.svg';
import { Header } from '../components/Header';
import { SpritesheetProvider } from '../components/Icon';

export default function Root() {
    return (
        <SpritesheetProvider spriteSheetPath={spritesheet}>
            <div className="page">
                <Header />

                <Outlet />
            </div>
        </SpritesheetProvider>
    );
}
