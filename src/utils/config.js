const environment = {}

export const backendUrl = import.meta.env.VITE_API_ENDPOINT

const routes = {
    home: '/',
    download: '/download',
    cards: '/cards',
    signup:'/users/create',
}


environment.developement = {
    routes
}

export default environment['developement' ]