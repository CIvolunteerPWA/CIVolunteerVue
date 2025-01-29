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
    <Navbar title="Nachweise"></Navbar>
    <NavbarSecondary></NavbarSecondary>
    <StatNavbar></StatNavbar>
    <div class="container p-2">

        <h2 class="p-2">Deine Nachweise</h2>
        <List></List>
        <h2 class="p-2">Offene Nachweisanträge</h2>
        <CardCarousell></CardCarousell>

    </div>
<Footer></Footer>

</template>