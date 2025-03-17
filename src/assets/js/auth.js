import { useRouter } from 'vue-router';
import { ref } from 'vue';

export function useAuth() {
    const router = useRouter();
    const loginForm = ref(null);
    const username = ref('');

    const login = () => {
        const formElement = loginForm.value;
        const usernameInput = document.getElementById('inputUsername');

        // Define user roles
        const users = {
            'herbert mayer': 'admin',
            'liselotte pulver': 'volunteer'
        };

        // Check if username is valid
        if (!usernameInput) {
            username.value = 'Liselotte Pulver' //Default setting, for onboarding process, only for prototyp
        }
        const role = users[username.value.toLowerCase()];
        if (usernameInput) {
            if (!role) {
                usernameInput.setCustomValidity('Invalid username');
            } else {
                usernameInput.setCustomValidity('');
            }
            if (!formElement.checkValidity()) {
                formElement.classList.add('was-validated');
                return;
            }
        }

        // Store user info
        localStorage.setItem('authToken', 'your-auth-token'); // Fake token
        localStorage.setItem('userRole', role); // Store role
        localStorage.setItem('username', username.value.toLowerCase());

        router.push('/'); // Redirect to Home
    };

    return { loginForm, username, login };
}
