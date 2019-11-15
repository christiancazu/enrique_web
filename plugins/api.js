import contactAPI from '~/api/contactAPI'
import paymentAPI from '~/api/paymentAPI'

export default (ctx, inject) => {
  inject('contactAPI', contactAPI(ctx.$axios))
  inject('paymentAPI', paymentAPI(ctx.$axios))
}
