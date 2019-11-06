export const actions = {
  async sendEmail (form) {
    console.log(form)
    try {
      await this.$contactAPI.sendEmail(form);
    } catch (error) {
      if (!error.response) return
      // throw error
    }
  },

  async getBaseLayers ({ commit }) {
    try {
      const { data } = await this.$BaseLayerAPI.get()
      commit('BASE_LAYER_UPDATED', data);
    } catch (error) {
      if (!error.response) return
    }
  }
}