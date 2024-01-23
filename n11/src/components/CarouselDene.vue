<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="amber"
      navigation
      padding
      arrows="false"
      height="300px"
      class="bg-grey-9 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/quasar.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/cat.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/linux-avatar.png"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/donuts.png"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/nature.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/technology.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/food.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/abstract.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/people.jpg"
          />
          <q-img
            class="rounded-borders col-1 full-height"
            src="https://cdn.quasar.dev/img/space.jpg"
          />
        </div>
      </q-carousel-slide>
      <!-- Daha fazla slayt ekleyebilirsiniz... -->
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
