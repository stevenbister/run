import { LoaderFunctionArgs, json, useLoaderData } from 'react-router-dom';
import { Workout } from '../components/Workout';
import WORKOUT_DATA from '../data/workouts.json';
import type { Workout as WorkoutType } from '../types';

type LoaderData = {
    workout: WorkoutType | undefined;
};

export async function loader({ params }: LoaderFunctionArgs) {
    if (params.id === undefined) {
        throw new Response('', {
            status: 400,
            statusText: 'Bad Request',
        });
    }

    const workoutExists = WORKOUT_DATA.map((workout) => workout.id).includes(
        Number(params.id)
    );

    if (!workoutExists) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        });
    }

    const workout = WORKOUT_DATA.find(
        (workout) => workout.id === Number(params.id)
    );

    return json<LoaderData>({ workout });
}

export default function Workouts() {
    const { workout } = useLoaderData() as LoaderData;

    if (!workout) return <p>No workout returned from loader</p>;

    return (
        <section className="section">
            <h1 className="section__ttl">{workout?.name}</h1>

            <Workout workout={workout} />
        </section>
    );
}
