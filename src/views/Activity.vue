<script setup>
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import activitylist from '@/assets/data/activitylist.json';

const route = useRoute();
const jobPosting = activitylist.itemListElement.find(a => a.identifier.value === route.params.itemId);
</script>

<template>
  <Navbar title="Aktivität"></Navbar>
  <div class="container py-4">
    <h2>{{ jobPosting ? jobPosting.title : 'Aktivität nicht gefunden' }}</h2>

    <div v-if="jobPosting" class="mt-3">
      <!-- Job Description -->
      <p class="text-muted">{{ jobPosting.description }}</p>

      <h3 class="mt-4">Unternehmen</h3>
      <p>
        <a class="link-primary" :href="jobPosting.hiringOrganization.sameAs" target="_blank">
          {{ jobPosting.hiringOrganization.name }}
        </a>
      </p>

      <h3>Standort</h3>
      <p>{{ jobPosting.jobLocation.address.streetAddress }}, {{ jobPosting.jobLocation.address.addressLocality }}</p>

      <h3>Kontaktdaten</h3>
      <p><strong>Email:</strong> <a :href="'mailto:' + jobPosting.applicationContact.email">{{
        jobPosting.applicationContact.email }}</a> <br>
        <strong>Telefon:</strong> {{ jobPosting.applicationContact.telephone }}
      </p>

      <h3>Weitere Informationen</h3>
      <p><strong>Branche:</strong> {{ jobPosting.industry }}<br>
      <strong>Kategorie:</strong> {{ jobPosting.occupationalCategory }}</p>
      <p><strong>Bewerbung:</strong> 
        
        <a :href="jobPosting.applicationContact.url" target="_blank" class="btn btn-outline-primary btn-sm">Hier
          bewerben</a>
      </p>
    </div>

    <div v-else>
      <p class="text-danger">Diese Aktivität gibt es nicht!</p>
    </div>
  </div>
</template>
