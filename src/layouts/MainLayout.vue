<template>
  <q-layout view="lHh lpR lFf">
    <NavBarAvaluo />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

import NavBarAvaluo from 'src/components/Header/NavBarAvaluo.vue';
import FooterAvaluo from 'src/components/Footer/FooterAvaluo.vue';
import { auth } from 'src/firebaseConfig';
import { userDatabaseStore } from '../stores/database';

const useDataBase = userDatabaseStore()

const cargarDatos = async () => {
  if (auth.currentUser) {
    await useDataBase.getUserData()
  }
}
cargarDatos()

</script>
<style lang="scss" scoped></style>