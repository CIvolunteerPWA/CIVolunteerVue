<template>
    <div class="container p-3 vh-100">
        <Logo/>
        <h1 class="mt-5">Anmelden</h1>
        <p>Freiwilliges Engagement hat in Österreich einen großen Stellenwert.</p>
        <form ref="loginForm" class="mt-5 text-primary needs-validation" novalidate @submit.prevent="login">
            <div class="form-group">
                <label for="inputField">Benutzer</label>
                <input type="text" required id="inputUsername" class="form-control" v-model="username" />
                <div class="invalid-feedback">
                    Dieser Username existiert nicht!
                </div>
            </div>

            <div class="form-group">
                <label for="inputPassword">Passwort</label>
                <input type="password" id="inputPassword" required class="form-control"
                    aria-describedby="passwordHelpBlock" v-model="password">

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
import RegisterCard from '@/components/RegisterCard.vue';
import { ref } from 'vue';
import { useAuth } from '@/assets/js/auth';
import Logo from '@/components/Logo.vue';
const { loginForm, username, login } = useAuth();
const password = ref('');
</script>
