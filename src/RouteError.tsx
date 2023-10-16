import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function RouteError() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>{error.status}</h1>
                <p>{error.statusText || error.data.message}</p>
            </div>
        );
    } else {
        return (
            <div id="error-page">
                <h1>An unexpected error has occurred.</h1>
            </div>
        );
    }
}
