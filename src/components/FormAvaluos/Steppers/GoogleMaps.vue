<template>
    <div>
        <h4>posicion actual:</h4>
        <p>Latitud: {{ currPos.lat }}</p>
        <p>Longitude: {{ currPos.lng }}</p>

    </div>
    <div id="mapDiv"></div>
</template>

<script setup>
/* eslint-disable no-undef */
import { computed, onMounted, toRefs } from "vue";
import { useGeolocation } from "src/functions/useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";
import { ref } from "firebase/storage";

const GOOGLE_MAPS_API_KEY = "AIzaSyDE3YLDQ6nKhdoWiykBIpJP3xZRr4j19Ak"
const mapDiv = ref();

const { coords } = useGeolocation()

const currPos = computed(() => ({
    lat: coords.value.latitude,
    lng: coords.value.longitude
}))

const props = defineProps({
    locationLat: Number,
    locationLng: Number
})

const { locationLat, locationLng } = toRefs(props)

const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
onMounted(async () => {
    await loader.load()
    new google.maps.Map(document.querySelector('#mapDiv'), {
        center: { lat: 4.710988, lng: -74.072092 },
        zoom: 7
    })
})


</script>

<style lang="scss" scoped></style>