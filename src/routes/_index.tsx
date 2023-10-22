import { Link } from 'react-router-dom';
import { Card, CardGrid } from '../components/Card';
import { Icon } from '../components/Icon';
import WORKOUT_DATA from '../data/workouts.json';

export default function Index() {
    return (
        <div className="container justify-center">
            <nav>
                {WORKOUT_DATA.length ? (
                    <CardGrid>
                        {WORKOUT_DATA.map((workout) => {
                            if (import.meta.env.PROD && workout.id === 0)
                                return null;

                            return (
                                <Link
                                    to={`/workouts/${workout.id}`}
                                    key={workout.id}
                                >
                                    <Card>
                                        <Icon id={workout.sprite} />

                                        <span className="sr-only">
                                            {workout.name}
                                        </span>
                                    </Card>
                                </Link>
                            );
                        })}
                    </CardGrid>
                ) : (
                    <p>No workouts found.</p>
                )}
            </nav>
        </div>
    );
}
