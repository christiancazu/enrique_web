import ContactAPI from '~/api/contactAPI'

export default (ctx, inject) => {
  inject('ContactAPI', ContactAPI(ctx.$axios))
}
