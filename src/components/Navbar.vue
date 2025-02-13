<style>
.profil-img {
  position: absolute;
  top: +1rem;
}

.user {
  line-height: 110%;
}
</style>
<template>
  <nav class="navbar bg-dark">
    <div class="container">
      <div class="navbar w-100">
        <template v-if="!isHomePage">
          <router-link class="navbar-brand d-flex align-items-center " to="/">
            <i class="bi bi-arrow-left me-2"></i>
            {{ title }}
          </router-link>
        </template>
        <template v-if="isHomePage">

          <div class="row w-100">
            <div class="col p-0  navbar-brand">
              {{ title }}
            </div>
            <div class="col text-end me-5 ">
              <router-link class="navbar-brand  " to="/profile">
                <img src="/src/assets/images/profile.jpg" width="70" height="70"
                  class="d-inline-block align-top rounded-circle mb-1" alt="profile picture">
              </router-link>
            </div>
          </div>

          <div class="d-flex justify-content-between w-100">
            <router-link to="/qrCode">
              <img src="/src/assets/images/qrCode.png" width="79" height="79" class="bg-light" alt="QRCode">
            </router-link>

            <div class="d-flex  text-end d-flex align-items-start justify-content-end">
              <div class="user">
                <span>{{ user.name }}</span>
                <br>
                <small class="text-top">Rolle: {{ user.jobTitle }}</small>
              </div>
              <div class="btn-group ms-2">
                <button class="btn btn-light-outline active rounded-2 p-2 py-1 " type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i class="bi bi-chevron-compact-down fs-2"></i> <!--Pfeil größer button kleiner-->
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item disabled" href="#">Einstellungen</a></li>
                  <li><a class="dropdown-item disabled" href="#">Another action</a></li>
                  <li><a class="dropdown-item disabled" href="#">Something else here</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li> <button class="dropdown-item" @click="handleLogout">Abmelden <i
                        class="bi bi-box-arrow-right"></i></button>
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

<script setup>
import { useRoute, useRouter } from 'vue-router'
import user from "@/assets/data/volunteer"
import { computed } from 'vue'


defineOptions({
  name: "Navbar"
});


defineProps({
  title: {
    type: String,
    required: true
  }
});


const route = useRoute();
const router = useRouter();


const isHomePage = computed(() => route.path === '/');


const handleLogout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userData');
  router.push('/login');
};
</script>
