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
              class="rounded-borders col-3 full-height"
              src="https://n11scdn.akamaized.net/a1/org/23/10/16/61/35/42/21/24/15/13/68/70/06195101235245464885.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://n11scdn.akamaized.net/a1/org/23/05/25/79/96/04/45/54/96/77/67/62/76826852885052898073.png"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://n11scdn.akamaized.net/a1/org/21/05/03/68/15/84/06/15/62/86/26/23/32633710669061273057.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://n11scdn.akamaized.net/a1/org/23/06/23/71/55/35/22/41/66/82/57/36/24696874136023614666.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="	https://n11scdn.akamaized.net/a1/org/23/06/23/71/81/24/94/85/58/58/15/88/37862414920622623348.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="	https://n11scdn.akamaized.net/a1/org/23/06/23/81/07/97/40/21/74/08/02/77/97346888890994243814.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://n11scdn.akamaized.net/a1/org/23/06/23/85/90/69/56/80/11/45/05/08/65716302984392428504.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://cdn.quasar.dev/img/donuts.png"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://cdn.quasar.dev/img/nature.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://cdn.quasar.dev/img/technology.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://cdn.quasar.dev/img/food.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://cdn.quasar.dev/img/abstract.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
              src="https://cdn.quasar.dev/img/people.jpg"
            />
            <q-img
              class="rounded-borders col-3 full-height"
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