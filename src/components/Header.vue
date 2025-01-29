<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const isOrgPage = route.path === '/profileOrg';

// State for text and edit toggle
const isEditable = ref(false);
const text = ref('');  // Define text as a ref so it can be modified locally

// Method to toggle edit mode
const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};

// Prop values
defineProps({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  }
});

// Emit update event
const emit = defineEmits();
const updateText = () => {
  emit('update:text', text.value);  // Emit an update for the text prop
};
</script>
<template>

    <div class="cover bg-secondary">
        <div class="row">
            <div class="col-4 ">
                <img src="/src/assets/images/profile.jpg" alt="profile picture" width="118"
                    class="profile-img rounded-circle">
            </div>
            <div class="col-8 ps-0 text-light">
                <div class="p-2 text-center">
                    <h5>{{ name }}</h5>
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
                <template v-if="isOrgPage">
                    <h5>Über Uns</h5>
                </template>
                <template v-else>
                    <h5>Über mich</h5>
                </template>
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
                {{ tags }}

                #Feuerwehr #Tierrettung #Organisationstalent
            </small>
        </div>
    </div>
</template>


<script>



</script>