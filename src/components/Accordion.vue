<template>
    <div class="accordion p-2" id="accordionExample">
        <h5 class="m-1">Informationen</h5>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Persönliche Daten
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-4">
                            <p>Adresse</p>
                        </div>
                        <div class="col-8">
                            <p>
                                {{ volunteer.address.streetAddress }}
                                <br>{{ volunteer.address.postalCode }} {{ volunteer.address.addressRegion }}
                                <br>{{ volunteer.address.addressCountry }}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Mobile</p>
                        </div>
                        <div class="col-8">
                            <p>{{ volunteer.telephone }}</p> <!-- Use volunteer.telephone for dynamic data -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Vers. Nr.</p>
                        </div>
                        <div class="col-8">
                            <p>{{ volunteer.insuranceNumber }}</p> <!-- Use volunteer.insuranceNumber -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>GebDatum</p>
                        </div>
                        <div class="col-8">
                            <p>{{ volunteer.birthDate }}</p> <!-- Use volunteer.birthDate -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Geschlecht</p>
                        </div>
                        <div class="col-8">
                            <p>{{ volunteer.gender }}</p> <!-- Use volunteer.gender -->
                        </div>
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
                    <img src="/src/assets/images/calender.png" class="img-fluid">
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
                    <div class="row">
                        <div class="col-4">
                            <p>Username</p>
                        </div>
                        <div class="col-8">
                            <template v-if="isEditable">
                                <input type="text" v-model="user.username" class="form-control" />
                            </template>
                            <template v-else>
                                <p>{{ user.username }}</p>
                            </template>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Email 1</p>
                        </div>
                        <div class="col-8">
                            <template v-if="isEditable">
                                <input type="email" v-model="user.email1" class="form-control" />
                            </template>
                            <template v-else>
                                <p>{{ user.email1 }}</p>
                            </template>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Email 2</p>
                        </div>
                        <div class="col-8">
                            <template v-if="isEditable">
                                <input type="email" v-model="user.email2" class="form-control" />
                            </template>
                            <template v-else>
                                <p>{{ user.email2 }}</p>
                            </template>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>PWD</p>
                        </div>
                        <div class="col-8">
                            <template v-if="isEditable">
                                <input type="password" v-model="user.password" class="form-control" />
                            </template>
                            <template v-else>
                                <p>*******</p>
                            </template>
                        </div>
                    </div>

                    <div v-show="isAccordionOpen" class="d-flex justify-content-end">
                        <button v-if="!isEditable" @click="toggleEdit" class="btn btn-primary">
                            <i class="bi bi-pen text-light"></i>
                        </button>
                        <button v-if="isEditable" @click="saveChanges" class="btn btn-success me-2 ">
                            Save
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
                    <div class="d-flex align-items-center">
                        <i class="bi bi-moon"></i>
                        <label class="me-2" for="flexSwitchCheckDefault">Dark Mode</label>
                        <div class="form-check form-switch">
                            <input id="darkModeToggle" class="form-check-input" type="checkbox" role="switch"
                                @click="toggleTheme()" v-model="isDarkMode">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, computed } from "vue";
import volunteer from "@/assets/data/volunteer.json";

// Initialize the data model for user details
const user = ref({
    username: volunteer.additionalName,
    email1: volunteer.email,
    email2: "sophia_star@email.com",
    password: "*******",
});

// State to toggle between editable and non-editable mode
const isEditable = ref(false);
const originalUser = { ...user.value }; // To track original values

// Toggle function for edit mode
const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};


const saveChanges = () => {

    console.log("Changes saved:", user.value);
    isEditable.value = false; 
};


const resetChanges = () => {
    // Reset user data to original values when accordion closes
    if (isEditable.value) {
        user.value = { ...originalUser };
    }
    isEditable.value = false; // Ensure we exit edit mode
};

const theme = ref(localStorage.getItem('theme') || 'light');
watchEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme.value);
    localStorage.setItem('theme', theme.value);
});

// Function to toggle between themes
const toggleTheme = () => {
    theme.value = theme.value == 'dark' ? 'light' : 'dark';
};

const isDarkMode = computed({
    get() {
        return theme.value === 'dark'; //
    },
    set(value) {
        theme.value = value ? 'dark' : 'light';
    }
});
</script>