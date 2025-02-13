
<template>
    <div class="container p-3 vh-100">
        <img src="/src/assets/images/logo.png " class="w-50">
        <h1 class="mt-5">Anmelden</h1>
        <strong> Wilkommen in der Freiwilligen App. Lorem ipsum dolor sit</strong>
        <form class="mt-5 text-primary" @submit.prevent="login">
            <div class="form-group">
                <label for="inputField">Benutzer</label>
                <input type="text" required id="inputEmail" class="form-control" aria-describedby="passwordHelpBlock"
                    v-model="email" />
                    <small id="emailHelp" class="form-text text-muted">Some Info</small>
            </div>

            <div class="form-group">
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
        <RegisterCard></RegisterCard>
       
            <!--    <Fingerprint></Fingerprint> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Fingerprint from '@/components/Fingerprint.vue';
import RegisterCard from '@/components/RegisterCard.vue';

const email = ref('');
const password = ref('');

const login = () => {
    localStorage.setItem('authToken', 'your-auth-token');
}
</script>
