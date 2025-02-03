<script setup>
import Navbar from "@/components/Navbar.vue";
import Accordion from "@/components/Accordion.vue";
import { ref } from 'vue';
import user from "@/assets/data/volunteer"

const isEditable = ref(false);
const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};
</script>

<template>
    <Navbar title="Profil"></Navbar>
    <nav class="navbar ">
        <div class="container scrollmenu">
            <div class="nav nav-underline d-inline-flex">
                <div class="nav-item">
                    <RouterLink class="nav-link" to="/search">
                        <i class="bi bi-search"></i>
                    </RouterLink>
                </div>
                <div class="nav-item">
                    <a class="nav-link text-primary  active" aria-current="page" href="#">Übersicht</a>
                </div>
              
                <div class="nav-item">
                    <a class="nav-link" href="#">Nachweise</a>
                </div>
                <div class="nav-item">
                    <RouterLink class="nav-link" to="/organisation">
                        Organisation
                    </RouterLink>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">Stammdaten</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">Einstellungen</a>
                </div>
        
            </div>
        </div>
    </nav>
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
                    <textarea v-model="user.description" class="mb-5 form-control" id="exampleFormControlTextarea1"
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
