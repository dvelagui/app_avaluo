<template>
  <q-list dark>
    <AvatarAccount />
    <q-item clickable @click="router.push(route.matched[0].path)">
      <q-item-section avatar>
        <q-icon name="mdi-camera-iris" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Escritorio</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable @click="router.push(`${route.matched[0].path}mi-cuenta`)">
      <q-item-section avatar>
        <q-icon name="code" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Mi Cuenta</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable @click="router.push(`${route.matched[0].path}reportes`)">
      <q-item-section avatar>
        <q-icon name="public" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Informes</q-item-label>
        <q-item-label caption>Historial de Informes</q-item-label>
      </q-item-section>
    </q-item>


  </q-list>
</template>

<script setup>
import AvatarAccount from '../Account/Avatar/AvatarAccount.vue';
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const route = useRoute();

</script>

<style lang="scss" scoped></style>