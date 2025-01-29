<style>
.profile-img {
    position: absolute;
    top: -1.5rem;
    left: 0
}

.cover {
    position: relative;
    margin-top: 1.5rem;
    height: 100%;
}

.cover-subtext {
    border-radius: 0rem 0rem 1.0625rem 1.0625rem;
}

.row {
    margin: 0;
}

.nav {
    flex-wrap: unset !important;
}
</style>

<template>
    <Navbar title="Profil"></Navbar>
    <NavbarSecondary></NavbarSecondary>
    <div class="container p-0">
        <div class="cover bg-primary">
            <div class="row">
                <div class="col-4 ">
                    <img src="/src/assets/images/profile.jpg" alt="profile picture" width="118"
                        class="profile-img rounded-circle">
                </div>
                <div class="col-8 ps-0 text-light">
                    <div class="p-2 text-center">
                        {{ user.honorificPrefix }} <strong>{{ user.name }}</strong>, {{ user.honorificSuffix }}
                    </div>
                    <div class="row pb-3 text-center">
                        <div class="col">
                            <i class="fs-3 bi bi-command"></i><br>
                            <small>
                                QR-Code
                            </small>
                        </div>
                        <div class="col">
                            <i class="fs-3 bi bi-envelope-fill"></i><br>
                            <small>
                                email
                            </small>
                        </div>
                        <div class="col">
                            <i class="fs-3 bi bi-telephone-fill"></i><br>
                            <small>
                                Phone
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="card cover-subtext bg-primary-subtle shadow-sm">
            <div class="card-body ">
                <div class="d-flex justify-content-between  align-items-center ">
                    <h5>Über mich</h5>
                    <button class="btn text-primary" @click="toggleEdit">
                        <template v-if="isEditable">
                            <i class="bi bi-check fs-3"></i>
                        </template>
                        <template v-else>
                            <i class="bi bi-pen fs-3"></i>
                        </template>

                    </button>
                </div>
                <template v-if="isEditable">
                    <textarea v-model="text" class="mb-5 form-control" id="exampleFormControlTextarea1"
                        rows="6"></textarea>
                </template>
                <template v-else>
                    <p class="mb-5">{{ user.description }}</p>
                </template>

                <small>
                    #Feuerwehr #Tierrettung #Organisationstalent
                </small>
            </div>
        </div>

        <div class="mx-3 my-3">
            <h5 class="mb-0">Dein Code in der Krise</h5>
            <div class="text-center">
                <img class="m-3 bg-light" src="/src/assets/images/qrCode.png">
                <br>
                <small>
                    erstellt am 14.6.2024, gültig bis 14.8.2024;
                    Marianne Lechner; 18051978; marianne.lechner@kunstuni-linz.at; +436506006670; 2411;
                    Strafregisterauszug super!; Gruppenleiterin St. Isidor; 1= Führerschein B, 12= Sprengmeisterin,
                    Englisch, Deutsch
                </small>
            </div>
        </div>

        <Accordion> </Accordion>

    </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Accordion from "@/components/Accordion.vue";
import NavbarSecondary from "@/components/NavbarSecondary.vue";
import { ref } from 'vue';

import user from "@/assets/data/volunteer"

const isEditable = ref(false);
const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};
</script>
