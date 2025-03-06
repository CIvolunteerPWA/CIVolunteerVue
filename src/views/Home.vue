<template>
  <Navbar title="Home" />
  <StatisticNavbar />

  <div class="content-container">

    <template v-if="userRole === 'admin'">
      <CardBody />
      <SwipeList title="Anfragen Nachweise" :items="requested"></SwipeList>
    </template>

    <template v-if="userRole === 'volunteer'">
      <CardBodyVolunteer />
      <div class="space">
        <h1>Du warst diese Woche top engagiert!</h1>
        <img src="/src/assets/images/statistik.png" alt="statistic" class="mx-auto d-block img-fluid">
      </div>
      <List title="Deine aktuellen Aktivitäten" />
      <CardCarousell title="Deine aktuellen Aktivitäten" />
    </template>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import StatisticNavbar from '@/components/StatisticNavbar.vue';
import CardBody from '@/components/CardBody.vue';
import CardBodyVolunteer from '@/components/CardBodyVolunteer.vue';
import CardCarousell from '@/components/CardCarousell.vue';
import List from '@/components/List.vue';
import SwipeList from '@/components/SwipeList.vue';
import Footer from '@/components/Footer.vue';
import verifications from '@/assets/data/verifications.json';

const userRole = ref(localStorage.getItem('userRole')); // Get role
const certified = ref([]);
const requested = ref([]);
const confirmed = ref([]);

onMounted(() => {
  verifications.itemListElement.forEach(job => {
    const item = {
      club: job.organization.name,
      hours: job.hours,
      requester: job.requester.name,
      title: job.name,
      id: job.identifier,
      swiped: false, // Track swipe state
    };

    // Categorizing the items based on their status
    if (job.status === 'Pending') {
      requested.value.push(item);
    } else if (job.status === 'Approved') {
      confirmed.value.push(item);
    } else {
      certified.value.push(item);
    }
  });
});
</script>