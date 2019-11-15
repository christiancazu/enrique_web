function api ($axios) {
  return {
    post (url, payload = {}) {
      return $axios({
        url: `${url}/`,
        method: 'POST',
        data: payload.data || {}
      })
    },
    put (url, pk, payload = {}) {
      return $axios({
        url: `${url}/${pk}/`,
        method: 'PUT',
        data: payload.data || {}
      })
    },
    delete (url, pk) {
      return $axios({
        url: `${url}/${pk}/`,
        method: 'DELETE'
      })
    },
    get (url, payload = {}) {
      return $axios({
        url: `${url}/`,
        method: 'GET',
        data: payload.data || {}
      })
    },
    getById (url, pk) {
      return $axios({
        url: `${url}/${pk}/`,
        method: 'GET',
      })
    },
  }
}

export { api }