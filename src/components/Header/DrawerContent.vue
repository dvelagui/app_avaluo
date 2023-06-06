<template>
  <div v-ripple="true" class="column justify-between items-center">
    <q-list>
      <AvatarAccount />
      <q-item :disable="plan" class="q-mt-md" clickable @click="router.push(useDataBase.documents.typeUser)">
        <q-item-section avatar>
          <q-icon name="fa-sharp fa-solid fa-house" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Inicio</q-item-label>
        </q-item-section>
      </q-item>
      <q-item :disable="plan" clickable @click="router.push(`/${useDataBase.documents.typeUser}/mi-cuenta`)">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-user" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Perfil</q-item-label>
        </q-item-section>
      </q-item>
      <q-item :disable="plan" clickable @click="router.push(`/${useDataBase.documents.typeUser}/reportes`)">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-file-lines" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Reportes</q-item-label>
        </q-item-section>
      </q-item>
      <q-item :disable="plan" clickable @click="router.push(`/${useDataBase.documents.typeUser}/avaluo-certificado`)">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-file-pen" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Avalúo certificado</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="useDataBase.documents?.rol != 'agente' && useDataBase.documents?.typeUser === 'empresas'"
        :disable="plan" clickable @click="router.push(`/${useDataBase.documents.typeUser}/administracion`)">
        <q-item-section avatar>
          <q-icon name="fa-solid fa-gear" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Administración</q-item-label>
        </q-item-section>
      </q-item>


    </q-list>
    <div class="col q-my-xl">
      <a @click="logOut">Cerrar Sesión <q-icon name="fa-solid fa-arrow-right-to-bracket" /></a>
    </div>
  </div>
</template>

<script setup>
import AvatarAccount from '../Account/Avatar/AvatarAccount.vue';
import { userDatabaseStore } from "../../stores/database";
import { useUserStore } from 'src/stores/users';
import { useRouter } from 'vue-router';
import { ref, watch } from "vue";

const useDataBase = userDatabaseStore();
const userStore = useUserStore();
const router = useRouter();
const plan = ref(useDataBase.documents?.plan === 'free' && useDataBase.documents?.typeUser === 'empresas');



const logOut = () => {
  userStore.logOutSesion();
  router.push('/inicio-sesion');
}


</script>

<style lang="scss" scoped>
.q-item__label,
a {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #6B7082;
}

a {
  cursor: pointer;
}

.q-item__section--avatar {
  min-width: 40px;
}

.q-item__section--side {
  padding-left: 16px;
}

.q-icon {
  font-size: 18px;
  color: #6B7082;
}
</style>