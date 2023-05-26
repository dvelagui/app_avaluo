<template>
  <q-toolbar class="q-pa-md">
    <q-btn dense flat round icon="menu" color="dark" @click="toggleLeftDrawer" v-if="userStore.userData" />
    <q-toolbar-title @click="router.push('/login')">
    </q-toolbar-title>
    <MenuContent />
  </q-toolbar>
</template>
  
<script setup>
import MenuContent from './MenuContent.vue';
import { useUserStore } from 'src/stores/users';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

const leftDrawerOpen = ref(true);

const emit = defineEmits(["changeDrawerStatus"]);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
  emit("changeDrawerStatus", leftDrawerOpen.value);

};



</script>
  
<style lang="scss" scoped></style>