import { useState } from 'react';
import { Clock } from './components/Clock';
import { ClockStatus } from './types';

export default function App() {
    const [status, setStatus] = useState<ClockStatus>('idle');

    return (
        <>
            <h1>Run</h1>

            <Clock status={status} />

            <button onClick={() => setStatus('ticking')}>start</button>
            <button onClick={() => setStatus('idle')}>stop</button>
        </>
    );
}
