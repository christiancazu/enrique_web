const Culqi = () => {
  
  const ctxCulqi = window.Culqi

  // Configura tu llave pública
  ctxCulqi.publicKey = 'pk_test_ueYhGqm2jfp878gL';

  // Configura tu Culqi Checkout
  ctxCulqi.settings({
    title: 'Culqi Store',
    currency: 'PEN',
    description: 'Polo Culqi lover',
    amount: 3500
  });

  return ctxCulqi
}


export default (ctx, inject) => {
  // Set the function directly on the context.app object
  inject('Culqi', Culqi(ctx.$Culqi))
}