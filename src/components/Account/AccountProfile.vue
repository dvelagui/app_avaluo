<template>
    <AvatarImage style="width: 120px; height: 120px;" class="q-mt-md" />
    <AvatarName class="q-mb-xl q-mt-md" />
    <ChangeImageProfile />
    <NameProfile />
    <EmailProfile />
    <PhoneProfile />
    <CompanyProfile />
    <AddressProfile />
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

.file-dp {
    margin: 0 auto;
    width: 60%;
}
</style>