<template>
  <gmp-map :center="{ lat: latMap, lng: lngMap }" :zoom="zoomMap" map-id="DEMO_MAP_ID" style="width: 100%; height: 400px">
    <gmp-advanced-marker :zoom="17" :position="{ lat: latMap, lng: lngMap }" title="Colombia"></gmp-advanced-marker>
  </gmp-map>
</template>
<script setup>
import { toRefs } from 'vue';

/* url = https://developers.google.com/maps/documentation/javascript/advanced-markers/accessible-markers?hl=es-419 */

const props = defineProps({
  latMap: Number,
  lngMap: Number,
  zoomMap: Number,
})

const { latMap, lngMap, zoomMap } = toRefs(props)

</script>
<style>
body {
  margin: 0;
}
</style>

