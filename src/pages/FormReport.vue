<template>
    <AvaluoInmueble v-if="route.path === `/${useDataBase.documents.typeUser}/avaluo-inmueble`" />
    <AvaluoCertificado v-else />
</template>

<script setup>
import AvaluoCertificado from 'src/components/FormAvaluos/AvaluoCertificado.vue';
import AvaluoInmueble from 'src/components/FormAvaluos/AvaluoInmueble.vue';
import { userDatabaseStore } from "../stores/database";
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const useDataBase = userDatabaseStore();
const route = useRoute();

console.log(route.path);

</script>

<style lang="scss" scoped></style>