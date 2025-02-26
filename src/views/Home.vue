<script setup>
import CardBody from '@/components/CardBody.vue';
import CardBodyVolunteer from '@/components/CardBodyVolunteer.vue';
import CardCarousell from '@/components/CardCarousell.vue';
import Footer from '@/components/Footer.vue';
import List from '@/components/List.vue';
import Navbar from '@/components/Navbar.vue';
import StatNavbar from '@/components/StatNavbar.vue';
</script>

<template>
  <Navbar title="Home"></Navbar>
  <StatNavbar></StatNavbar>

  <div class="content-container">
    <CardBody></CardBody>
    <CardBodyVolunteer></CardBodyVolunteer>
    <div class="space">
      <h1>Du warst diese Woche top engagiert!</h1>
      <img src="/src/assets/images/statistik.png" alt="statistic" class="mx-auto d-block img-fluid">
    </div>

    <List title="Deine aktuellen Aktivitäten"></List>
    <CardCarousell title="Deine aktuellen Aktivitäten"></CardCarousell>

  </div>
  
  <Footer></Footer>
</template>
