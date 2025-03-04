<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ChatHistory from '@/components/ChatHistory.vue';
import ChatNavbar from '@/components/ChatNavbar.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();

</script>

<template>
  <ChatNavbar :name="route.params.name"></ChatNavbar>

  <div class="content-container">
    <ChatHistory></ChatHistory>
  </div>
  <Footer></Footer>
</template>

<style></style>
