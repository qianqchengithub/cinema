import storage from '@/plugins/storage.js'

const state = {
    info: storage.get('info') || {},
    isLogin : storage.get('isLogin') || false,
    token : storage.get('token') || ''
}

const actions = {
    _UpdateInfo({ commit, state }, info) {
        commit('info', info)
    },
    _Login({commit, state}, token) {
        commit('isLogin', true),
        commit('token', token)
    },
    _Logout({commit, state}) {
        return new Promise((resolve, reject)=>{
            commit('isLogin', false),
            commit('info', {}),
            commit('token', '')
            resolve()
        })
    },
    _Token({commit, state}, token){
        commit('token', token)
    }
}

const mutations = {
    info (state, value) {
        state.info = value
        storage.set('info', value)
    },
    isLogin(state, value){
        state.isLogin = value
        storage.set('isLogin', value)
    },
    token(state, value) {
        state.token = value
        storage.set('token', value)
    }
}

// getters
const getters = {
    _authInfo: state => state.info,
    _isLogin: state => state.isLogin
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}