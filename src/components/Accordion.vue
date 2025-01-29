<style>
.accordion-button:not(.collapsed) {
    background-color: var(--bs-primary);
    color: var(--bs-light);
}
</style>
<script setup>
import { ref,watchEffect,computed } from "vue";
import volunteer from "@/assets/data/volunteer.json"
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

// Save function to persist changes (for demonstration purposes)
const saveChanges = () => {
    // Here, you can handle saving the changes (e.g., send data to the server or save locally)
    console.log("Changes saved:", user.value);
    isEditable.value = false; // After saving, stop edit mode
};

// Reset changes if accordion closes
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
    theme.value = theme.value == 'dark' ? 'light' : 'dark'
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
<template>
    <div class="accordion p-2 " id="accordionPanelsStayOpenExample">
        <h5 class="m-1">Informationen</h5>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne">
                    Persönliche Daten
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
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
                            <p>mobile</p>
                        </div>
                        <div class="col-8">
                            <p>0650 6006670</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Vers. Nr.</p>
                        </div>
                        <div class="col-8">
                            <p>1710</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4">
                            <p>GebDatum</p>
                        </div>
                        <div class="col-8">
                            <p>03.10.2005</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4">
                            <p>Geschlecht</p>
                        </div>
                        <div class="col-8">
                            <p>weiblich</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="accordion-item"></div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        Kompetenzen
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse4">
                        Verfügbarkeit
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <img src="/src/assets/images/calender.png" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse5">
                        Privatsphäre
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong>TODO</strong>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" @click="resetChanges">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse6">
                        Systemeinstellungen
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="col-4">
                                <p>Username</p>
                            </div>
                            <div class="col-8">
                                <!-- Conditionally render text or input based on isEditable -->
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
                                    <p>*******</p> <!-- Display asterisks for password -->
                                </template>
                            </div>
                        </div>

                        <!-- Add Edit and Save buttons -->
                        <div v-show="isAccordionOpen" class="d-flex justify-content-end ">
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
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapse7">
                        Display
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <div class=" d-flex align-items-center">
                            <i class="bi bi-moon"></i>
                            <label class="me-2" for="flexSwitchCheckDefault">Dark Mode</label>
                            <div class="form-check form-switch">
                                <!-- Bind the checkbox to darkMode state using v-model -->
                                <input id="darkModeToggle" class="form-check-input" type="checkbox" role="switch"
                                    @click="toggleTheme()" v-model="isDarkMode">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>