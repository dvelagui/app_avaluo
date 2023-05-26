<template>
    <div class="q-pl-xl">
        <div class="row items-center justify-start q-my-xl">
            <div class="col-12 col-md-4 q-px-md">
                <NameProfile />
            </div>
            <div class="col-12 col-md-4 q-px-md">
                <AddressProfile />
            </div>
        </div>
        <div class="row items-center justify-start q-my-xl">
            <div class="col-12 col-md-4 q-px-md">
                <PhoneProfile />
            </div>
            <div class="col-12 col-md-4 q-px-md">
                <EmailProfile />
            </div>
        </div>
    </div>
</template>

<script setup>
import AvatarImage from './Avatar/AvatarImage.vue';
import AvatarName from './Avatar/AvatarName.vue';
import ChangeImageProfile from './DataProfile/ChangeImageProfile.vue';
import NameProfile from './DataProfile/NameProfile.vue';
import EmailProfile from './DataProfile/EmailProfile.vue';
import PhoneProfile from './DataProfile/PhoneProfile.vue';
import AddressProfile from './DataProfile/AddressProfile.vue';
import CompanyProfile from './DataProfile/CompanyProfile.vue';



</script>

<style lang="scss" scoped>
p,
.file-dp {
    margin: 0;
}
</style>