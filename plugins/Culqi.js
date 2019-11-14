// import axios from 'axios'
// import chargeCulqiAPI from '~/api/chargeCulqiAPI';
// import Vue from 'vue'

// window.Culqi.publicKey = 'pk_test_ueYhGqm2jfp878gL';

// window.Culqi.settings({
//   title: 'Culqi Store',
//   currency: 'PEN',
//   description: 'Polo Culqi lover',
//   amount: 3500
// });

// async function createCharge (payload) {
  // console.log(axios, 'payload')
  // const data = {
  //   "amount": 3500,
  //   "currency_code": "PEN",
  //   "email": "marileyysh@gmail.com",
  //   "source_id": payload.id
  // }
  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer sk_test_5LklvbrfuF5gVPmH`
  // }

  // try {
  //  let response = await axios({headers, url:'https://api.culqi.com/v2/charges', method: 'POST', data})
  //   console.log(response, 'reponse')
  //   console.log('exito')
  // }
  // catch (e) { console.log(e) }
// }

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

// eslint-disable-next-line no-unused-vars
const culqi = () => {
  console.log('culqi function', window.Culqi)
  const Culqi = window.Culqi
  if (Culqi.token) { // ¡Objeto Token creado exitosamente!
    // eslint-disable-next-line no-unused-vars
    var token = Culqi.token.id;
    // alert('Se ha creado un token:' + token);
    console.log(Culqi.token)
    //En esta linea de codigo debemos enviar el "Culqi.token.id"
    //hacia tu servidor con Ajax

  } else { // ¡Hubo algún problema!
    // Mostramos JSON de objeto error en consola
    console.log(Culqi.error);
    // alert(Culqi.error.user_message);
  }
}
window.culqi = culqi

export default (ctx, inject) => {
  // Set the function directly on the context.app object
  inject('Culqi', Culqi(ctx.$Culqi))
}