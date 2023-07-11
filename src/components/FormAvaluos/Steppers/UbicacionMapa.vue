<template>
  <div class="container">
    <h2>Ubica el inmueble</h2>
    <p class="q-mt-md">Digita la dirección del inmueble, revisa el punto de ubicación en el mapa y continua con el
      reporte.
      Si no sabes la
      dirección exacta, ubica el punto directamente en el mapa.</p>

    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Departamento:</label>
        <q-select outlined v-model="selectedDepartment" @update:model-value="getCities" :options="departaments"
          label="Selecciona..." />
      </div>
      <div class="col-12 col-md-6 q-pa-sm">
        <label>Ciudad:</label>
        <q-select outlined v-model="selectedCity" @update:model-value="getAddress" :options="cities"
          label="Selecciona..." />
      </div>
    </div>
    <div class="row justify-between items-end content-end ">
      <div class="col-12 col-md-4 q-pa-sm">
        <label>Dirección:</label>
        <q-select outlined v-model="address1" @update:model-value="getStreet" :options="streetOptions"
          label="Selecciona..." />
      </div>
      <div class="col-3 col-md-2 q-pa-sm">
        <q-input outlined v-model="address2" label="Ej: 98 A" />
      </div>
      <div class="col-1 q-pa-sm q-mb-md">
        <span>#</span>
      </div>
      <div class="col-4 col-md-2 q-pa-sm">
        <q-input outlined v-model="address3" label="Ej: 45" />
      </div>
      <div class="col-4 col-md-2 q-pa-sm">
        <q-input outlined v-model="address4" label="Ej: 18 Este" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-pa-sm">
        <label>Otras indicaciones:</label>
        <q-input outlined v-model="address5" label="Apartamento, Torre, Conjunto residencial" />
      </div>
    </div>
    <div class="q-pa-sm">

      <q-btn color="primary" class="q-pa-sm" icon="mdi-google-maps" @click="getCoordinates">Ubicar en el mapa</q-btn>

    </div>
    <div id="maps">
      <GoogleMaps :latMap="latitude" :lngMap="longitude" :zoomMap="zoom" />
    </div>
  </div>
</template>

<script setup>
import GoogleMaps from "../../Maps/GoogleMaps.vue";
import { userFormAvaluoStore } from "../../../stores/FormAvaluo";
import departaments from "../../../data/departaments.json";
import streetOptions from "../../../data/streetOptions.json";
import { ref } from "vue";

const useFormAvaluo = userFormAvaluoStore()
const GOOGLE_MAPS_API_KEY = "AIzaSyDE3YLDQ6nKhdoWiykBIpJP3xZRr4j19Ak"
const selectedDepartment = ref("");
const cities = ref([]);
const selectedCity = ref("");
const selectedCityData = ref("");
const addressSelectedCity = ref("");
const address = ref("");
const address1 = ref("");
const address2 = ref("");
const address3 = ref("");
const address4 = ref("");
const address5 = ref("");
const addressComplete = ref("");
const setAdrressComplete = ref();
const latitude = ref(4.71098859);
const longitude = ref(-74.072092);
const locality = ref();
const formattedAddress = ref("calle 2");
const zoom = ref(12);

console.log(useFormAvaluo.documents);

const getLocation = async (address) => {
  cities.value = [];
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_MAPS_API_KEY}`
  );
  const data = await response.json();
  latitude.value = data.results[0].geometry.location.lat;
  longitude.value = data.results[0].geometry.location.lng;
  //locality.value = data.results[0].address_components[2].long_name
  formattedAddress.value = data.results[0].formatted_address
};

const getCities = async () => {
  const response = await fetch(
    `https://www.datos.gov.co/resource/xdk5-pm3f.json?c_digo_dane_del_departamento=${selectedDepartment.value.value}`
  );
  const citiesOptions = await response.json();
  citiesOptions.forEach((city) => {
    cities.value.push(
      {
        value: city.c_digo_dane_del_municipio,
        label: city.municipio,
        departament: city.departamento
      }
    )
  })
};

const getAddress = async () => {
  selectedCityData.value = cities.value.find(
    (city) => city.label === selectedCity.value.label
  );
  addressSelectedCity.value =
    selectedCityData.value.label + "+" + selectedCityData.value.departament;
  getLocation(addressSelectedCity.value)
};

const getStreet = () => {
  address.value = address1.value.label
}

const getCoordinates = () => {
  zoom.value = 17
  address.value += `+${address2.value}+%23+${address3.value}+-+${address4.value}`
  addressComplete.value = `"${address.value}+${addressSelectedCity.value}+colombia"`
  console.log(addressComplete.value);
  getLocation(addressComplete.value);
  setAdrressComplete.value = `${address1.value.label} ${address2.value} # ${address3.value} - ${address4.value}, ${address5.value}`


};

const updateStepOne = () => {
  useFormAvaluo.stepOne(setAdrressComplete.value, formattedAddress.value, selectedDepartment.value.value, selectedCityData.value.value.replace(".", ""), latitude.value, longitude.value);
}

defineExpose({ updateStepOne })

</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.01em;

  color: #282A33;
}

p {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;

  color: #6B7082;
}
</style>

