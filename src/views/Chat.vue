<script setup>
import ChatHistory from '@/components/ChatHistory.vue';
import ChatNavbar from '@/components/ChatNavbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <ChatNavbar name="Chat"></ChatNavbar>
  <div class="tab-navigation" style="background-color: var(--bs-gray-200);">
    <div class="nav nav-underline d-inline-flex">
      <div class="nav-item">
        <RouterLink class="nav-link" to="/search">
          <i class="bi bi-search"></i>
        </RouterLink>
      </div>
      <div class="nav-item">
        <a class="nav-link text-primary  active" aria-current="page" href="#">Übersicht</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="#">Archiv</a>
      </div>
    </div>
  </div>
  <div class="content-container">
    <ChatHistory></ChatHistory>
  </div>
  <Footer></Footer>
</template>
<style></style>
