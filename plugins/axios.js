import Vue from 'vue'

export default ({ $axios }) => {
    $axios.onError((error) => {
        console.log(error, error.response.status)
        
        const code = parseInt(error.response && error.response.status)

        if (code === 401) {
            // redirect('/login')
        }
        if (code === 404) {
            Vue.prototype.$toasted.error('Los datos proporcionados no han sido enviados')
        }
        if (code === 422) {
            Vue.prototype.$toasted.error('Los datos proporcionados no han sido enviados')
        } 
        if (code === 500) {
            Vue.prototype.$toasted.error('Los datos proporcionados no han sido enviados')
        } 
    })
}
