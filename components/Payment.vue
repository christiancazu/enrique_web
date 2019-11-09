<template>
  <div
    v-if="book"
    class="text-center"
  >
    <button
      v-if="book.price"
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

    <button
      v-if="book.price"
      class="btn btn-outline-primary my-1" 
      :class="{'btn-block': isblock}"
    >
      <i
        class="fa fa-download"
        aria-hidden="true"
      />
      Resumen <strong class="text-danger">Gratis</strong>
    </button>
    <button
      v-if="!book.price"
      class="btn btn-outline-danger my-1" 
      :class="{'btn-block': isblock}"
    >
      Proximo lanzamiento
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