<template>
    <div class="q-pa-xl column items-start justify-start">
        <h4 class="title text-center">Datos Personales</h4>
        <p class="subtitle q-mt-md">Estas afiliado a la empresa ...</p>
    </div>
    <AccountProfile />
    <div class="q-px-xl column items-start justify-start">
        <h4 class="title text-center">Datos del contacto</h4>
    </div>
    <AccountProfileAdmin />
</template>
  
<script setup>
import AccountProfile from 'src/components/Account/AccountProfile.vue';
import AccountProfileAdmin from 'src/components/Account/AccountProfileAdmin.vue';
import { provide, ref } from 'vue';

const tab = ref('profile');
const splitterModel = ref(30);

provide('tab', tab);
</script>

<style lang="scss" scoped>
.tabs-avaluo {
    color: $primary;
}

.title {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #282A33;
}

.subtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #6B7082;
}
</style>
  