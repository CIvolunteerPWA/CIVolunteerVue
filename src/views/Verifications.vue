<template>
    <Navbar title="Nachweise"></Navbar>
    

    <div class="content-container ">
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
    </div>

    <Footer></Footer>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SwipeList from '@/components/SwipeList.vue';
import verifications from '@/assets/data/verifications.json';

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