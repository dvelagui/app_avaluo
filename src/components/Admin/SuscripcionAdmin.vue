<template>
    <div class="row q-pa-md items-center justify-center">
        <div class=" col-12 col-md-4 q-gutter-y-md">
            <q-card class="column card-plan card">
                <img class="img-plan" src="../../assets/images/Localpolice.svg" alt="Plan Actual">
                <div class="card-body q-my-lg">
                    <h5 class="card-plan_h5 card-title">Plan Actual:</h5>
                    <h3 class="card-plan_h3 card-title text-uppercase q-my-md">{{ useDataBase.documents?.plan }}</h3>
                    <p class="card-plan_p card-text">
                        {{ n.reports }} reportes al mes.
                    </p>
                </div>
            </q-card>
        </div>

        <div class=" col-12 col-md-4 q-gutter-y-md">
            <q-card class="column  card-date">
                <div class="row">
                    <div class="col-12">
                        <q-card-section>
                            <div class="row justify-between q-my-lg">
                                <div class="col-6">
                                    <p class="card-plan_p card-text">
                                        <strong>Inicio de periodo:</strong>
                                    </p>
                                    <p class="card-plan_p card-text">
                                        {{ dateNow }}
                                    </p>
                                    <p class="card-plan_p card-text q-mt-lg">
                                        <strong>Corte de periodo:</strong>
                                    </p>
                                    <p class="card-plan_p card-text">
                                        {{ dateEnd }}
                                    </p>
                                </div>
                                <div class="col-6">
                                    <p class="card-plan_p card-text">
                                        <strong>Consultas mensuales:</strong>
                                    </p>
                                    <p class="card-plan_p card-text">
                                        {{ n.reports }}
                                    </p>
                                    <p class="card-plan_p card-text  q-mt-lg">
                                        <strong>Consultas a la fecha:</strong>
                                    </p>
                                    <p class="card-plan_p card-text">
                                        {{ n.reports - reportsUsed }}
                                    </p>
                                </div>
                            </div>
                        </q-card-section>
                    </div>
                    <div class="col-12">
                        <q-card-section>
                            <div class="row justify-center q-gutter-x-md">
                                <div class="col-4">
                                    <q-btn @click="router.push('/empresas/planes')" color="primary">Cambiar Plan</q-btn>
                                </div>
                                <div class="col-4">

                                    <q-btn color="primary">Eliminar</q-btn>
                                </div>

                            </div>
                        </q-card-section>
                    </div>
                </div>
            </q-card>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { userDatabaseStore } from "../../stores/database";
import { useRouter, useRoute } from 'vue-router';
import { reportDatabaseStore } from "../../stores/reports";

const useReportDatabase = reportDatabaseStore();
const useDataBase = userDatabaseStore();
const router = useRouter();
const route = useRoute();
const date = new Date();
const month = 1000 * 60 * 60 * 24 * 30
const dateNow = date.toLocaleDateString();
const datePlan = date.getTime() + month
const dateEnd = new Date(datePlan).toLocaleDateString();
const reportsUsed = ref()
onMounted(async () => {
    await useReportDatabase.getDataReports()
    await useReportDatabase.getDataReportsAdmin()
    reportsUsed.value = useReportDatabase.documentsAdmin.length + useReportDatabase.documents.length
})

const numberReports = [
    {
        plan: 'basico',
        reports: '15'
    },
    {
        plan: 'avanzado',
        reports: '30'
    },
    {
        plan: 'profesional',
        reports: '70'
    },
]

const n = numberReports.find(nr => {
    if (nr.plan === useDataBase.documents?.plan) {
        return nr.reports
    }
})



</script>
  
<style lang="scss" scoped>
.card-plan {
    width: 100%;
    max-width: 350px;
    height: 350px;
    padding: 40px 32px 10px 32px;
    border-radius: 16px;
    border: none;
    background-color: #F9E6F1;
}

.card-date {
    width: 100%;
    height: 350px;
    padding: 40px 5px 10px 5px;
    border-radius: 16px;
    border: none;
}



.img-plan {
    width: 100%;
    max-width: 100px;
    height: 100px;
}

.card-plan_img {
    width: 70px;
    text-align: center;
    margin: 0 auto;
}

.card-plan_h5 {
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #282a33;
}

.card-plan_h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #282a33;
}

.card-plan_p {
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #6b7082;
}

.card-text2 {
    font-size: 12px;
}

@media (max-width: 992px) {}
</style>
  