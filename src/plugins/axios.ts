import { PluginObject } from 'vue'

// axios
import axios from 'axios'

export const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

export default axiosIns

export const Axios: PluginObject<any> = {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$http = axiosIns
  },
}
