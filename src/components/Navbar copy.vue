<script setup>
import { useRoute,useRouter } from 'vue-router'

import { ref, watchEffect, computed } from 'vue';

const route = useRoute()
const router = useRouter()
const isHomePage = route.path === '/'

const theme = ref(localStorage.getItem('theme') || 'light');
watchEffect(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value);
  localStorage.setItem('theme', theme.value);
});

// Function to toggle between themes
const toggleTheme = () => {
  theme.value = theme.value == 'dark' ? 'light' : 'dark'
};

const isDarkMode = computed({
  get() {
    return theme.value === 'dark'; //
  },
  set(value) {
    theme.value = value ? 'dark' : 'light';
  }
});


const handleLogout = () => {
  // Clear localStorage or other user data
  localStorage.removeItem('authToken');
  localStorage.removeItem('userData'); // Example: If you store user info
  
  // Redirect to the login page
  router.push('/login');
};
</script>
<style>
.profil-img {
  position: absolute;
  top: +1rem;

}
</style>
<template>
  <nav class="navbar bg-dark">
    <div class="container">
      <div class="navbar w-100">
        <template v-if="!isHomePage">
          <router-link class="navbar-brand d-flex align-items-center text-light" to="/">
            <i class="bi bi-arrow-left me-2"></i>
            {{ title }}
          </router-link>
        </template>
        <template v-if="isHomePage">

          <div class="row w-100">
            <div class="col ps-5 text-light navbar-brand">
              {{ title }}
            </div>
            <div class="col text-end me-5 ">
              <router-link class="navbar-brand  " to="/profile">
                <img src="/src/assets/images/profile.jpg" width="70" height="70"
                  class="d-inline-block align-top rounded-circle mb-2 " alt="">
              </router-link>
            </div>
          </div>

          <div class="d-flex justify-content-between  w-100">
            <div class=" mr-auto  flex-shrink-1 px-5">
              <router-link to="/qrCode">
                <img src="/src/assets/images/qrCode.png" width="79" height="79" class="bg-light" alt="">
              </router-link>
            </div>
            <div class="d-flex text-light text-end d-flex align-items-start justify-content-end">
              <div>
                <span>Pipilotta Lechner</span>
                <br>
                <small class="text-top">Rolle: Freiwillige</small>
              </div>
              <div class="btn-group ms-2">
                <button class="btn btn-lg btn-light-outline btn-lg active  rounded-2" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-arrow-down-short text-light"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Einstellungen</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>

                  <li>  <button class="dropdown-item" @click="handleLogout">Abmelden</button>
                     </li>
                </ul>
              </div>

            </div>

          </div>



        </template>
      </div>



      <!-- Right side: Profile image and name -->
 

    <!-- 
  
        <button class="btn text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-chevron-down"></i>
      </button>

      </template>
    -->
      <!-- Offcanvas Menu button -->


      <!-- Offcanvas Menu -->
      <div class="offcanvas offcanvas-end" id="navbarSupportedContent">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" data-bs-dismiss="offcanvas">
          <ul class="navbar-nav justify-content-start flex-grow-1">
            <li class="nav-item">
              <router-link class="nav-link" to="/" aria-current="page"><i class="bi bi-house"></i> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/aktivities" aria-current="page"><i class="bi bi-folder"></i> Meine
                Nachweise</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile"><i class="bi bi-person"></i> Mein Profil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/offenestellen"><i class="bi bi-briefcase"></i> Offene
                Stellen</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/chat"><i class="bi bi-chat"></i> Chat <span
                  class="badge bg-danger">5</span></router-link>
            </li>
            <li class="nav-link nav-item d-flex align-items-center">
              <i class="bi bi-moon"></i>
              <label class="me-2" for="flexSwitchCheckDefault">Dark Mode</label>
              <div class="form-check form-switch">
                <!-- Bind the checkbox to darkMode state using v-model -->
                <input id="darkModeToggle" class="form-check-input" type="checkbox" role="switch" @click="toggleTheme()"
                  v-model="isDarkMode">
              </div>
            </li>
          </ul>

          <h6 class="mt-3">Nachrichten</h6>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="#"><i class="bi bi-chat"></i> Feuerwehr Stockerau <span
                  class="badge bg-danger">1</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#"><i class="bi bi-chat"></i> Thomas Mustermann <span
                  class="badge bg-danger">1</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#"><i class="bi bi-chat"></i> Caritas Wien <span
                  class="badge bg-danger">2</span></router-link>
            </li>
          </ul>
        </div>
        <div class="border-top bottom">
          <ul class="nav justify-content-around" data-bs-dismiss="offcanvas">
            <li class="nav-item">
              <router-link class="nav-link pe-0 text-center" to="/profile">
                <i class="bi bi-person-circle" style="font-size: 1.5rem;"></i>
                <div>Profile</div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link pe-0 text-center" to="/downloads">
                <i class="bi bi-download" style="font-size: 1.5rem;"></i>
                <div>Downloads</div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link pe-0 text-center" to="/settings">
                <i class="bi bi-gear" style="font-size: 1.5rem;"></i>
                <div>Settings</div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-center" to="/login">
                <i class="bi bi-box-arrow-right" style="font-size: 1.5rem;"></i>
                <div>Logout</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
      required: true, // Make sure the title is passed
    },
  },
};
</script>