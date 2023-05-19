<template>
    <td class="text-left">{{ dateReport }}</td>
    <td class="text-left">{{ cityReport }}</td>
    <td class="text-left">{{ addressReport }}</td>
    <td class="text-center">
        <div class="d-flex justify-center align-center">
            <a class="btn-actions" color="primary">Ver<q-icon icon="mdi-eye"></q-icon></a>
            <a class="btn-actions" icon="mdi-download" color="primary">Descargar</a>
        </div>
    </td>
</template>

<script setup>
import { toRefs } from 'vue';


const props = defineProps({
    dateReport: String,
    cityReport: String,
    addressReport: String,
    idReport: String,
})

const { dateReport, cityReport, addressReport, idReport } = toRefs(props)

</script>

<style lang="scss" scoped>
.btn-actions {
    color: $primary;
    padding: 5px 16px;
    text-decoration: underline;
}
</style>