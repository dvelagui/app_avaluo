<template>
    <q-btn outline class="q-my-sm" icon="mdi-cellphone-iphone" color="info" :label="`${btnGoogle} con tu telefono`"
        @click="openPhone" />
    <q-slide-transition>
        <div v-show="formPhone">
            <q-form @submit.prevent="accessPhone" class="q-gutter-md q-mt-sm">
                <q-input filled v-model="nickname" type="text" label="Nombre *" lazy-rules
                    :rules="[val => val && val.length >= 10 || 'Por favor, ingresa tu nombre']" />

                <q-input prefix="+57" filled type="tel" v-model="phoneNumber" label="Numero de Celular *" lazy-rules
                    :rules="[val => val && val.length >= 10 || 'Por favor, ingresa un telefono valido']" />
                <button class="btn-simple q-w-50" type="submit" :disable="userStore.loadingUser">Enviar Código</button>

            </q-form>
        </div>
    </q-slide-transition>
    <q-slide-transition>
        <div v-show="formCode">
            <q-form class="q-gutter-md q-mt-sm">

                <q-input filled type="number" v-model="codeNumber" label="Ingresa el Código *" lazy-rules
                    :rules="[val => val && val.length > 5 || 'Por favor, ingresa el código que enviamos']" />
                <a @click="verifyCode" class="btn-simple" type="submit" :disable="userStore.loadingUser">Continuar</a>

            </q-form>
        </div>
    </q-slide-transition>
    <div id="recaptcha-container"></div>
</template>

<script setup>
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "src/firebaseConfig";
import { useUserStore } from 'src/stores/users';
import { toRefs, ref } from 'vue';
import { useRouter } from 'vue-router';
import { QSpinnerPuff, useQuasar } from 'quasar'
const $q = useQuasar();

const nickname = ref();

const userStore = useUserStore();
const router = useRouter();

const props = defineProps({
    btnGoogle: String
});


const { btnGoogle } = toRefs(props);
const phoneNumber = ref();
const codeNumber = ref();
const formPhone = ref(false);
const formCode = ref(false);

const openPhone = () => {
    if (formPhone.value === false && formCode.value === false) {
        formPhone.value = true;
    } else {
        formPhone.value = false;
    }
}

const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
        },
        'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
        }
    }, auth);
}

const accessPhone = async () => {
    generateRecaptcha();
    const phone = `+57${phoneNumber.value}`
    console.log(phone);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            console.log(error);
        });
    formPhone.value = false;
    formCode.value = true;

}

const verifyCode = () => {
    confirmationResult.confirm(codeNumber.value).then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
    }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
    });
    router.push('/')
}

</script>

<style lang="scss" scoped>
.q-btn {
    text-transform: uppercase;
    width: 100%;
    max-width: 300px;
    min-width: 300px;
}

button {
    border: none;
}
</style>