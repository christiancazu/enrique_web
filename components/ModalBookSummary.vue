<template>
  <div
    id="modalBookSummary"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h6
            id="ModalLabel"
            class="modal-title text-uppercase"
          >
            {{ title }}
          </h6>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
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
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
          >
            Adquirir resumen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' }
  }
}
</script>