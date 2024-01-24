<template>
    <div>
      <!-- Konteyner Div'i -->
      <div class="your-container-class">
        <div class="shortcutsArea" style="width: 1180px; height: 92px; background-color: #EDEFF3; margin-left: -50px;">
          <q-list>
            <q-item>
              <q-item-section v-for="(shortcut, index) in shortcuts" :key="index">
                <q-item-label>
                  <a :href="shortcut.link" class="center counter-large" :title="shortcut.title" :data-banner-id="shortcut.bannerId" :data-banner-name="shortcut.bannerName" :data-banner-position="shortcut.bannerPosition" style="text-decoration: none; margin-top: 5px; margin-right: 10px; font-weight: 600; line-height: 1; letter-spacing: -.09px; color: #383333; font-family: 'Open Sans', sans-serif;">
                    <img :src="shortcut.imageSrc" :alt="shortcut.title" width="60" height="60" />
                    <span style="font-size: 20px; line-height: 22px; position: relative; top: -20px; right: -20px;">{{ shortcut.title }}</span>
                  </a>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <!-- /Konteyner Div'i -->
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        shortcuts: [
          {
            link: "http://localhost:8080/#/login",
            title: "Kuponlar",
            bannerId: "48990093",
            bannerName: "Kuponlar",
            bannerPosition: "1",
            imageSrc: "https://n11scdn.akamaized.net/a1/org/23/12/14/89/04/10/85/05/77/07/47/08/08332828680747007144.png",
          },
          {
            link: "http://localhost:8080/#/login",
            title: "2023'ün Enleri",
            bannerId: "49776117",
            bannerName: "2023'ün Enleri",
            bannerPosition: "2",
            imageSrc: "https://n11scdn.akamaized.net/a1/org/24/01/05/64/57/66/83/40/15/06/60/43/28181463728774858579.png",
          },
          {
            link: "http://localhost:8080/#/login",
            title: "UçUç Kupon",
            bannerId: "49231168",
            bannerName: "UçUç Kupon",
            bannerPosition: "3",
            imageSrc: "https://n11scdn.akamaized.net/a1/org/23/12/14/82/21/55/70/52/21/38/60/64/67189238137087180087.png",
          },
          {
            link: "http://localhost:8080/#/login",
            title: "Teklifler",
            bannerId: "48990094",
            bannerName: "Teklifler",
            bannerPosition: "4",
            imageSrc: "https://n11scdn.akamaized.net/a1/org/23/12/14/58/86/99/77/17/48/52/90/79/88711861223983986664.png",
          },
          {
            link: "http://localhost:8080/#/login",
            title: "Siparişlerim",
            bannerId: "48990096",
            bannerName: "Siparişlerim",
            bannerPosition: "5",
            imageSrc: "https://n11scdn.akamaized.net/a1/org/23/12/14/80/43/67/08/02/76/43/54/65/98045470781604934465.png",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
</style>