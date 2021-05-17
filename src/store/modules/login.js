const state = {
  userinfo: null,
  token: ''
}

const mutations = {
  SET_USER(state, user) {
    state.userinfo = user
    sessionStorage.setItem('userinfo', user)
  },
  SET_TOKEN(state, token) {
    state.token = token
    sessionStorage.setItem('token', token)
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}