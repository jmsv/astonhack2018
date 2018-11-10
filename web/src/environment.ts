const production = false

export default () => {
    return production ? {
        base: 'http://localhost:3001'
    } : {
        base: 'http://localhost:3001'
    }
}
