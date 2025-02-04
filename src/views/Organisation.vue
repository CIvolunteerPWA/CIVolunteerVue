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
                    <RouterLink class="nav-link" aria-current="page" to="/profile">Übersicht</RouterLink>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">Nachweise</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link  text-primary active" href="#">Organisation</a>
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
                    <h4>{{ org.name }}</h4>
                </div>
                <div class="row pb-3 text-center">
                    <div class="col">
                        <i class="fs-2 bi bi-command"></i><br>
                        <small>
                            QR-Code
                        </small>
                    </div>
                    <div class="col">
                        <a class="text-white text-decoration-none" :href="'mailto:' + org.contactPoint.email">
                            <i class="fs-2 bi bi-envelope-fill"></i><br>
                            <small>Email</small>
                        </a>

                    </div>
                    <div class="col">
                        <a class="text-white text-decoration-none":href="'tel:' + org.contactPoint.telephone">
                            <i class="fs-2 bi bi-telephone-fill"></i><br>
                            <small>Phone</small>
                        </a>

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
                        <i class="bi bi-check fs-2"></i>
                    </template>
                    <template v-else>
                        <i class="bi bi-pen fs-3"></i>
                    </template>

                </button>
            </div>
            <template v-if="isEditable">
                <textarea v-model="org.description" class="mb-5 form-control" id="exampleFormControlTextarea1"
                    rows="6"></textarea>
            </template>
            <template v-else>
                <p class="mb-5">{{ org.description }}</p>
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



    <div class="accordion p-2" id="accordionExample">
        <h5 class="m-1">Informationen</h5>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Allgemeine Angaben
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td scope="row">Adresse</td>
                                <td>
                                    {{ org.address.streetAddress }}<br>
                                    {{ org.address.postalCode }} {{ org.address.addressLocality }}<br>
                                    {{ org.address.addressCountry }}
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Mobile</td>
                                <td>{{ org.contactPoint.telephone }}</td>

                            </tr>
                            <tr>
                                <td scope="row">UID Nr.</td>
                                <td>{{ org.identifier }}</td>
                            </tr>
                            <tr>
                                <td scope="row">gegründet</td>
                                <td>{{ org.foundingDate }}</td>
                            </tr>
                            <tr>
                                <td scope="row">registiert seit</td>
                                <td> ... </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Mitglieder
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>Liste aller Mitglieder</strong>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Zusatzinfo
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Zusatzinfo ....
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import org from "@/assets/data/organisation.json";
import CardCarousell from "@/components/CardCarousell.vue";
import { ref } from 'vue';

const isEditable = ref(false);

const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};


</script>