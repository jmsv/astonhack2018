const production = false

export default () => {
    return production ? {
        base: 'http://localhost:8080'
    } : {
        base: 'http://localhost:8080'
    }
}
