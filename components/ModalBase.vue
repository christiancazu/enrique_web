<template>
  <div>
    <button
      type="button"
      :class="`btn btn-block mb-2 ${classBtn}`"
      data-toggle="modal"
      :data-target="`#${idModal}`"
    >
      <small class="text-uppercase font-weight-bold">
        {{ labelBtn }}
        <strong
          v-if="itsFree"
          class="text-danger"
        >(gratis)</strong>
      </small>
    </button>
    <div
      class="modal fade"
      :id="idModal"
      tabindex="-1"
      role="dialog"
      :aria-labelledby="`${idModal}Title`"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-scrollable"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              :id="`${idModal}Title`"
            >{{ titleModal }}</h5>
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
            <slot name="body-content" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >cancelar</button>
            <button
              type="button"
              class="btn btn-primary"
            >{{ toBuy? 'Comprar' : 'Enviar y descargar resumen' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    idModal: {
      type: String,
      default: ''
    },
    classBtn: {
      type: String,
      default: 'btn-secondary'
    },
    labelBtn: {
      type: String,
      default: ''
    },
    titleModal: {
      type: String,
      default: ''
    },
    itsFree: {
      type: Boolean,
      default: false
    },
    toBuy: {
      type: Boolean,
      default: false
    }
  }
}
</script>