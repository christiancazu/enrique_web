import Vue from 'vue'
export default ({ app, $axios, redirect }) => {
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
    
        // handle message error from server or default error message
        let errorMessage = ''
    
        switch (code) {
        case 'ECONNABORTED': // time expired for request
          errorMessage = 'Intente de nuevo más tarde'
          break
        case 401:
          errorMessage = 'No tiene autorización para esta solicitud'
          app.store.commit('auth/SET', { key: 'user', value: null })
          app.store.commit('auth/SET', { key: 'loggedIn', value: false })
          redirect('/login')
          break
        case 404:
          errorMessage = 'La ruta no ha sido encontrada'
          break
        case 422:
          errorMessage = 'Algunos datos no son válidos'
          break
        default:
          errorMessage =
            typeof error.response !== 'undefined'
              ? error.response.data.message || error.response.data
              : 'Intente de nuevo más tarde'
        }
        Vue.prototype.$toast.error(errorMessage)
      })
}
