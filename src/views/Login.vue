<style lang="css" scoped>
.btn-outline-secondary{ 
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-left: 0cap;
    color:--bs-border-color;
    --bs-btn-hover-bg:white;
}
#inputPassword{
    border-right: 0cap;
}
</style>
<template>
    <div class="container p-3">
        <img src="/src/assets/images/logo.png " class="w-50">
        <h1 class="mt-5">Anmelden</h1>
        <strong> Wilkommen in der Freiwilligen App. Lorem ipsum dolor sit</strong>
        <form class="mt-3 text-primary" @submit.prevent="login">
            <div>
                <label for="username" class=" form-label">Benutzer</label>
                <input type="text" id="inputemail" class="form-control" aria-describedby="passwordHelpBlock"  v-model="email">
            </div>
            <div>
                <label for="inputPassword" class=" form-label">Passwort</label>
                <div class="input-group mb-3">
                    <input type="password" id="inputPassword" class="form-control"
                        aria-describedby="passwordHelpBlock"  v-model="password">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-eye-slash"></i> </button>
                </div>               
            </div>
        </form>
        <div class="text-center m-2">
            <small href="#">
                Haben Sie ihr Passwort vergessen?
            </small>
        </div>
        <div class="d-flex gap-2 justify-content-end ">
            <router-link to="/registry" class="btn btn-outline-primary" type="submit">Registrieren</router-link>
            <router-link to="/" class="btn btn-primary text-light" :onClick="login" type="submit">Anmelden</router-link>
        </div>
    </div>
    <Fingerprint></Fingerprint>
</template>

<script setup>

import { ref } from 'vue';
import Fingerprint from '@/components/Fingerprint.vue';

const email = ref('');
const password = ref('');

const login = () => {
    localStorage.setItem('authToken', 'your-auth-token');
}
</script>
