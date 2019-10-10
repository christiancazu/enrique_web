<template>
  <article class="history">
    <div class="history__header">
      <h4>{{ title }}</h4>
    </div>
    <div class="container">
      <div 
        :class="[
          { 'flex-row-reverse' : reverse },
          'row history__body'
        ]">
      <img 
        :src="img" 
        :alt="`${ownerName} - ${title}`"
        class="col-12 col-md-6 history__body__img"
      >
      <div class="col-12 col-md-6 history__body__content">
        <div class="history__body__content__quote">
          <i class="fa fa-quote-left history__body__content__quote--left" aria-hidden="true"></i>
        </div>
        <p class="history__body__content__text">
          {{ body }}
        </p>
        <div class="history__body__content__quote">
          <i class="fa fa-quote-left history__body__content__quote--right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    </div>
    <div class="history__footer">
      {{ footer }}
    </div>
  </article>
</template>

<script>
import { OWNER_NAME } from '~/config/constants'

export default {
  name: 'History',
  props: {
    img: String,
    title: String,
    body: String,
    footer: String,
    reverse: {
      type: Boolean, default: false
    }
  },
  data() {
    return {
      ownerName: OWNER_NAME
    }
  }
}
</script>
