import Vue from 'vue'

export default ({ $axios }) => {
    $axios.defaults.timeout = 30000
    // $axios.onRequest((config) => {
        
    //     const token = store.$auth.getToken('local')
    //     if (token) {
    //         // config.headers.Authorization = `${token}`
    //     }
    // })
    // $axios.onResponse((response) => {

    // })
    $axios.onError((error) => {
        
        const code = parseInt(error.response && error.response.status)

        if (code === 401) {
            // redirect('/login')
        }
        if (code === 404) {
            Vue.prototype.$toasted.error('')
        }
        if (code === 422) {
            Vue.prototype.$toasted.error('')
        } 
    })
}
