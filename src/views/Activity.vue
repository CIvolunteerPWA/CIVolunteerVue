<script setup>
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import activitylist from '@/assets/data/activitylist.json';

// Access the route parameters
const route = useRoute();

// Get the activity based on the itemId from the route parameters
const jobPosting = activitylist.itemListElement.find(a => a.identifier.value === route.params.itemId);
console.log(activitylist.itemListElement);
</script>

<template>
    <Navbar title="Aktivität"></Navbar>
    <div class="container p-0">
        <h1>{{ jobPosting ? jobPosting.title : 'Job Not Found' }}</h1>

        <div v-if="jobPosting">
            <!-- Important Job Data -->
            <p><strong>Description:</strong> {{ jobPosting.description }}</p>
            <p><strong>Location:</strong> {{ jobPosting.jobLocation.address.streetAddress }}, {{
                jobPosting.jobLocation.address.addressLocality }}</p>
            <p><strong>Industry:</strong> {{ jobPosting.industry }}</p>
            <p><strong>Application Link:</strong> <a :href="jobPosting.applicationContact.url" target="_blank">Apply
                    Here</a></p>
        </div>

        <div v-else>
            <p>Job posting not found. Please check the itemId in the URL.</p>
        </div>
    </div>
</template>