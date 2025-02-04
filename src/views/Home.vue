<script setup>
import CardCarousell from '@/components/CardCarousell.vue';
import Footer from '@/components/Footer.vue';
import List from '@/components/List.vue';
import Navbar from '@/components/Navbar.vue';
import StatNavbar from '@/components/StatNavbar.vue';
</script>

<template>
  <Navbar title="Home"></Navbar>
  <StatNavbar></StatNavbar>
  
  <img src="/src/assets/images/statistik.png" class="mx-auto d-block img-fluid">

  <div class="container p-2">
    <h2>Deine aktuellen Aktivitäten</h2>
    <List></List>
    <h2>Empfehlungen</h2>
    <CardCarousell></CardCarousell>
  </div>
  
  <Footer></Footer>

</template>
