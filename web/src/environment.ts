const production = false

export default () => {
    return production ? {
        base: 'https://spartify.xyz/api'
    } : {
        base: 'http://localhost:8080/api'
    }
}
