<template>
    <div class="text-p6">{{ useDataBase.documents?.email }}</div>
</template>
 
<script setup>
import { userDatabaseStore } from 'src/stores/database';
import { ref } from 'vue';

const useDataBase = userDatabaseStore();

</script>
 
<style lang="scss" scoped></style>