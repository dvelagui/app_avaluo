<template>
    <div class="q-pa-md items-center justify-center">
        <div class="col-12">
            <q-card class=" my-card" flat>
                <div class="row items-center justify-between">
                    <div class="col-12 q-pa-lg">
                        <label class="label-invitado q-mb-md">Escriba datos del invitado:</label>
                        <div class="q-mt-md">

                            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md row justify-start items-center">
                                <div class="col-12 col-md-3">
                                    <q-input filled v-model="name" label="Nombre" lazy-rules
                                        :rules="[val => val && val.length > 0 || 'Ingrese nombre']" />
                                </div>
                                <div class="col-12 col-md-3">

                                    <q-input filled type="email" v-model="email" label="Correo electronico" lazy-rules
                                        :rules="[
                                            val => val !== null && val !== '' || 'Ingrese un correo electronico'
                                        ]" />
                                </div>
                                <div class="col-12 col-md-3">
                                    <q-btn label="Enviar Invitación" type="submit" color="primary" />

                                </div>
                            </q-form>

                        </div>
                    </div>
                </div>

                <q-markup-table>
                    <thead>
                        <tr>
                            <th class="text-left">ID</th>
                            <th class="text-left">Fecha de ingreso</th>
                            <th class="text-left">Nombre</th>
                            <th class="text-left">Correo electrónico</th>
                            <th class="text-center">Teléfono</th>
                            <th class="text-center">Estado</th>
                            <th class="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="report in useReportDatabase.documents" :key="report.idReport">
                            <UsuariosLista :dateReport="report.dateReport" :city-report="report.cityReport"
                                :address-report="report.addressReport" :user-report="report.nicknameReport"
                                :id-report="report.idReport" />
                        </tr>
                    </tbody>
                </q-markup-table>
            </q-card>
        </div>
        <div class="q-pa-lg flex flex-center">
            <q-pagination v-model="current" :max="1" />
        </div>
    </div>
</template>
  
<script setup>
import UsuariosLista from './UsuariosLista.vue';
import { userDatabaseStore } from "../../stores/database";
import { reportDatabaseStore } from "../../stores/reports";
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";

const useReportDatabase = reportDatabaseStore()
const useDataBase = userDatabaseStore();
const $q = useQuasar()
const router = useRouter();
const route = useRoute();
const current = ref(1)
const date = ref('2023/05/19')
const name = ref('');
const email = ref('');
useReportDatabase.getDataReports();

const onSubmit = () => {
    if (!email.value) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Ingrese Correo Electronico'
        })
    }
    else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Invitacion Enviada'
        })
        onReset()
    }
}
const onReset = () => {
    name.value = ''
    email.value = ''
}

</script>

<style lang="scss" scoped>
.title {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #282A33;
    margin-top: 48px;
    margin-bottom: 48px;
}

.label-invitado {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #6B7082;
}

.q-table thead {
    background: #F7F9FD;
}

.q-table thead th {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #6B7082;
}
</style>
  