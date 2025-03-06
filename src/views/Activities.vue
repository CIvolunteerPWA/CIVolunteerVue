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
        <CardCarousell title="Offene Aufgaben"></CardCarousell>
    </div>
    <Footer></Footer>
</template>