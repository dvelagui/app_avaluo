<template>
    <div class="q-pa-md">
        <h2 class="q-mb-xl">Escoge tu reporte</h2>
        <div class="row">
            <div class="col-12 col-md-6 q-pa-sm">
                <q-card bordered class="my-card" :class="report === 'free' ? 'q-card-bordered' : ''">
                    <q-card-section>
                        <div class="row justify-between items-center">
                            <p class="col-9 type-report">Reporte Informativo</p>
                            <q-radio class="col-3" v-model="report" checked-icon="task_alt"
                                unchecked-icon="panorama_fish_eye" val="free" label="" />
                        </div>
                        <div class="text-subtitle2 q-my-sm">Este reporte incluye:</div>
                        <ul class="q-px-md">
                            <li>Solamente el rango de precio dentro del cual se ubica el inmueble.</li>
                        </ul>
                    </q-card-section>


                    <q-card-section align="right">
                        <q-separator class="q-mb-md" inset />
                        * Sin Costo
                    </q-card-section>
                </q-card>

            </div>
            <div class="col-12 col-md-6 q-pa-sm">
                <q-card bordered class="my-card" :class="report === 'complete' ? 'q-card-bordered' : ''">
                    <q-card-section>
                        <div class="row justify-between items-center">
                            <p class="col-9 type-report">Reporte Completo</p>
                            <q-radio class="col-3" v-model="report" checked-icon="task_alt"
                                unchecked-icon="panorama_fish_eye" val="complete" label="" />
                        </div>
                        <div class="text-subtitle2 q-my-sm">Este reporte incluye:</div>
                        <ul class="q-px-md">
                            <li>Rango de precio del inmueble (valor mínimo y valor máximo).</li>
                            <li>Comparativa con inmuebles.</li>
                            <li>Qué tan atractivo es el inmueble en el mercado.</li>
                            <li>Cómo se han comportado los precios en el sector.</li>
                            <li>Comparativa por características del inmueble.</li>
                        </ul>
                    </q-card-section>


                    <q-card-section align="right">
                        <q-separator class="q-mb-md" inset />
                        Valor: $40.000
                    </q-card-section>
                </q-card>

            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';


const report = ref()

</script>
<style lang="scss" scoped>
h2 {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #282A33;
}

.my-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 300px;
    min-height: 350px;
}

.q-radio {
    display: flex;
    justify-content: end;
}

.q-card-bordered {
    border: 1px solid $primary;
}

.type-report {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #282A33;
    margin: 0;
}
</style>