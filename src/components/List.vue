<style>
.list-group-item+.list-group-item {
  border-top: var(--bs-list-group-border-width) solid var(--bs-secondary);
}
</style>
<template>


  <div class="list-group list-group-flush">
    <a v-for="(item, index) in items" :key="index"
      class="list-group-item list-group-item-action d-flex gap-2 align-items-center" aria-current="true">
      <div class="col-3 text-body-secondary text-center">
        <small>{{ item.club }}</small>
        <h1 class="m-0">{{ item.day }}</h1>
        <small>{{ item.month }}</small>
      </div>
      <div class="container">
        <small class="opacity-50">{{ item.location }}, {{ item.industry }}</small>
        <h3 class="mb-0">{{ item.title }}</h3>
        <div class="d-flex align-items-center pt-2 pb-2 text-muted gap-6">
          <small>
            <img src="/src/assets/images/profile.jpg" alt="twbs" width="20" height="20"
              class="rounded-circle flex-shrink-0">
            {{ item.jobs }}
          </small>
          <small><i class="bi bi-chat me-1"></i>messages</small>
        </div>
      </div>
    </a>

    <!-- Load more button -->
    <a href="#" class="list-group-item list-group-item-action" @click.prevent="toggleLoadMore">
      <div class="text-center nav-item text-secondary">
        mehr anzeigen
      </div>
    </a>
  </div>

</template>

<script>
// Import the JSON file
import organizationData from '@/assets/data/activitylist.json'; // Adjust path as needed

export default {
  data() {
    return {
      items: [], // Empty initially, to be filled with job postings
      loadedItemsCount: 0, // Track the number of items currently loaded
      allItems: [], // Store all items from the JSON
    };
  },
  created() {
    // Mapping the JSON to your template format
    this.allItems = organizationData.itemListElement.map(job => ({
      club: job.hiringOrganization.name,  // Use the job posting date
      day: new Date(job.datePosted).getDate(),  // Extract the day from the date
      month: new Date(job.datePosted).toLocaleString('default', { month: 'long' }),  // Extract the month name
      location: job.jobLocation.address.addressLocality ,  // Job location
      title: job.title,  // Job title
      jobs: '0/'+job.totalJobOpenings , // Placeholder, as the JSON doesn't have message counts
      industry:job.industry
    }));

    // Initially load 3 items
    this.toggleLoadMore();
  },
  methods: {
    toggleLoadMore() {
      // Load more items by appending 3 new items to the list
      const nextItems = this.allItems.slice(this.loadedItemsCount, this.loadedItemsCount + 3);
      this.items.push(...nextItems);
      this.loadedItemsCount += nextItems.length;
    },
  }
};
</script>