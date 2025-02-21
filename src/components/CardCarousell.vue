<template>
    <div id="carouselExampleIndicators" class="space carousel slide" data-bs-ride="carousel">
        <h2>{{ title }}</h2>
        <div class="carousel-indicators">
            <button v-for="(item, index) in items" :key="index" :data-bs-target="'#carouselExampleIndicators'"
                :data-bs-slide-to="index" :class="{ 'active': index === 0 }" class="form-check-input"
                :aria-label="'Slide ' + (index + 1)"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in items" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
                <RouterLink :to="{ name: 'activity', params: { itemId: item.id } }" class="card text-decoration-none">
                    <div class="img-with-date">
                        <img src="/src/assets/images/imgPlaceholder.png" class="card-img-top img-fluid" height="auto">
                        <div class="date date-box col-3">
                            <small>{{ item.club }}</small>
                            <h1>{{ item.day }}</h1>
                            <small>{{ item.month }}</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <small class="opacity-50">{{ item.location }}, {{ item.industry }}</small>
                        <div class="card-text">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.description }}</p>
                        </div>
                        <p class=""><small class="text-muted">Last updated 3 mins ago</small></p>

                        <div class="d-flex align-items-center text-muted gap-6">
                            <small class="col-3">
                                <img src="/src/assets/images/profile.jpg" alt="twbs" width="20" height="20"
                                    class="rounded-circle flex-shrink-0">
                                {{ item.jobs }}+
                            </small>
                            <small>
                                <i class="bi bi-chat me-1"></i>messages
                            </small>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>

        <button class="carousel-control-prev bs-primary" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class=" " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class=" text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>
// Import the JSON data
import organizationData from '@/assets/data/activitylist.json';
defineProps({
    title: {
        type: String,
        required: true
    }
});
const items = organizationData.itemListElement.map(job => ({
    title: job.title,
    description: job.description,
    industry: job.industry,
    location: job.jobLocation.address.addressLocality,
    club: job.hiringOrganization.name,
    day: new Date(job.datePosted).getDate(),  // Displaying day of the job posting
    month: new Date(job.datePosted).toLocaleString('default', { month: 'long' }),  // Displaying the month
    jobs: job.totalJobOpenings,
    image: job.hiringOrganization.logo, // Assuming the logo represents the image
    id: job.identifier.value
}));

</script>
<style scoped>
.carousel-indicators {
    margin-bottom: -1.5rem;
}

.carousel-indicators .form-check-input {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    border: 2px solid var(--bs-primary);
    background-color: #ccc;
}

.carousel-indicators .active {
    border: 5px solid var(--bs-primary);
    box-sizing: border-box;
    width: calc(0.7rem + 5px);
    height: calc(0.7rem + 5px);
}

.img-with-date {
    position: relative;
}

.date {
    position: absolute;
    bottom: 0;
}

.card-text {
    height: 8rem;
}

.card-body p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>