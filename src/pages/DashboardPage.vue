<template>
    <div class="q-pa-xl row wrap items-center justify-center container">
        <h4 class="text-center">¡Hola {{ useDatabase.documents?.nickname }}! <br>¿Que quieres hacer hoy?</h4>
    </div>
    <section class="q-px-xl row wrap items-center justify-center container">

        <q-card class="my-card q-mx-xl shadow-5">
            <q-img
                src="https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/images%2Fpersonas-avaluo-inmueble.jpg?alt=media&token=13d46b14-b3ee-49cc-b346-8227844ea0d1">
                <div class="absolute-bottom">
                    <div class="text-h6 text-center text-avaluo">Personas</div>
                    <div class="text-subtitle2 q-mt-md">Sal de dudas sobre comprar o vender inmuebles con el precio correcto
                    </div>
                </div>
            </q-img>

            <q-card-actions align="center">
                <q-btn @click="router.push(`${route.matched[0].path}avaluo-inmueble`)" color="primary">Avaluar
                    Inmueble</q-btn>
            </q-card-actions>
        </q-card>
        <q-card class="my-card q-mx-xl shadow-5">
            <q-img
                src="https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/images%2Fpersonas-avaluo-certificado.jpg?alt=media&token=a75ad1a8-750f-45b4-8b57-d5d5d6ae857f">
                <div class="absolute-bottom">
                    <div class="text-h6 text-center text-avaluo">Avalúo certificado</div>
                    <div class="text-subtitle2 q-mt-md">Pide un avalúo certificado fácil y rápido</div>
                </div>
            </q-img>

            <q-card-actions align="center">
                <q-btn @click="router.push(`${route.matched[0].path}avaluo-inmueble`)" color="primary">Solicitar
                    Avalúo</q-btn>
            </q-card-actions>
        </q-card>
    </section>
</template>

<script setup>
import { userDatabaseStore } from "../stores/database";
import { useRouter, useRoute } from 'vue-router';

const useDatabase = userDatabaseStore();
const router = useRouter();
const route = useRoute();

</script>

<style lang="scss" scoped>
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