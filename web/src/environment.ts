const production = false

export default () => {
    return production ? {
        base: 'http://206.189.20.223/api'
    } : {
        base: 'http://localhost:8080/api'
    }
}
