const baseURL = 'https://owu.linkpc.net'

const cars ="/cars"
const urls = {
    cars:{
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}

    export {
    urls,
        baseURL
    }