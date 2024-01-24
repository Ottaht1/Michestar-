const environment = {}

export const backendUrl = import.meta.env.VITE_API_ENDPOINT

const routes = {
    home: '/',
    products: '/products',
    cards: '/cards',
    pricing:'/pricing',
}


environment.developement = {
    routes
}

export default environment['developement' ]