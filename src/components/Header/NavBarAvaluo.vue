<template>
  <q-header reveal elevated class="bg-white text-dark">
    <HeaderContent class="menu" @change-drawer-status="leftDrawerOpen = $event" />
  </q-header>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered v-if="userStore.userData">
    <DrawerContent />
  </q-drawer>
</template>
  
<script setup>
import DrawerContent from "./DrawerContent.vue";
import HeaderContent from "./HeaderContent.vue";
import { useUserStore } from 'src/stores/users';
import { ref } from 'vue'

const userStore = useUserStore();

const leftDrawerOpen = ref();

</script>
  
<style lang="scss" scoped>
@media (min-width: 992px) {
  .menu {
    display: none;
  }

}
</style>