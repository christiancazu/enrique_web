/* eslint-disable no-empty-pattern */
/* eslint-disable no-empty */
import { SET_IS_LOADING, SET_SHOW_MESSAGE, SET_BOOK_SELECTED } from '~/store/mutations.types'
export const state = () => ({
  isLoading: false,
  showMessage: false,
  bookSelected: null
})

export const actions = {
  async paymentBook ({ commit }, form) {
    try {
      await this.$paymentAPI.create(form)
      this.$toast.success('Tu compra se realizo con exito, revisa tu correo electrónico')
      commit(SET_IS_LOADING, false)
      commit(SET_SHOW_MESSAGE, true)
    }
    catch (e) {
      this.$toast.error('No se realizo la operación')
      commit(SET_IS_LOADING, false)

    }
  },

  setLoading ({ commit }, data) {
    commit(SET_IS_LOADING, data)
  }
}

export const mutations = {
  [SET_IS_LOADING]: (state, payload) => (state.isLoading = payload),
  [SET_SHOW_MESSAGE]: (state, payload) => (state.showMessage = payload),
  [SET_BOOK_SELECTED]: (state, payload) => (state.bookSelected = payload)
}