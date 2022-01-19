import Vue from 'vue'
import { AxiosStatic } from 'axios'

declare module 'vue/types/vue' {
  // eslint-disable-next-line no-shadow
  interface Vue {
    $http: AxiosStatic
  }
}
