<template>
    <td class="text-left">{{ dateReport }}</td>
    <td class="text-left">{{ cityReport }}</td>
    <td class="text-left">{{ addressReport }}</td>
    <td class="text-left">{{ userReport }}</td>
    <td class="text-center">
        <div class="d-flex justify-center align-center">
            <a @click="router.push(`/${useDatabase.documents.typeUser}/vista-reporte`)" class="btn-actions"
                color="primary">Ver reporte<q-icon class="q-mr-lg q-ml-xs" name="fa-solid fa-file-lines" /></a>
            <a class="btn-actions" color="primary">Descargar<q-icon class="q-mr-lg q-ml-xs"
                    name="fa-solid fa-download" /></a>
        </div>
    </td>
</template>

<script setup>
import { userDatabaseStore } from "../../stores/database";
import { useRouter } from 'vue-router';
import { toRefs } from 'vue';

const useDataBase = userDatabaseStore();
const router = useRouter();

const props = defineProps({
    dateReport: String,
    cityReport: String,
    addressReport: String,
    userReport: String,
    idReport: String,
})

const { dateReport, cityReport, addressReport, idReport, userReport } = toRefs(props)

</script>

<style lang="scss" scoped>
.btn-actions {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.01em;
    text-decoration-line: underline;
    color: $primary;
}

.q-table tbody td {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #282A33;
}

a {
    cursor: pointer;
}
</style>