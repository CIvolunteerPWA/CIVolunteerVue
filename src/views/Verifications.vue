<template>
    <Navbar title="Nachweise"></Navbar>


    <div class="content-container ">
        <template v-if="userRole === 'admin'">
         <CardBody/>
            <SwipeList title="Anfragen Nachweise" :items="requested"></SwipeList>
            <SwipeList title="Archiv" :items="confirmed"></SwipeList>
           
        </template>
        <template v-if="userRole === 'volunteer'">
            <h1 class="p-2">Ihre Nachweise auf einem Blick</h1>
            <SwipeList title="Offene Anfragen" :items="requested"></SwipeList>
            <SwipeList title="Zertifizierte Nachweise" :items="certified"></SwipeList>
            <SwipeList title="Bestätigten Nachweise" :items="confirmed"></SwipeList>
            <div class="justify-content-center gap-1 d-flex space">
                <button class="btn btn-lg btn-outline-primary">
                    <i class="fs-1 bi bi-printer"></i>
                </button>
                <button class="btn btn-lg btn-outline-primary">
                    <i class="fs-1 bi bi-qr-code-scan"></i>
                </button>
            </div>
        </template>
    </div>

    <Footer></Footer>

</template>

<script setup>

const userRole = ref(localStorage.getItem('userRole')); // Get role
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SwipeList from '@/components/SwipeList.vue';
import verifications from '@/assets/data/verifications.json';
import CardBody from '@/components/CardBody.vue';

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
    } else {
      confirmed.value.push(item);
    } 
  });
});
</script>