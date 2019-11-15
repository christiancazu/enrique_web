// import axios from 'axios'
// // import chargeCulqiAPI from '~/api/chargeCulqiAPI';
// // import Vue from 'vue'

// // window.Culqi.publicKey = 'pk_test_ueYhGqm2jfp878gL';

// // window.Culqi.settings({
// //   title: 'Culqi Store',
// //   currency: 'PEN',
// //   description: 'Polo Culqi lover',
// //   amount: 3500
// // });

// async function createCharge (payload) {
//   console.log(axios, 'payload')
//   const data = {
//     "amount": 2800,
//     "description": "Buscando la felicidad",
//     "email": "marile2018@gmail.com",
//     "source_id": payload.id
//   }

//   try {
//    let response = await axios({ url:'http://192.168.1.64:9100/api/payment/', method: 'POST', data })
//     console.log(response, 'reponse')
//     console.log('exito')
//   }
//   catch (e) { console.log(e) }
// }

// const Culqi = () => {

//   const ctxCulqi = window.Culqi

//   // Configura tu llave pública
//   ctxCulqi.publicKey = 'pk_test_CKBD2k26x8WluUoY';

//   // Configura tu Culqi Checkout
//   ctxCulqi.settings({
//     title: 'Culqi Store',
//     currency: 'PEN',
//     description: 'Polo Culqi lover',
//     amount: 2800
//   });

//   return ctxCulqi
// }

// // eslint-disable-next-line no-unused-vars
// const culqi = () => {
//   console.log('culqi function', window.Culqi)
//   const Culqi = window.Culqi
//   if (Culqi.token) { // ¡Objeto Token creado exitosamente!
//     // eslint-disable-next-line no-unused-vars
//     var token = Culqi.token;

//     createCharge(token)
//     // alert('Se ha creado un token:' + token);
//     console.log(Culqi.token)
//     //En esta linea de codigo debemos enviar el "Culqi.token.id"
//     //hacia tu servidor con Ajax

//   } else { // ¡Hubo algún problema!
//     // Mostramos JSON de objeto error en consola
//     console.log(Culqi.error);
//     // alert(Culqi.error.user_message);
//   }
// }
// window.culqi = culqi

// export default (ctx, inject) => {
//   // Set the function directly on the context.app object
//   inject('Culqi', Culqi(ctx.$Culqi))
// }