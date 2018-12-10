import { login, logout, getInfo, signup } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    username: '',
    sex: '',
    phone: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.username = name
    },
    SET_SEX: (state, sex) => {
      state.sex = sex
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注册
    Signup({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const passwd = userInfo.password.trim()
      const phone = userInfo.phone.trim()
      return new Promise((resolve, reject) => {
        signup({ username, passwd, phone }).then(response => {
          // const data = response.data
          // setToken(data.token)
          // commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          // console.log(response)
          const data = response.data
          // console.log(data)
          // commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          // commit('SET_SEX', data.sex)
          commit('SET_PHONE', data.phone)
          // commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_SEX', '')
          commit('SET_PHONE', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
