<template>
  <modal-base
    id-modal="getSummary"
    label-btn="Adquirir resumen"
    title-modal="Déjanos tus datos"
    its-free
  >
    <template v-slot:body-content>
      <form action="">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Nombres"
            aria-label="Nombres"
            aria-describedby="basic-addon1"
          >
          <input
            type="text"
            class="form-control"
            placeholder="Apellidos"
            aria-label="Apellidos"
            aria-describedby="basic-addon1"
          >
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Correo electrónico"
            aria-label="Correo electrónico"
            aria-describedby="basic-addon1"
          >
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Celular"
            aria-label="Celular"
            aria-describedby="basic-addon1"
          >
          <input
            type="text"
            class="form-control"
            placeholder="Celular 2"
            aria-label="Celular 2"
            aria-describedby="basic-addon1"
          >
        </div>
      </form>
    </template>
  </modal-base>
</template>