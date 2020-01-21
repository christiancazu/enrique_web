/* eslint-disable no-empty-pattern */
/* eslint-disable no-empty */
import { SET_IS_LOADING } from '~/store/mutations.types'
export const state = () => ({
  isLoading: null
})

export const actions = {
  async paymentBook ({ }, form) {
    try {
      await this.$paymentAPI.create(form)
      this.$toast.success('Tu compra se realizo con exito, revisa tu correo electrónico')
    }
    catch (e) {
      this.$toast.error('No se realizo la operación')
    }
  },

  setLoading ({ commit }, data) {
    console.log('data', data)
    commit(SET_IS_LOADING, data)
  }
}

export const mutations = {
  [SET_IS_LOADING]: (state, payload) => (state.isLoading = payload)
}