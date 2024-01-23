<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card v-for="product in getProductList" :key="product.id" class="my-card" flat bordered>
                <q-img :src="require(`@/assets/products/${product.url}`)"></q-img>

                <q-card-section>

                    <div class="row no-wrap items-center">
                        <div class="col text-h6 ellipsis">
                            {{ product.name }}
                        </div>
                        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">

                        </div>
                    </div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <div class="row flex justify-between ">
                        <p class>{{ product.price }} TL</p>
                        <q-btn v-if="getUser !== null" @click="addBasket(product)" class="navbar-bg" color="white" flat
                            label="Satın Al" />

                    </div>
                </q-card-section>

            </q-card>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapActions, mapState } from "pinia";
import mainStore from "../stores/index"

export default defineComponent({

    created() {
        this.setProduct()
    },


    unmounted() {
        this.clearProduct()
    },

    methods: {

        //@ts-ignore
        addBasket(product) {

            //@ts-ignore
            this.addToBasket(product,this.getUser.email)

        },

        ...mapActions(mainStore, ["setProduct", "clearProduct", "addToBasket"])

    },

    computed: {

        ...mapState(mainStore, ["getProductList", "getUser"])

    },

    components: {}
})
</script>





