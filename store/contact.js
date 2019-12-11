export const actions = {
  // eslint-disable-next-line no-empty-pattern
  async sendEmail ({ }, form) {
    console.log(form)
    await this.$contactAPI.sendEmail(form);
  }
}