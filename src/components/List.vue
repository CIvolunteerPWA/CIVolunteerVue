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

    <a v-if="loadedItemsCount < allItems.length" class="list-group-item list-group-item-action" @click.prevent="toggleLoadMore">
      <div class="text-center nav-item text-secondary">
        mehr anzeigen
      </div>
    </a>
    <a v-if="loadedItemsCount > 3"class="list-group-item list-group-item-action" @click.prevent="showLess">
      <div class="text-center nav-item text-secondary">
        weniger
      </div>
    </a>
  </div>

</template>

<script>
// Import the JSON file
import organizationData from '@/assets/data/activitylist.json';

export default {
  data() {
    return {
      items: [], 
      loadedItemsCount: 0, 
      allItems: [],
    };
  },
  created() {
    // Mapping the JSON to your template format
    this.allItems = organizationData.itemListElement.map(job => ({
      club: job.hiringOrganization.name, 
      day: new Date(job.datePosted).getDate(),  
      month: new Date(job.datePosted).toLocaleString('default', { month: 'long' }), 
      location: job.jobLocation.address.addressLocality , 
      title: job.title,  
      jobs: '0/'+job.totalJobOpenings,
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
    showLess() {
      // Reduce the number of items displayed back to the initial 3
      this.items = this.allItems.slice(0, 3);
      this.loadedItemsCount = 3;
    },
  }
};
</script>