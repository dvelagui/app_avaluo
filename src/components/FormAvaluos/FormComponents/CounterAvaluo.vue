<template>
  <div class="row items-center justify-center counter">
    <p class="col-2 btn" type="button" @click="handleMinus">-</p>
    <p class="col-8 count">{{ counter }}</p>
    <p class="col-2 btn" type="button" @click="handlePlus">+</p>
  </div>
</template>
<script setup>
import { ref, toRefs } from 'vue';
import { userFormAvaluoStore } from "../../../stores/FormAvaluo";

const counter = ref(0)

const useFormAvaluo = userFormAvaluoStore();

const props = defineProps({ count: String });

const { count } = toRefs(props)

const handlePlus = () => {

  switch (count.value) {
    case "Hab":
      counter.value++;
      useFormAvaluo.setHab(counter.value)
      break;
    case "Banos":
      counter.value++;
      useFormAvaluo.setBanos(counter.value)
      break;
    case "Garajes":
      counter.value++;
      useFormAvaluo.setGarajes(counter.value)
      break;
    case "Ascensor":
      counter.value++;
      useFormAvaluo.setAscensor(counter.value)
      break;
    default:
      break;
  }
}
const handleMinus = () => {
  if (counter.value === 0) {
    return
  }
  switch (count.value) {
    case "Hab":
      counter.value--;
      useFormAvaluo.setHab(counter.value)
      break;
    case "Banos":
      counter.value--;
      useFormAvaluo.setBanos(counter.value)
      break;
    case "Garajes":
      counter.value--;
      useFormAvaluo.setGarajes(counter.value)
      break;
    case "Ascensor":
      counter.value--;
      useFormAvaluo.setAscensor(counter.value)
      break;
    default:
      break;
  }
};
</script>
<style lang="scss" scoped>
.btn {
  font-size: 25px;
  font-weight: 800;
  color: #A6AEC2;
  cursor: pointer;
  margin: 0;
  text-align: center;
}

.btn:hover {
  color: $primary;
}

.count {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #282A33;
  text-align: center;
  margin: 0;
}

.counter {
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 9px;
}
</style>
