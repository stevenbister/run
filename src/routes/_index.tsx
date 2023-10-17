import { Link } from 'react-router-dom';
import WORKOUT_DATA from '../data/workouts.json';

export default function Index() {
    return (
        <>
            <nav>
                {WORKOUT_DATA.length ? (
                    <ul>
                        {WORKOUT_DATA.map((workout) => {
                            if (import.meta.env.PROD && workout.id === 0)
                                return null;

                            return (
                                <li key={workout.id}>
                                    <Link to={`/workouts/${workout.id}`}>
                                        {workout.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>No workouts found.</p>
                )}
            </nav>
        </>
    );
}
