<template>
    <div class="login-container right-align">
      <div class="login-box">
        <div class="greeting">
          <p class="greeting-title">Mağazalar</p>
          <br/>
          <div class="card-header_tabs">
            <!-- İlk buton (Mağaza Girişi) -->
            <button class="login-button card-header__tabs-active" style="border-color: #660080;">
              <span style="color: #660080;">Mağaza Girişi</span>
            </button>
  
            <!-- İkinci buton (Ücretsiz Mağaza Aç) -->
            <button class="login-button2">
              <span style="color: #ffffff;">Ücretsiz Mağaza Aç</span>
            </button>
          </div>
          <div class="spacer"></div>
          <div class="container3">
                    <p style="text-align: left;">Mağaza Girişi <br/>
                        Mağaza Puanı Hesaplaması <br/>
                        Mağaza Yardım Merkezi <br/>
                        Yeni Mağaza Rehberi <br/>
                        Kargo Rehberi
                    </p>
           </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
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
  .login-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
  }
  
  .login-box {
    max-width: 250px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .greeting {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .greeting-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-align: left;
    margin: 0;
  }
  
  .card-header_tabs {
    display: flex;
    flex-direction: column; /* Değişiklik: Butonları dikey olarak sırala */
    align-items: stretch; /* Değişiklik: Tam genişlikte sırala */
    text-align: center;
    margin-bottom: 10px; /* Değişiklik: Boşluk ekle */
  }
  
  .login-button {
    max-width: 200px;
    width: 100%;
    padding: 10px;
    background-color: #fafafa;
    border: 1px solid #f0ebeb;
    border-radius: 5px;
    margin-bottom: 10px; /* Değişiklik: Butonlar arasına boşluk ekle */
  }

  .login-button2 {
    max-width: 200px;
    width: 100%;
    padding: 10px;
    background-color: #730ccc;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px; /* Değişiklik: Butonlar arasına boşluk ekle */
  }
  
  .login-button:hover {
    background-color: #ebf0f6;
  }
  
  .full-width-button {
    width: 100%;
  }

  .login-container.right-align {
  /* Değişiklik: Eğer sağa yaslanmış olacaksa, bu stil eklenir */
  justify-content: flex-end;
}

  .spacer {
    height: 2px;
}

  </style>
  