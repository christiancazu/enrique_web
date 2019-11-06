import contactAPI from '~/api/contactAPI'

export default (ctx, inject) => {
  inject('contactAPI', contactAPI(ctx.$axios))
}
