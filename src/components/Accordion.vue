<template>
    <div class="accordion p-2" id="accordionExample">
        <h3 class="m-1">Informationen</h3>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Persönliche Daten
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td scope="row">Adresse</td>
                                <td>
                                    <template v-if="isEditable">
                                        <input type="text" v-model="volunteer.address.streetAddress" class="form-control" />
                                        <input type="text" v-model="volunteer.address.postalCode" class="form-control" />
                                        <input type="text" v-model="volunteer.address.addressRegion" class="form-control" />
                                        <input type="text" v-model="volunteer.address.addressCountry" class="form-control" />
                                    </template>
                                    <template v-else>
                                        {{ volunteer.address.streetAddress }}<br>
                                        {{ volunteer.address.postalCode }} {{ volunteer.address.addressRegion }}<br>
                                        {{ volunteer.address.addressCountry }}
                                    </template>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Mobile</td>
                                <td>
                                    <template v-if="isEditable">
                                        <input type="text" v-model="volunteer.telephone" class="form-control" />
                                    </template>
                                    <template v-else>
                                        {{ volunteer.telephone }}
                                    </template>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Vers. Nr.</td>
                                <td>
                                    <template v-if="isEditable">
                                        <input type="text" v-model="volunteer.insuranceNumber" class="form-control" />
                                    </template>
                                    <template v-else>
                                        {{ volunteer.insuranceNumber }}
                                    </template>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">GebDatum</td>
                                <td>
                                    <template v-if="isEditable">
                                        <input type="date" v-model="volunteer.birthDate" class="form-control" />
                                    </template>
                                    <template v-else>
                                        {{ volunteer.birthDate }}
                                    </template>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Geschlecht</td>
                                <td>
                                    <template v-if="isEditable">
                                        <select v-model="volunteer.gender" class="form-control">
                                            <option value="männlich">männlich</option>
                                            <option value="weiblich">weiblich</option>
                                            <option value="diverse">diverse</option>
                                        </select>
                                    </template>
                                    <template v-else>
                                        {{ volunteer.gender }}
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-show="isAccordionOpen" class="d-flex justify-content-end">
                        <button v-if="!isEditable" @click="toggleEdit" class="btn btn-primary">
                            <i class="bi bi-pen text-light"></i>
                        </button>
                        <button v-if="isEditable" @click="saveChanges" class="btn btn-success me-2">
                            <i class="bi bi-check text-light"></i>
                        </button>
                    </div>
                </div>
            </div>
         
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Kompetenzen
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Verfügbarkeit
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
        
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Privatsphäre
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong></strong>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive" @click="resetChanges">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Systemeinstellungen
                </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td scope="row">Username</td>
                                <td>
                                    <template v-if="isEditable">
                                        <input type="text" v-model="user.username" class="form-control" />
                                    </template>
                                    <template v-else>
                                        <p>{{ user.username }}</p>
                                    </template>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Email</td>
                                <td>
                                    <template v-if="isEditable">
                                        <input type="email" v-model="user.email1" class="form-control" />
                                    </template>
                                    <template v-else>
                                        <p>{{ user.email1 }}</p>
                                    </template>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">PWD</td>
                                <td>
                                    <template v-if="isEditable">
                                        <input type="password" v-model="user.password" class="form-control" />
                                    </template>
                                    <template v-else>
                                        <p>*******</p>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-show="isAccordionOpen" class="d-flex justify-content-end  me-2">
                        <button v-if="!isEditable" @click="toggleEdit" class="btn btn-primary">
                            <i class="bi bi-pen text-light"></i>
                        </button>
                        <button v-if="isEditable" @click="saveChanges" class="btn btn-success">
                            <i class="bi bi-check fs-§"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Display
                </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                   <ToggleMode></ToggleMode>
                   <ChangeTheme></ChangeTheme>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
import ToggleMode from "./ToggleMode.vue";
import ChangeTheme from "./ChangeTheme.vue";
import volunteer from "@/assets/data/volunteer.json";
import ResizeText from "./ResizeText.vue";

// Initialize the data model for user details
const user = ref({
    username: volunteer.additionalName,
    email1: volunteer.email,
    password: "*******",
});


const isEditable = ref(false);
const originalUser = { ...user.value };

const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};


const saveChanges = () => {
    console.log("Changes saved:", user.value);
    isEditable.value = false;
};


const resetChanges = () => {
    if (isEditable.value) {
        user.value = { ...originalUser };
    }
    isEditable.value = false;
};
</script>