const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  sex: state => state.user.sex,
  username: state => state.user.username,
  phone: state => state.user.phone
}
export default getters
