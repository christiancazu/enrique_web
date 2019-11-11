<template>
  <div class="row">
    <div class="col">
      <ul class="timeline">
        <template v-for="(item, i) in items">
          <li
            :key="i"
            :class="{ 'timeline-inverted': i % 2 }"
          >
            <div class="timeline-image">
              <img
                :src="item.imgSmall"
                :alt="'Luis Enrique Bustamante Pérez - ' + item.title"
                class="rounded-circle img-fluid"
              >
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h6 class="title">
                  {{ item.title }}
                </h6>
              </div>
              <div class="timeline-body">
                <p>
                  {{ item.description.slice(0, 95) }}...
                </p>
              </div>
              <div class="timeline-fotter">
                <p class="small">
                  <i
                    class="fa fa-calendar"
                    aria-hidden="true"
                  />
                  {{ item.date }}
                </p>
              </div>
            </div>
          </li>
        </template>
        <li
          v-if="seeMore"
          class="timeline-inverted"
        >
          <div class="timeline-image">
            <button
              class="btn rounded-circle h-100 w-100"
              @click="$router.push('/about')"
            >
              Ver más
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
    seeMore: { type: Boolean, default: false },
    path: { type: String, default: '/' }
  }
}
</script>