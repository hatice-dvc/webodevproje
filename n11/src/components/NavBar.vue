<template>
    <div class="row navbar-bg">
        <div class="col-2"></div>
        <div class="col">
            <div class="row items-center justify-center">
                <div class="col-5 q-mr-lg">
                        <input placeholder="Ürün,kategori,marka ara" class="navbarInput" type="text">
                </div>
                <div class="col-2 nb-location">
                    <div class="row">
                        <img class="img" src="../assets/location.png" alt="">
                        <router-link class="text-decoration-none" :to="{path:'/address'}">Teslimat adresi</router-link>
                    </div>
                </div>
                <div class="col-2">
                    <img class="img" src="../assets/11500957181644666555-128.png" alt="">
                    <router-link :to="{path:'/login'}"><img class="img" src="../assets/19339625881548233621-128.png" alt=""></router-link>
                </div>
            </div>
        </div>
        <div class="col-2"></div>
    </div>
    
</template>