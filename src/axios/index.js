import axios from 'axios'
import store from '@/store'

// post 请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


// 添加请求拦截器
axios.interceptors.request.use(config => {
    // if (config.url.indexOf('uploadPicture') < 0) {
    //     // 在发送请求之前做些什么
    //     let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEwMTI2OCwidHlwZSI6Im1lbWJlckF1dGhQcm92aWRlcktleSIsImlwIjoiMTI3LjAuMC4xIiwiaXNzIjoiaHR0cDovL3d3dy50eWNjLmNvbS9tZW1iZXIvbG9naW4iLCJpYXQiOjE1NDg2NjgyOTYsImV4cCI6MTU3MjY2ODI5NiwibmJmIjoxNTQ4NjY4Mjk2LCJqdGkiOiJjYlc3QU94a2J2MmR1NktlIn0.wKU8HDLm5tzJC4sHklxwWvU6zQNkUbNUcXufoW5aU88'
    // }
    // let token = store.state.auth.token || ''
    // config.headers.Authorization = 'Bearer ' + token
    if (config.url.indexOf('member') > 0) {
        let token = store.state.user.token || ''
        config.headers.Authorization = 'Bearer ' + token
    }
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
// http response 拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}, error => {
    console.log(error)
    // 对响应错误做点什么
    // if (error && error.response) {
    //   if (error.response.data.message) {
    //     Toast(error.response.data.message)
    //   }
    // }
    return Promise.reject(error.response)
})

// 常用请求方式
export function all(arrUrl) {
    let arrUrlLength = arrUrl.length
    let arr = []
    for (let i = 0; i <= arrUrlLength; i++) {
        arr.push('res' + i)
    }
    return new Promise((resolve, reject) => {
        axios.all(arrUrl)
            .then(axios.spread((...arr) => {
                resolve([...arr])
            }))
    })
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data)
            }, err => {
                console.log(err)
                reject(err.data)
            })
    })
}

// 不常用的

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err.data)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err.data)
            })
    })
}

/**
 * delete方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function deleted(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}