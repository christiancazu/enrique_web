export const actions = {
  // eslint-disable-next-line no-empty-pattern
  async sendEmail ({ }, form) {
    await this.$contactAPI.sendEmail(form);
  },
  // eslint-disable-next-line no-empty-pattern
  async sendSummary ({ }, form) {
    console.log(form, 'te')
    await this.$contactAPI.sendSummary(form);
  }
}