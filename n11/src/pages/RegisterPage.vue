<template>
    <div class="centered-container">
        <div class="login-container">
            <div class="login-box">
                <div class="greeting">
                    <p class="greeting-title">Merhaba!</p>
                    <p>Üyelere özel kupon ve fırsatlar seni bekliyor 🤗</p>
                    <div class="card-header_tabs">
                        <button class="login-button card-header__tabs-active">
                            <span>Giriş Yap</span>
                        </button>
                        <button class="login-button card-header__tabs-active">
                            <span>Üye Ol</span>
                        </button>
                    </div>
                    <div class="spacer"></div>
                    <div class="card-header">
                        <div class="icon">
                            <img src="../assets/indir6.png" alt="Icon Description">
                        </div>
                        <p>Yeni Üyelere Mobil Özel 50 TL İndirim Kuponu</p>
                    </div>
                </div>
                <div class="login-form">
                    <div class="phone-input-container">
                        <q-input v-model="userData.name" label="Ad" outlined />
                        <q-input v-model="userData.surname" label="Soyad (İsteğe Bağlı)" outlined />
                    </div>
                    <div class="spacer"></div>
                    <q-input v-model="userData.email" label="E-posta Adresi" outlined />
                    <div class="spacer"></div>
                    <div class="phone-input-container">
                        <q-input v-model="userData.countryCode" label="Ülke Kodu" outlined />
                        <q-input v-model="userData.phoneNumber" label="Telefon Numarası" outlined />
                    </div>
                    <div class="spacer"></div>
                    <q-input v-model="userData.password" label="Şifre" type="password" outlined :append="{
                        icon: passwordVisible ? 'visibility' : 'visibility_off',
                    }" />
                    <div class="container4">
                        <p> ▪️ 6-15 karakter ▪️ En az 1 rakam ▪️ En az 1 harf
                        </p>
                    </div>
                    <div class="spacer"></div>
                    <div class="container2">
                        <p>Cinsiyet (İsteğe Bağlı)
                        </p>
                    </div>
                    <div class="phone-input-container">
                        <button class="login-button card-header__tabs-active">
                            <span>Kadın</span>
                        </button>
                        <button class="login-button card-header__tabs-active">
                            <span>Erkek</span>
                        </button>
                    </div>
                </div>
                <div class="spacer"></div>
                <div class="container3">
                    <p>KVKK kapsamının detaylarına, n11 Kişisel Verilerin Korunması ve İşlenmesi şartlarının yer aldığı
                        sayfamızdan ulaşabilirsin.
                    </p>
                </div>
                <div class="full-width-mor-background">
                    <q-btn class="navbar-bg" flat @click="registerToPage(userData)" label="Kayıt ol" />
                </div>
                <div class="additional-options">
                    <p class="before-after-style">
                        <router-link class="text-decoration-none" :to="{ path: '/login' }">-----------------------
                            Hesabım zaten var
                            ------------------------</router-link>
                    </p>
                    <!-- Buraya istediğiniz ekstra seçenekleri ekleyebilirsiniz -->
                </div>
                <div class="social-buttons">
                    <!-- Sosyal medya ile bağlanma butonları -->
                    <button class="social-button">
                        <img src="../assets/indir.png" style="width: 30px; height: 30px" />
                    </button>

                    <button class="social-button">
                        <img src="../assets/indir3.png" style="width: 30px; height: 30px" />
                    </button>
                </div>
                <div class="custom-button-container">
                    <button class="custom-button">
                        Yardıma mı ihtiyacın var? <br>
                        0850 333 0011 numarası üzerinden Müşteri Hizmetleri'ni arayabilirsin.
                    </button>
                </div>
            </div>
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

            userData: {
                name: "",
                surname: "",
                email: "",
                countryCode: "",
                phoneNumber: "",
                password: ""

            },

            isSignUp: false,
            passwordVisible: false,
        };
    },
    methods: {

        //@ts-ignore
        registerToPage(userData) {

            this.setRegister(userData).then(() => {
                if (this.getRegisterCheck) {

                    this.$router.push({ path: "/login" })

                }
            })
        },

        ...mapActions(mainStore, ["setRegister"])

    },

    computed: {

        ...mapState(mainStore, ["getRegisterCheck"])
    }
});
</script>
  
<style scoped></style>
  
  