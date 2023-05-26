<template>
  <q-card class="column card-home card">
    <q-icon :name="homeImg"></q-icon>
    <div class="card-body q-my-lg">
      <h5 class="card-home_h5 card-title">{{ homeTitle }}</h5>
      <p class="card-home_p card-text">
        {{ homeText }}
      </p>
      <q-btn @click="router.push(`/${useDataBase.documents.typeUser}${homeUrl}`)" class="q-mt-lg" color="primary"
        :label="homeBtn"></q-btn>
    </div>
  </q-card>
</template>

<script setup>
import { userDatabaseStore } from "../../stores/database";
import { useRouter, useRoute } from 'vue-router';
import { toRefs } from "vue";

const useDataBase = userDatabaseStore();
const router = useRouter();
const route = useRoute();

const props = defineProps({
  homeImg: String,
  homeTitle: String,
  homeText: String,
  homeBtn: String,
  homeUrl: String,
});

const { homeImg, homeTitle, homeUrl, homeText, homeBtn } = toRefs(props);
</script>

<style lang="scss" scoped>
.card-home {
  width: 100%;
  max-width: 350px;
  padding: 40px 32px 10px 32px;
  border-radius: 16px;
  border: none;
}

.q-icon {
  font-size: 24px;
  color: $primary;
  background-color: #f092d0;
  padding: 10px;
  border-radius: 50%;
  background: #F9E6F1;
  width: 100%;
  max-width: 40px;
  height: 40px;
}

.card-home_img {
  width: 70px;
  text-align: center;
  margin: 0 auto;
}

.card-home_h5 {
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #282a33;
}

.card-home_p {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #6b7082;
}

.card-text2 {
  font-size: 12px;
}

@media (max-width: 992px) {}
</style>
