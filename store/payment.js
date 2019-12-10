export const actions = {
  // eslint-disable-next-line no-empty-pattern
  async paymentBook ({}, payload) {
    try {
      await this.$paymentAPI.create(payload);
    } catch (error) {
      if (!error.response) return
      // throw error
    }
  }
}