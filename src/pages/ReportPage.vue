<template>
    <div class="q-pa-xl column items-start justify-start">
        <h4 class="title text-center">Historial de reportes</h4>
    </div>
    <div class="q-pa-md items-center justify-center">
        <div class="col-12">
            <q-card class=" my-card" flat bordered>
                <div class="row items-center justify-between">
                    <div class="col-4 q-pa-lg">
                        <label for="event">Filtrar por fecha:</label>
                        <q-input class="q-mt-md" filled v-model="date" mask="date" :rules="['date']">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-3 q-pa-lg text-right">
                        <q-btn @click="router.push(`/${useDataBase.documents.typeUser}/avaluo-inmueble`)" color="primary"
                            label="Genera Reporte" />
                    </div>
                </div>

                <q-markup-table>
                    <thead>
                        <tr>
                            <th class="text-left">Fecha de solicitud</th>
                            <th class="text-left">Ciudad</th>
                            <th class="text-left">Dirección</th>
                            <th class="text-left">Asesor</th>
                            <th class="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="report in useReportDatabase.documents" :key="report.idReport">
                            <ReportList :dateReport="report.dateReport" :city-report="report.cityReport"
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
import ReportList from 'src/components/Reports/ReportList.vue';
import { userDatabaseStore } from "../stores/database";
import { reportDatabaseStore } from "../stores/reports";
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";

const useDataBase = userDatabaseStore();
const router = useRouter();
const route = useRoute();
const current = ref(1)
const date = ref('2023/05/19')
const useReportDatabase = reportDatabaseStore()
useReportDatabase.getDataReports();

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
  