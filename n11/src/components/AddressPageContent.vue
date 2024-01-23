<template>
    <div class="my-container">
        <div class="content-container">
            <img src="../assets/indir5.jpeg" alt="Resim" class="my-image" />
            <div class="text-content">
                <p class="main-text">Konum Seçin, Avantajları Kaçırmayın!</p>
                <p>Konum seçerek aynı gün teslimatlı ve konumunuza özel indirimli ürünleri kolayca görebilir, avantajlardan
                    yararlanabilirsiniz.</p>
            </div>
        </div>

        <div class="q-pa-md">
            <div class="q-gutter-md row items-start">
                <!-- @vue-ignore -->
                <q-select filled v-model="single" :options="options" label="İl" style="width: 250px" />

                <q-select filled v-model="single2" :options="options" label="İlçe" style="width: 250px" />
            </div>
            <a href="#" class="advantage-link">
                Konum Seçmenin Avantajları Neler?
            </a>
            <button class="advantage-button">
                Konum Seç
            </button>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from "pinia";
import mainStore from "../stores/index"

export default defineComponent({
    data() {
        return {
            single: null,
            single2: null,
            options: [],
        };
    },

    created() {
        this.setCity().then(() =>{
            this.getCityList.forEach(city => {
            
            //@ts-ignore
            this.options.push(city.name);
            
        })
        })
        
    },

    unmounted() {
        this.clearCity()
    },

    methods: {

        ...mapActions(mainStore,["setCity","clearCity"])
    },

    computed: {

...mapState(mainStore, ["getCityList"])
},
});

</script>
  
<style scoped>
.my-container {
    display: flex;
    flex-direction: column;
    /* Değişiklik: İçerikleri dikey hizalamak için flex-direction'ı değiştirdik */
    width: 700px;
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
}

.content-container {
    display: flex;
    /* Değişiklik: Resim ve metin içeriğini yan yana hizalamak için flex ekledik */
}

.my-image {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.text-content {
    width: 100%;
    /* Değişiklik: Text içeriğini tam genişlikte olacak şekilde ayarladık */
    margin-bottom: 20px;
    /* Değişiklik: İki blok arasında bir boşluk ekledik */
}

.main-text {
    font-weight: bold;
    font-size: 18px;
    color: #333;
}

.button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.advantage-link {
    margin-top: 10px;
    text-decoration: underline;
    cursor: pointer;
    color: rgb(90, 90, 155);
}

.advantage-button {
    background-color: gray;
    color: white;
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    margin-left: 200px;
}

.advantage-button:hover {
    background-color: purple;
}
</style>
  