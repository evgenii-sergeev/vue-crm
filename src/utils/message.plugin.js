import M from 'materialize-css'

/* eslint-disable no-unused-vars */
export default {
    install(Vue, options) {
        Vue.prototype.$message = function(text) {
            M.toast({html: text})
        }

        Vue.prototype.$error = function(text) {
            M.toast({html: `[Ошибка] ${text}`})
        }
    }
}