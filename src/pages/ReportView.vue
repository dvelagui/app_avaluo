<template>
    <div class="q-pa-xl row wrap items-center justify-center container">
        <h4 class="text-center q-mb-lg">Reporte #{{ nanoid(8) }}</h4>
    </div>

    <div v-show="view" class="q-pa-xl row wrap q-flex-column items-center justify-center container">

        <div class="col-12 row justify-end">

            <q-btn class="col-3" color="primary" label="Obtén reporte Completo" />
        </div>
        <div class="col-12 q-my-lg">
            <h5>AQUI REPORTE GRATUITO PROXIMAMENTE...</h5>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { nanoid } from "nanoid";
import { QSpinnerPuff, useQuasar } from 'quasar'

const view = ref(false);

const $q = useQuasar();


$q.loading.show(
    {
        spinner: QSpinnerPuff,
        spinnerColor: 'primary',
        spinnerSize: 250,
        backgroundColor: 'black',
        message: 'Estamos Constuyendo el Reporte',
        messageColor: 'white'
    }
)
setTimeout(() => {
    view.value = true
    $q.loading.hide()

}, 6000);


</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
}
</style>