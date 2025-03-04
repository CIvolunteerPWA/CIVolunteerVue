<script setup>
import { ref } from 'vue';

import ChatNavbar from '@/components/ChatNavbar.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

const chats = ref([
    { name: 'Red Cross', message: 'Emergency response update', time: 'Just now', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp', unread: 1 },
    { name: 'Greenpeace', message: 'Climate action news', time: '5 mins ago', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp', unread: 0 },
    { name: 'Doctors Without Borders', message: 'Medical relief update', time: 'Yesterday', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp', unread: 0 },
    { name: 'UNICEF', message: 'Children aid program', time: 'Yesterday', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp', unread: 0 },
    { name: 'WWF', message: 'Wildlife conservation update', time: 'Yesterday', img: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp', unread: 0 }
]);
</script>

<template>
    <Navbar title="Chat"></Navbar>
    <div class="tab-navigation" style="background-color: var(--bs-gray-200);">
        <div class="nav nav-underline d-inline-flex">
            <div class="nav-item">
                <RouterLink class="nav-link" to="/search">
                    <i class="bi bi-search"></i>
                </RouterLink>
            </div>
            <div class="nav-item">
                <a class="nav-link text-primary active" aria-current="page" href="#">Übersicht</a>
            </div>
            <div class="nav-item">
                <a class="nav-link" href="#">Archiv</a>
            </div>
        </div>
    </div>
    <div class="chat-container">
        <div class="chat-scroll">
            <ul class="list-unstyled  mb-0">
                <li v-for="chat in chats" :key="chat.name" class=" p-2 border-bottom"
                    :class="{ 'bg-body-tertiary': chat.unread > 0 }">
                    <RouterLink :to="`/chat/${encodeURIComponent(chat.name)}`"
                        class=" text-decoration-none d-flex justify-content-between">
                        <div class="col-9 d-flex flex-row">
                            <img :src="chat.img" alt="avatar"
                                class="rounded-circle d-flex align-self-center me-2 shadow-1-strong" width="60">
                            <div class="col-8 pt-1">
                                <p class="text-truncate fw-bold mb-0">{{ chat.name }}</p>
                                <p class="text-truncate  small text-muted">{{ chat.message }}</p>
                            </div>
                        </div>
                        <div class="col-3  pt-1">
                            <p class="small text-end text-muted mb-1">{{ chat.time }}</p>
                            <span v-if="chat.unread > 0" class="badge bg-primary  float-end">{{ chat.unread }}</span>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>

    <Footer></Footer>
</template>

<style scoped>
.chat-container {
    height: calc(100vh - 170px);
}
</style>