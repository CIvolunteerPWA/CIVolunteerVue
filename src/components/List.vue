<style scoped>
.list-group-flush>.list-group-item {
  border-width: var(--bs-list-group-border-width) 0 0;
}

.list-group-item {
  padding-left: 0;
  padding: 0.15rem !important;
}
</style>
<template>
  <div class="list-group list-group-flush space">
    <!--in vierteln denken -->
    <h2>{{ title }}</h2>

    <RouterLink :to="{ name: 'activity', params: { itemId: item.id } }" v-for="(item, index) in items" :key="index"
      class="list-group-item list-group-item-action align-content-stretch d-flex " aria-current="true">
      <div class="date-box col-3"> <!-- Hintergrund-->
        <small>{{ item.club }}</small>
        <h1>{{ item.day }}</h1>
        <small>{{ item.month }}</small>
      </div>

      <div class="container col-9 content h-100">
        <div>
          <small class="opacity-50">{{ item.location }}, {{ item.industry }}</small>
          <h4>{{ item.title }}</h4>
        </div>

        <div bottom class="d-flex align-items-center pt-2 pb-2 text-muted gap-6">
          <small class="col-3">
            <img src="/src/assets/images/profile.jpg" alt="twbs" width="20" height="20"
              class="rounded-circle flex-shrink-0">
            {{ item.jobs }}
          </small>
          <small class="col-6"><i class="bi bi-chat me-1"></i>messages</small>
        </div>
      </div>
    </RouterLink>

    <a v-if="loadedItemsCount < allItems.length" class="list-group-item list-group-item-action"
      @click.prevent="toggleLoadMore">
      <div class="text-center nav-item text-secondary m-2 ">
        mehr anzeigen
      </div>
    </a>
    <a v-if="loadedItemsCount > 3" class="list-group-item list-group-item-action" @click.prevent="showLess">
      <div class="text-center nav-item text-secondary m-2">
        weniger
      </div>
    </a>
  </div>

</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import organizationData from '@/assets/data/activitylist.json';

defineProps({
    title: {
        type: String,
        required: true
    }
});

const items = ref([]);
const loadedItemsCount = ref(0);
const allItems = ref([]);

const toggleLoadMore = () => {
    const nextItems = allItems.value.slice(loadedItemsCount.value, loadedItemsCount.value + 3);
    items.value.push(...nextItems);
    loadedItemsCount.value += nextItems.length;
};

const showLess = () => {
    items.value = allItems.value.slice(0, 3);
    loadedItemsCount.value = 3;
};

onMounted(() => {
    allItems.value = organizationData.itemListElement.map(job => ({
        club: job.hiringOrganization.name,
        day: new Date(job.datePosted).getDate(),
        month: new Date(job.datePosted).toLocaleString('default', { month: 'long' }),
        location: job.jobLocation.address.addressLocality,
        title: job.title,
        jobs: '0/' + job.totalJobOpenings,
        industry: job.industry,
        id: job.identifier.value
    }));
    toggleLoadMore();
});


</script>