<template>
    <div class="text-h6">{{ useDataBase.documents?.nickname }}</div>
 </template>
 
 <script setup>
 import { userDatabaseStore } from 'src/stores/database';
 import { ref } from 'vue';
 
 const useDataBase = userDatabaseStore();
 
 </script>
 
 <style lang="scss" scoped>
 
 
 </style>