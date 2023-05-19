<template  v-slot:after>
    <q-tab-panels class="panel-tab-dp bg-white" v-model="tab" animated swipeable vertical transition-prev="jump-up"
        transition-next="jump-up">

        <q-tab-panel name="profile">
            <div class="text-h4 q-mb-md">Perfil</div>
            <AccountProfile />
        </q-tab-panel>

        <q-tab-panel name="plan">
            <div class="text-h4 q-mb-md">Plan Actual</div>
            <p>Aqui Vamos a poner el plan y lo que incluye</p>
            <p>Cantidad de reportes usados</p>
            <p>Cantidad de usuarios</p>
        </q-tab-panel>

        <q-tab-panel name="invoices">
            <div class="text-h4 q-mb-md">Facturación</div>
            <p>Todo lo relacionado con metodos de pagos</p>
            <p>Datos de facturación</p>
            <p>Resumen de Facturas</p>
        </q-tab-panel>
    </q-tab-panels>
</template>

<script setup>
import { inject, ref } from "vue";
import AccountProfile from "./AccountProfile.vue";

const tab = inject('tab');

</script>

<style lang="scss" scoped>
.panel-tab-dp {
    width: 70%;
}

.q-tabs__content {
    background-color: white;
}

@media only screen and (max-width: 720px) {
    .panel-tab-dp {
        width: 250px;
    }
}
</style>