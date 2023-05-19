<template>
  <q-layout view="hhh Lpr fFf">
    <NavBarAvaluo />
    <q-page-container>
      <router-view class="bg-color" />
    </q-page-container>
    <FooterAvaluo />
  </q-layout>
</template>

<script setup>

import NavBarAvaluo from 'src/components/Header/NavBarAvaluo.vue';
import FooterAvaluo from 'src/components/Footer/FooterAvaluo.vue';
import { auth } from 'src/firebaseConfig';
import { userDatabaseStore } from 'src/stores/database';

const useDataBase = userDatabaseStore()

const cargarDatos = async () => {
  if (auth.currentUser) {
    await useDataBase.getUserData()
  }
}
cargarDatos()

</script>
<style lang="scss" scoped>
.bg-color {
  background-color: #e9edf4;
}
</style>