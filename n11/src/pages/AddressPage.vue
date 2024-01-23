<template>
    <div>
       <NavBar />
       <AddressPageContent />
    </div>
</template>

<script lang="ts">

import NavBar from '@/components/NavBar.vue';
import AddressPageContent from '@/components/AddressPageContent.vue';

import { defineComponent } from 'vue';


export default defineComponent({
    components: { NavBar,AddressPageContent }
})
</script>