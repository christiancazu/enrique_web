export const actions = {
  async getBaseLayers ({ commit }) {
    try {
      const { data } = await this.$BaseLayerAPI.get()
      commit('BASE_LAYER_UPDATED', data);
    } catch (error) {
      if (!error.response) return
    }
  }
}