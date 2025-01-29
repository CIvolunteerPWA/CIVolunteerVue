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
 
  <div class="container p-2">
    <img src="/src/assets/images/statistik.png" class="p-0 img-fluid" >
    <h2 class="p-2">Deine aktuellen Aktivitäten</h2>
    <List></List>
    <h2 class="p-2">Empfehlungen</h2>
    <CardCarousell></CardCarousell>
  </div>
  
  <Footer></Footer>

</template>
