
<template>
  <Navbar title="Home" />
  <StatNavbar />

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
import { ref,onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import StatNavbar from '@/components/StatNavbar.vue';
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
            club: job.hiringOrganization.name,
            day: new Date(job.datePosted).getDate(),
            month: new Date(job.datePosted).toLocaleString('default', { month: 'long' }),
            location: job.jobLocation.address.addressLocality,
            title: job.title,
            jobs: '0/' + job.totalJobOpenings,
            industry: job.industry,
            id: job.identifier.value,
            swiped: false, // Track swipe state
            contact: "Liselotta Pulver",
        };

        // Categorizing the items based on their status
        if (job.status === 'Certified') {
            certified.value.push(item);
        } else if (job.status === 'Verification Requested') {
            requested.value.push(item);
        } else {
            confirmed.value.push(item);
        }
    });
});
</script>