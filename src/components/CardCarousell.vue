<template>
    <div id="carouselExampleIndicators" class="mb-4 carousel slide">
        <div class="carousel-indicators">
            <button v-for="(item, index) in items" :key="index" :data-bs-target="'#carouselExampleIndicators'"
                :data-bs-slide-to="index" :class="{ 'active': index === 0 }" class="form-check-input"
                :aria-label="'Slide ' + (index + 1)"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in items" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
                <div class="card">
                    <div class="img-with-date">
                        <img src="/src/assets/images/imgPlaceholder.png" class="card-img-top" alt="...">
                        <div class="date text-center text-dark opacity-75 col-3">
                            <small>{{ item.club }}</small>
                            <h1 class="m-0">{{ item.day }}</h1>
                            <small>{{ item.month }}</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <small class="opacity-50">{{ item.location }}, {{ item.industry }}</small>
                       <div class="card-text">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                       </div>
                         
                        <div class="d-flex align-items-center text-muted gap-6">
                            <small>
                                <img src="/src/assets/images/profile.jpg" alt="twbs" width="20" height="20"
                                    class="rounded-circle flex-shrink-0">
                                {{ item.jobs }}+
                            </small>
                            <small>
                                <i class="bi bi-chat me-1"></i>messages
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
// Import the JSON data
import organizationData from '@/assets/data/activitylist.json';

export default {
    data() {
        return {
            items: [], // Holds the carousel items dynamically
        };
    },
    created() {
        // Mapping the JSON data to fill the carousel
        this.items = organizationData.itemListElement.map(job => ({
            title: job.title,
            description: job.description,
            industry: job.industry,
            location: job.jobLocation.address.addressLocality,
            club: job.hiringOrganization.name,
            day: new Date(job.datePosted).getDate(),  // Displaying day of the job posting
            month: new Date(job.datePosted).toLocaleString('default', { month: 'long' }),  // Displaying the month
            jobs: job.totalJobOpenings,
            image: job.hiringOrganization.logo, // Assuming the logo represents the image
        }));
    },
};
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
    background-color: #eef9ff;
    position: absolute;
    bottom: 0;
}

.card-text{
    height: 9.5rem;
}
.card-body p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>