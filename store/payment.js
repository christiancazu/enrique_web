/* eslint-disable no-empty-pattern */
/* eslint-disable no-empty */
export const actions = {
  async paymentBook ({ }, form) {
    console.log(this)
    try {
      await this.$paymentAPI.create(form);
      this.$toast.success('Tu compra se realizo con exito, revisa tu correo electrónico')
    }
    catch (e) { 
      this.$toast.error('No se realizo la operación')
    }

  }
}