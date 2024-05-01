import { useRouteError } from 'react-router-dom'

type RouteErrorType = {
    statusText: string
    message: string
}

export const Error = () => {
    const error = useRouteError() as RouteErrorType

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
