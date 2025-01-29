<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import NavbarSecondary from '@/components/NavbarSecondary.vue';
import StatNavbar from '@/components/StatNavbar.vue';
import List from '@/components/List.vue';
import CardCarousell from '@/components/CardCarousell.vue';
import Accordion from '@/components/Accordion.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Navbar title="Aktivitäten"></Navbar>
    <NavbarSecondary></NavbarSecondary>
    <StatNavbar></StatNavbar>
    <div class="container p-2">

        <h2 class="p-2">Deine nächsten Aktivitäten</h2>
        <List></List>
        <h2 class="p-2">Offene Aufgaben</h2>
        <CardCarousell></CardCarousell>
 

    </div>
<Footer></Footer>

</template>