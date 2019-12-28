/* eslint-disable no-empty-pattern */
/* eslint-disable no-empty */
export const actions = {
  async paymentBook ({ }, form) {
    try {
      await this.$paymentAPI.create(form);
      this.$toasted.success('Tu compra se realizo con exito, revisa tu correo electrónico')
    }
    catch (e) { 
      this.$toasted.error('No se realizo la operación')
    }

  }
}