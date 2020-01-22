const prefix = '[cinema]-'

export default {
    set (name , value) {
        window.localStorage.setItem(prefix + name, JSON.stringify({type:typeof value, value}))
    },
    get(name) {
        const jsonStr = window.localStorage.getItem(prefix + name)
        if (jsonStr) {
            let obj = JSON.parse(jsonStr)
            return obj.value
        }
    }
}