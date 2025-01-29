<script setup>
import Navbar from "@/components/Navbar.vue";
import Accordion from "@/components/Accordion.vue";
import CardCarousell from "@/components/CardCarousell.vue";
import { ref } from 'vue';

const isEditable = ref(false);
const text = ref('Die Nachbarschaftshilfe ist eine Gemeinschaftsinitiative, die Lebensmittel und Gegenstände des täglichen Bedarfs für Senioren bereitstellt. Engagierte Freiwillige liefern die Artikel frei Haus und ermöglichen soziale Kontakte und Unterstützung.');

const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};

</script>
<template>
    <Navbar title="Organisation"></Navbar>
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
                    <a class="nav-link" href="#">Organisationen</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">Stammdaten</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="cover bg-secondary">
        <div class="row">
            <div class="col-4 ">
                <img src="/src/assets/images/profile.jpg" alt="profile picture" width="118"
                    class="profile-img rounded-circle">
            </div>
            <div class="col-8 ps-0 text-light">
                <div class="p-2 text-center">
                    <h5>Nachbarschaftshilfe</h5>
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

    <div class="card cover-subtext bg-secondary-subtle shadow-sm">
        <div class="card-body ">
            <div class="d-flex justify-content-between  align-items-center ">
                <h5>Über Uns</h5>
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
                <textarea v-model="text" class="mb-5 form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </template>
            <template v-else>
                <p class="mb-5">{{ text }}</p>
            </template>
            <div class="d-flex gap-2 justify-content-end ">
                <button class="btn btn-outline-primary" type="submit">Empfehlen</button>
                <button class="btn btn-primary text-light" type="submit">Jetzt Beitreten</button>
            </div>
            <small>
                #Feuerwehr #Tierrettung #Organisationstalent
            </small>
        </div>
    </div>
    <div class="m-2">
        <h5 class="m-1">Offene Aufgaben</h5>
        <CardCarousell></CardCarousell>
    </div>
    <br>
    <Accordion></Accordion>
</template>
