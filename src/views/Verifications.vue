<template>
    <Navbar title="Nachweise"></Navbar>
    <div class="tab-navigation">
        <div class="nav nav-underline d-inline-flex">
            <div class="nav-item">
                <RouterLink class="nav-link" to="/search">
                    <i class="bi bi-search"></i>
                </RouterLink>
            </div>
            <div class="nav-item">
                <a class="nav-link text-primary  active" aria-current="page" href="#">Meine Nachweise</a>
            </div>
            <div class="nav-item">
                <a class="nav-link" href="#">Nachweisanträge</a>
            </div>

        </div>
    </div>

    <div class="content-container ">
        <List2 title="Offene Anfragen" :items="requested"></List2>
        <List2 title="Zertifizierte Nachweise" :items="certified"></List2>
        <List2 title="Bestätigten Nachweise" :items="confirmed"></List2>
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
import List2 from '@/components/List2.vue';
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