<template>
    <div>
        <NavBar />
        <HomePageContent />
    </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import HomePageContent from '@/components/HomePageContent.vue';
import { defineComponent } from 'vue';

export default defineComponent({


    components: { NavBar,HomePageContent }
})
</script>