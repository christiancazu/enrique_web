<template>
  <div
    v-if="book"
    class="text-center"
  >
    <button
      class="btn btn-fab-primary my-1"
      :class="{'btn-block': isblock}"
      @click="$Culqi.open()"
    >
      <i
        class="fa fa-credit-card-alt"
        aria-hidden="true"
      />
      Comprar {{ book.price }}
    </button>

    <!-- <button
      type="button"
      :class="`btn btn-block mb-2 ${classBtn}`"
    >
      <small class="text-uppercase font-weight-bold">
        {{ labelBtn }}
        <strong
          v-if="itsFree"
          class="text-danger"
        >(gratis)</strong>
      </small>
    </button> -->

    <button
      class="btn btn-outline-primary my-1" 
      :class="{'btn-block': isblock}"
    >
      <i
        class="fa fa-download"
        aria-hidden="true"
      />
      Resumen <strong class="text-danger">Gratis</strong>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    book: { type: Object, default: null },
    labelBuy: { type: String, default: 'COMPRAR' },
    isblock: { type: Boolean, default: false }
  }
}
</script>