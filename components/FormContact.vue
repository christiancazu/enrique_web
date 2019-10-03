<template>
  <div>
    <div class="pb-4">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h5 class="text--attach">Ahora puedes</h5>
            <h1 class="text--title ">contactarme</h1>
            <div class="pt-3 pb-6">
              <p>
                Estare atento a tus dudas, consultas o sugerencias. ¿Quiero saber más de lo que pienses acerca de mis libros?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container pb-100">

        <form
          method="post"
          action=""
          id="contact_form"
          accept-charset="UTF-8"
        >
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
                <label for="exampleInputEmail1" class="h6 form-contact--label">Nombres y Apellidos</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" class="h6 form-contact--label">Correo Electronico</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" class="h6 form-contact--label">Telefono</label>
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  id="exampleInputEmail1"
                  pattern="[0-9\-]*"
                  aria-describedby="emailHelp"
                >
              </div>
            </div>
            <div class="col-md-7">
              <div class="form-group">
                <label for="exampleInputEmail1" class="h6 form-contact--label">Mensaje</label>
                <textarea
                  name="contact[body]"
                  cols="40"
                  rows="8"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary text-uppercase">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>