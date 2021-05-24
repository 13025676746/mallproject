import Toast from "./Toast";

export default {
  install(Vue){
    const toastContrustor = Vue.extend(Toast)
    const toast=new toastContrustor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast=toast
  }
}