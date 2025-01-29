<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

import StatNavbar from '@/components/StatNavbar.vue';
import List from '@/components/List.vue';
import CardCarousell from '@/components/CardCarousell.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Navbar title="Aktivitäten"></Navbar>
    <nav class="navbar ">
        <div class="container scrollmenu">
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
    </nav>
    <StatNavbar></StatNavbar>
    <div class="container p-2">

        <h2 class="p-2">Deine nächsten Aktivitäten</h2>
        <List></List>
        <h2 class="p-2">Offene Aufgaben</h2>
        <CardCarousell></CardCarousell>
 

    </div>
<Footer></Footer>

</template>