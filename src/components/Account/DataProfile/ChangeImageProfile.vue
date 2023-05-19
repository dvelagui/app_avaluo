<template>
    <q-file style="max-width: 300px; margin: auto;" rounded outlined bottom-slots v-model="model"
        label="Cambiar Foto de Perfil" counter max-files="1" max-file-size="102400" accept=".jpg, image/*"
        @rejected="onRejected">

        <template v-slot:before>
            <q-icon name="attachment" />
        </template>

        <template v-slot:append>
            <q-icon v-if="model !== null" color="negative" name="cancel" @click.stop.prevent="model = null"
                class="cursor-pointer" />
            <q-icon @click="uploadAvatar" v-if="model !== null" color="positive" name="check_circle"
                class="cursor-pointer" />
            <q-icon v-if="model == null" name="search" @click.stop.prevent="model = null" />
        </template>

        <template v-slot:hint>
            PNG / JPG - Max: 1MB
        </template>

    </q-file>
    <q-linear-progress v-show="progress" size="25px" :value="progress1" color="primary">
        <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="primary" :label="progressLabel1" />
        </div>
    </q-linear-progress>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { userDatabaseStore } from 'src/stores/database';
import { ref as storageReference, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "src/firebaseConfig";
import { ref, computed } from 'vue';

const $q = useQuasar()
const model = ref(null);
const useDataBase = userDatabaseStore();
const progress1 = ref(0);
const progress = ref(false);

const progressLabel1 = computed(() => (progress1.value * 100).toFixed(2) + '%')

const uploadAvatar = () => {
    progress.value = true;

    const metadata = {
        contentType: "image/jpeg",
    }
    progress1.value = 0.2
    const storageRef = storageReference(storage, "avatars/" + model.value.name);
    uploadBytes(storageRef, model.value, metadata).then((snapshot) => {
        progress1.value = 0.5
        getDownloadURL(storageReference(storage, snapshot.metadata.fullPath)).then((url) => {
            progress1.value = 0.8
            useDataBase.UpdateUserData(useDataBase.documents?.avatar, url)
            setTimeout(() => {
                progress1.value = 1
                progress.value = false;
                model.value = null;
            }, 2000)
        })
    })

}


const onRejected = (rejectedEntries) => {
    $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} Tu archivo no cumple con las condiciones`
    })
}
</script>

<style lang="scss" scoped>

</style>