<template>
    <div class="text-center">
        <small>Feuerwehr Stockerau</small>
    </div>
    <div class="chat-container">
        <div class="chat-history">
            <div v-for="(message, index) in messages" :key="index" class="mb-3">
                <div v-if="message.special">
                    <div class="d-flex align-items-start"
                        :class="message.side === 'right' ? 'flex-row-reverse' : 'justify-content-start'">
                        <div class="my-auto">
                            <img src="/src/assets/images/profile.jpg" alt="Avatar" class="chat-avatar">
                        </div>
                        <div class="card border-0 shadow ms-3">
                            <div class="card-header fw-bold">{{ message.header }}</div>
                            <div class="card-body d-flex justify-content-between align-items-center">
                                
                                <p class="mb-0">{{ message.text }}</p>
                                <button class="btn btn-success  ">
                                    <i class="fs-1 bi bi-check2-circle"></i>
                                    <small>
                                        Annehmen
                                    </small>
                                </button>
                            </div>
                        </div>

                    </div>
                
                </div>

                <div v-else class="d-flex align-items-start"
                    :class="message.side === 'right' ? 'flex-row-reverse' : 'justify-content-start'">
                    <div class="my-auto">
                        <img src="/src/assets/images/profile.jpg" alt="Avatar" class="chat-avatar">
                    </div>
                    <div class="message-container">
                        <div class="message shadow p-2 rounded"
                            :class="message.side === 'right' ? 'bg-primary text-white ms-2' : 'bg-light me-2'">
                            <strong v-if="message.name">{{ message.name }}</strong>
                            <p class="mb-1">{{ message.text }}</p>
                        </div>
                    </div>
                </div>
                <div :class="message.side === 'right' ? 'flex-row-reverse' : 'justify-content-start'"
                    class="message-time d-flex">
                    <small class="text-muted">{{ message.time }}</small>
                </div>
            </div>
        </div>
    </div>

    <div class="message-box">
        <input v-model="newMessage" type="text" class="form-control" placeholder="Nachricht eingeben..."
            @keyup.enter="sendMessage">
        <button class="btn btn-primary" @click="sendMessage">Senden</button>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const messages = ref([
    { text: "Wir suchen dringend Freiwillige für einen Hochwassereinsatz.", time: "8:40", avatar: "avatar1.png", side: "left", name: "Feuerwehr Stockerau" },
    { text: "Gerne, wo soll ich mich melden?", time: "8:41", avatar: "avatar2.png", side: "right" },
    { text: "Bitte zum Einsatzkommando Stockerau kommen.", time: "8:42", avatar: "avatar1.png", side: "left", name: "Feuerwehr Stockerau" },
    { text: "Liselotte Pulver hat Ihnen eine Anfrage über 400 Stunden beim Samariterbund bei der Event Organisation Unterstützung gesendet.", time: "8:40", header: "Anfrage Nachweis", special: true }
]);

const newMessage = ref("");

const sendMessage = () => {
    if (newMessage.value.trim() !== "") {
        messages.value.push({
            text: newMessage.value,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            avatar: "avatar2.png",
            side: "right"
        });
        newMessage.value = "";
        scrollToBottom();
    }
};

const scrollToBottom = () => {
    nextTick(() => {
        const chatHistory = document.querySelector('.chat-history');
        chatHistory.scrollTop = chatHistory.scrollHeight;
    });
};

onMounted(() => {
    scrollToBottom();
});
</script>

<style scoped>
.chat-container {
    height: calc(100vh - 320px);
    display: flex;
    flex-direction: column;
}

.chat-history {
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
    height: 100%;
}

.message {
    position: relative;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 0 1rem;
}

.message::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
}

.message.bg-primary::after {
    right: -10px;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent var(--bs-primary);
}

.message.bg-light::after {
    left: -10px;
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--bs-light) transparent transparent;
}

.chat-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.message-box {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f8f9fa;
    border-top: 1px solid #ddd;
    position: fixed;
    bottom: 0;
    padding-bottom: 6rem;
    left: 0;
    right: 0;
    width: 100%;
}

.message-box input {
    flex-grow: 1;
    margin-right: 10px;
}
</style>