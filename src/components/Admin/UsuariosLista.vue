<template>
    <td class="text-left">{{ id.slice(0, 8) }}</td>
    <td class="text-left">{{ date }}</td>
    <td class="text-left">{{ name }}</td>
    <td class="text-left">{{ email }}</td>
    <td class="text-left">{{ phone }}</td>
    <td :class="id != '1' ? 'accept' : 'pending'" class="text-left">{{ status }}</td>
    <td class="text-right">
        <div class="d-flex justify-center align-center">
            <a @click="router.push(`/${useDatabase.documentsAgent.typeUser}/vista-reporte`)" class="btn-actions"
                color="primary">Eliminar<q-icon class="q-mr-lg q-ml-xs" name="fa-solid fa-trash" /></a>

        </div>
    </td>
</template>

<script setup>

import { userDatabaseStore } from "../../stores/database";
import { useRouter } from 'vue-router';
import { toRefs, ref } from 'vue';

const useDataBase = userDatabaseStore();
const router = useRouter();

const props = defineProps({
    date: String,
    name: String,
    email: String,
    phone: String,
    id: String,
})

const { date, name, email, phone, id } = toRefs(props)

console.log(date.value);

const status = ref(id.value != '1' ? 'Confirmado' : "Pendiente")

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

.accept {
    color: $positive;
}

.pending {
    color: $negative;

}
</style>