import Vue from 'vue'
import { Plugin } from '@nuxt/types'

export type State = {
  hasError: boolean
  message: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $error: State
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $error: State
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $error: State
  }
}

const state = Vue.observable<State>({ hasError: false, message: '' })
Vue.config.errorHandler = (err) => {
  state.hasError = true
  state.message = err.message

  setTimeout(() => {
    state.hasError = false
    state.message = ''
  }, 3000)

  // https://github.com/nuxt/nuxt.js/blob/1f5d4898500936e663405c1f8dd355e592189591/packages/vue-app/template/client.js#L68
  // ここを見ると true を返せば NuxtJS 本体のエラーハンドリングをキャンセルできることがわかる
  return true
}

const errorPlugin: Plugin = (_, inject) => {
  inject('error', state)
}

export default errorPlugin
