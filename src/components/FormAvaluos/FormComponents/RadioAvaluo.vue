<template>
  <label for="">{{ labelName }}</label>
  <div class="row justify-center items-center">
    <div class="col-6 col-md-6">
      <q-radio v-model="checkoption" val="Si" label="Si" />
      <q-radio v-model="checkoption" val="No" label="No" />
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue'
const checkoption = ref('No');

const props = defineProps({
  labelName: String
})
const { labelName } = toRefs(props);

const emit = defineEmits(["checkvalue"]);

watch(checkoption, () => {
  console.log(checkoption.value);
  emit("checkvalue", checkoption.value)
})


</script>

<style lang="scss" scoped>
label {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #6B7082;
}
</style>
