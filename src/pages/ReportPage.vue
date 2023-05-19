<template>
    <div class="q-pa-md row items-center justify-center container">
        <div class="col-7">
            <q-card class=" my-card" flat bordered>
                <div class="row items-center justify-between">
                    <div class="col-4 q-pa-sm">
                        <label for="event">Busca por fecha</label>
                        <q-input filled v-model="date" mask="date" :rules="['date']">
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
                    <div class="col-3">
                        <q-btn @click="router.push(`${route.matched[0].path}avaluo-inmueble`)" color="primary"
                            label="Genera Reporte" />
                    </div>
                </div>
                <q-card-section>
                    <div class="text-h6">Reportes</div>
                    <div class="text-subtitle2">Avalúo de Inmuebles</div>
                </q-card-section>

                <q-markup-table>
                    <thead>
                        <tr>
                            <th class="text-left">Fecha de solicitud</th>
                            <th class="text-left">Ciudad</th>
                            <th class="text-left">Dirección</th>
                            <th class="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="report in useReportDatabase.documents" :key="report.idReport">
                            <ReportList :dateReport="report.dateReport" :city-report="report.cityReport"
                                :address-report="report.addressReport" :id-report="report.idReport" />
                        </tr>
                    </tbody>
                </q-markup-table>
            </q-card>
        </div>
        <div class="col-7">
            <q-card class="my-card" flat bordered>
                <q-card-section>
                    <div class="text-h6">Reportes</div>
                    <div class="text-subtitle2">Avalúo Certificado</div>
                </q-card-section>

                <q-markup-table>
                    <thead>
                        <tr>
                            <th class="text-left">Fecha de solicitud</th>
                            <th class="text-center">Ciudad</th>
                            <th class="text-left">Dirección</th>
                            <th class="text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ReportList />
                    </tbody>
                </q-markup-table>
            </q-card>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { reportDatabaseStore } from "../stores/reports";
import { useRouter, useRoute } from 'vue-router';
import ReportList from 'src/components/Reports/ReportList.vue';


const router = useRouter();
const route = useRoute();

const date = ref('2023/05/19')

const useReportDatabase = reportDatabaseStore()

useReportDatabase.getDataReports();

console.log(useReportDatabase.documents);

</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
}

.my-card {
    width: 100%;
}
</style>
  