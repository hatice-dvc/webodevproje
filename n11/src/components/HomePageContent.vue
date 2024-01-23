<template>
    <div class="row">
        <div class="col-2"></div>

        <div class="col">
            <CarouselComponent />
            <ProductCard  />
            <CarouselDene />
        </div>

        <div class="col-2"></div>
    </div>
</template> 

<script lang="ts">

import { defineComponent } from 'vue';
import CarouselComponent from './CarouselComponent.vue';
import ProductCard from './ProductCard.vue';
import CarouselDene from './CarouselDene.vue';



export default defineComponent({
    components: { CarouselComponent,ProductCard,CarouselDene }
})
</script>