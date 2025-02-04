<script setup>
import { useRoute, useRouter } from 'vue-router'
import user from "@/assets/data/volunteer"

const route = useRoute()
const isHomePage = route.path === '/'

const router = useRouter()
const handleLogout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userData');
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
            <div class="col ps-0 text-light navbar-brand">
              {{ title }}
            </div>
            <div class="col text-end me-5 ">
              <router-link class="navbar-brand  " to="/profile">
                <img src="/src/assets/images/profile.jpg" width="70" height="70"
                  class="d-inline-block align-top rounded-circle mb-2 " alt="">
              </router-link>
            </div>
          </div>

          <div class="d-flex justify-content-between w-100">
              <router-link to="/qrCode">
                <img src="/src/assets/images/qrCode.png" width="79" height="79" class="bg-light" alt="">
              </router-link>
              
            <div class="d-flex text-light text-end d-flex align-items-start justify-content-end">
              <div>
                <span>{{ user.name }}</span>
                <br>
                <small class="text-top">Rolle: {{ user.jobTitle }}</small>
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
                  <li> <button class="dropdown-item" @click="handleLogout">Abmelden</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
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