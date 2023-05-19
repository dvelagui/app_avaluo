<template>
    <q-avatar>
     <img :src="useDataBase.documents?.avatar" >
    <q-inner-loading v-if="useDataBase.loadingUser ? visible = true : visible = false"  
    :showing="visible"
    label-class="text-teal"
    label-style="font-size: 0.8em"
  />
    </q-avatar>
</template>

<script setup>
import { userDatabaseStore } from 'src/stores/database';
import { ref } from 'vue';

const useDataBase = userDatabaseStore();
const visible = ref(false)

</script>

<style lang="scss" scoped>


</style>