<style lang="css" scoped>
.btn-outline-secondary {
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-left: 0;
    --bs-btn-hover-bg: white;
    --bs-btn-active-color: gray;
    --bs-btn-hover-color: gray
}
</style>
<template>
    <div class="container p-3 vh-100">
        <img src="/src/assets/images/logo.png " class="w-50">
        <h1 class="mt-5">Anmelden</h1>
        <strong> Wilkommen in der Freiwilligen App. Lorem ipsum dolor sit</strong>
        <form class="mt-3 text-primary" @submit.prevent="login">
            <div class="form-group">
                <label for="inputField">Benutzer</label>
                <input type="text" required id="inputEmail" class="form-control" aria-describedby="passwordHelpBlock"
                    v-model="email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>

            <div class="form-group"><!-- titel näher to input-->
                <label for="inputPassword">Passwort</label>
                <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock"
                    v-model="password">
            </div>
        </form>

        <div class="d-flex gap-2 justify-content-end ">
            <router-link to="/registry" class="btn btn-outline-primary" type="submit">Registrieren</router-link>
            <router-link to="/" class="btn btn-primary text-light" :onClick="login" type="submit">Anmelden</router-link>
        </div>
        <a class="d-flex justify-content-end mt-2 small text-decoration-none text-muted" href="#">
            Haben Sie ihr Passwort vergessen?
        </a>

            <Fingerprint></Fingerprint>
     

    </div>

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
