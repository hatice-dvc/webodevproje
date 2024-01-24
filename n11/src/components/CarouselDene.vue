<template>
  <div class="container3">
      <p style="text-align: left;"> 
        <span style="color: #454444; font-weight: bold; margin-bottom: 100px;">Online Alışverişin Adresi n11</span> <br/>
        <span style="color: #4d4a4a; margin-bottom: 100px; font-size: 11px;"> n11; Türkiye’deki başarılı online alışveriş siteleri arasında yer almaktadır. Yaşamın her alanındaki ihtiyaçlarınızı kolayca bulabileceğiniz n11'de 50.000’i aşkın mağazanın ürünü bulunmaktadır. İnternet alışveriş sitesi ve e-ticaret denildiğinde akla gelen ilk markalardan biri olmayı başaran n11'de onlarca farklı kategoride binlerce ürün beğeninize sunulmaktadır. Müşterilere güven ve kolaylık, mağazalara ise destek ve özen üzerine dayalı değer önerileri sunan n11'de siz de avantajlarla dolu internet alışverişi keyfi sürebilirsiniz. n11 ile hayat sana gelir. </span> <br/>
          Devamını Göster <br/>
      </p>

      <div class="image-container">
      <img src="../assets/indir8.png">
    </div>
  </div>
</template>

<script lang = "ts">
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
/* Eğer resim boyutunu veya diğer stil özelliklerini özelleştirmek istiyorsanız, aşağıdaki stil etiketini kullanabilirsiniz. */
.image-container {
  margin-top: 20px; /* Örneğin: Resim ile metin arasında bir boşluk bırakmak için */
}

.image-container img {
  width: 100%; /* Resmi container genişliği kadar genişlet */
  height: 100%; /* Resmi container yüksekliği kadar yükseklet */
  object-fit: cover; /* Resmi sıkıştırma veya gererek uygun hale getirme */
}

</style>
