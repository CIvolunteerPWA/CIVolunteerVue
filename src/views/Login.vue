<template>
    <div class="container p-3 vh-100">
        <img src="/src/assets/images/logo.png " class="w-50">
        <h1 class="mt-5">Anmelden</h1>
        <strong> Wilkommen in der Freiwilligen App.</strong>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const loginForm = ref(null);
const username = ref('');
const password = ref('');

const login = () => {
    const formElement = loginForm.value;
    const usernameInput = document.getElementById('inputUsername');
    
    // Define user roles
    const users = {
        'herbert mayer': 'admin',
        'liselotte pulver': 'volunteer'
    };

    // Check if username is valid
    const role = users[username.value.toLowerCase()];
    if (!role) {
        usernameInput.setCustomValidity('Invalid username');
    } else {
        usernameInput.setCustomValidity('');
    }

    if (!formElement.checkValidity()) {
        formElement.classList.add('was-validated');
        return;
    }

    // Store user info
    localStorage.setItem('authToken', 'your-auth-token'); // Fake token
    localStorage.setItem('userRole', role); // Store role

    router.push('/'); // Redirect to Home
};
</script>

