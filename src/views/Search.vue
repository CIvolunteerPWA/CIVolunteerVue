<script setup lang="ts">
import CardCarousell from '@/components/CardCarousell.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>
<style>
.tags {
    padding-left: 0px;
    display: flex;
    flex-flow: wrap;
}
</style>
<template>
    <Navbar title="Aktivitäten Suche"></Navbar>

    <nav class="navbar bg-primary shadow">
        <div class="container pb-3">
            <form class="d-flex w-100" role="search">
                <button type="submit" class="btn "><i class="bi bi-search text-light"></i></button>
                <input class="form-control me-3" type="search" placeholder="Was möchtest du machen?" aria-label="Search">
            </form>
        </div>
    </nav>

    <!-- Suchfeld -->
    <div class="container p-2">



        <!-- Vorschläge -->
        <h3 class="mt-1">Aktivitäten die du mögen könntest</h3>
        <ul class="mb-3 tags gap-2">
            <li class="btn badge bg-light text-dark">#Soziales</li>
            <li class="btn badge bg-light text-dark">#Organisatorisches</li>
            <li class="btn badge bg-light text-dark">#Websites</li>
            <li class="btn badge bg-light text-dark">#Kommunikation</li>
            <li class="btn badge bg-light text-dark">#Soziales</li>
            <li class="btn badge bg-light text-dark">#Organisatorisches</li>
            <li class="btn badge bg-light text-dark">#Websites</li>
            <li class="btn badge bg-light text-dark">#Kommunikation</li>
        </ul>

        <!-- Kategorien -->
        <h3>Kategorien</h3>
        <div class="list-group list-group-flush">
            <a href="#Aktivitäten_in_der_Nähe" class="list-group-item list-group-item-action">
                Aktivitäten in der Nähe
            </a>
            <a href="#Sport" class="list-group-item list-group-item-action">Sport</a>
            <a href="#Musik" class="list-group-item list-group-item-action">Musik</a>
            <a href="#Blaulichteinsätze" class="list-group-item list-group-item-action">Blaulichteinsätze</a>
            <a href="#Soziales" class="list-group-item list-group-item-action">Soziales</a>
            <a href="#Kinder_und_Jugendliche" class="list-group-item list-group-item-action">Kinder und Jugendliche</a>
        </div>
        <h3>Empfehlungen</h3>
        <CardCarousell></CardCarousell>
    </div>
    <Footer></Footer>

</template>