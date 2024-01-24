<template>
    <div class="row">
        <div class="col-2"></div>

        <div class="col">
            <CarouselComponent />
            <MenuComponent />
            <ProductCard  />
            <CarouselDene2/>
            <CarouselDene />
            <MallComponent />
        </div>

        <div class="col-2"></div>
    </div>
</template> 

<script lang="ts">

import { defineComponent } from 'vue';
import CarouselComponent from './CarouselComponent.vue';
import MenuComponent from './MenuComponent.vue';
import ProductCard from './ProductCard.vue';
import CarouselDene2 from './CarouselDene2.vue';
import CarouselDene from './CarouselDene.vue';
import MallComponent from './MallComponent.vue';



export default defineComponent({
    components: { CarouselComponent,MenuComponent,ProductCard,CarouselDene2,CarouselDene,MallComponent}
})
</script>