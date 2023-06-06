<template>
    <div class="q-pa-xl column items-start justify-start">
        <h4 class="title text-center">¡Hola {{ useDatabase.documents?.nickname }}!</h4>
        <p class="subtitle q-mt-md">Administra y gestiona tu información en cualquier momento.</p>
    </div>
    <section class="q-px-xl row wrap items-start justify-start q-gutter-xl">

        <CardsHome homeImg="fa-solid fa-file" homeTitle="Crea tu ACM"
            homeText="Solicita tu Análisis Comparativo de Mercado." homeUrl="/avaluo-inmueble" homeBtn="Crear" />
        <CardsHome homeImg="fa-solid fa-file-pen" homeTitle="Solicita tu avalúo certificado"
            homeText="Pide tu avalúo certificado fácil y rápido." homeUrl="/avaluo-certificado" homeBtn="Solicitar ahora" />
        <CardsHome homeImg="fa-solid fa-file-lines" homeTitle="Historial de reportes"
            homeText="Consulta  y descarga tus reportes mensuales." homeUrl="/reportes" homeBtn="Ver historial" />
        <CardsHome v-if="admin" homeImg="fa-solid fa-gear" homeTitle="Administración"
            homeText="Gestiona tus usuarios y suscripciones." homeUrl="/administracion" homeBtn="Ver administración" />
        <CardsHome homeImg="fa-solid fa-user" homeTitle="Datos personales"
            homeText="Actualiza tu información cuando lo necesites." homeUrl="/mi-cuenta" homeBtn="Ver perfil" />

    </section>
</template>

<script setup>
import CardsHome from "../components/Home/CardsHome.vue";
import { userDatabaseStore } from "../stores/database";
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";

const useDatabase = userDatabaseStore();
const router = useRouter();
const route = useRoute();
const admin = ref(useDatabase.documents?.rol != 'agente' && useDatabase.documents?.typeUser === 'empresas')


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

.subtitle {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #6B7082;
}

.text-avaluo {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;
}

.text-subtitle2 {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;
}

.container {
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
}


.my-card {
    width: 100%;
    height: 100%;
    max-width: 250px;
    min-height: 300px;
}
</style>