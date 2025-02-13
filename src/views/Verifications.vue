<script setup>
import Navbar from '@/components/Navbar.vue';
import List from '@/components/List.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Navbar title="Nachweise"></Navbar>
    <nav class="navbar ">
        <div class="container scrollmenu">
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
    </nav>

    <div class="container vh-100">
        <List title="Deine Nachweise"></List>
    </div>
<Footer></Footer>

</template>