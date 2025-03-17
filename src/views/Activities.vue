<script setup>
import Navbar from '@/components/Navbar.vue';
import StatisticNavbar from '@/components/StatisticNavbar.vue';
import List from '@/components/List.vue';
import CardCarousell from '@/components/CardCarousell.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Navbar title="Aktivitäten"></Navbar>
    <div class="tab-navigation">
        <div class="nav nav-underline d-inline-flex">
            <div class="nav-item">
                <RouterLink class="nav-link" to="/search">
                    <i class="bi bi-search"></i>
                </RouterLink>
            </div>
            <div class="nav-item">
                <a class="nav-link text-primary  active" aria-current="page" href="#">Meine Aktivitäten</a>
            </div>
            <div class="nav-item">
                <a class="nav-link" href="#">Empfehlungen</a>
            </div>
            <div class="nav-item">
                <a class="nav-link" href="#">Abgeschlossen</a>
            </div>
        </div>
    </div>
    <StatisticNavbar></StatisticNavbar>
    <div class="content-container">
        <List title="Deine nächsten Aktivitäten"></List>
        <CardCarousell :items="items" title="Offene Aufgaben"></CardCarousell>
    </div>
    <Footer></Footer>
</template>
<script>
import activities from "@/assets/data/activitylist.json";
const items = activities.itemListElement.map(job => ({
    title: job.title,
    description: job.description,
    industry: job.industry,
    location: job.jobLocation.address.addressLocality,
    club: job.hiringOrganization.name,
    day: new Date(job.datePosted).getDate(),
    month: new Date(job.datePosted).toLocaleString('default', { month: 'long' }),
    jobs: job.totalJobOpenings,
    image: job.hiringOrganization.logo,
    id: job.identifier.value
}));
</script>