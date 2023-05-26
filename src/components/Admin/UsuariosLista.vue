<template>
    <td class="text-left">{{ idReport }}</td>
    <td class="text-left">{{ cityReport }}</td>
    <td class="text-left">{{ addressReport }}</td>
    <td class="text-left">{{ userReport }}</td>
    <td class="text-left">{{ addressReport }}</td>
    <td :class="userReport === 'Daniel Velazqez' ? 'accept' : 'pending'" class="text-left">{{ userReport }}</td>
    <td class="text-right">
        <div class="d-flex justify-center align-center">
            <a @click="router.push(`/${useDatabase.documents.typeUser}/vista-reporte`)" class="btn-actions"
                color="primary">Eliminar<q-icon class="q-mr-lg q-ml-xs" name="fa-solid fa-trash" /></a>

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

.q-table tbody td.accept {
    color: $positive;
    font-weight: 600;

}

.q-table tbody td.pending {
    color: $negative;
    font-weight: 600;

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