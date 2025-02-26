<template>
      <nav class="navbar bg-dark">
    <div class="container">
      <div class="navbar w-100">
            <router-link class="navbar-brand d-flex align-items-center " to="/">
                <i class="bi bi-arrow-left me-2"></i>
                {{ name }}
            </router-link>
            <form class="d-flex">
                <button class="fs-1 btn btn-dark">
                    <i class="bi bi-camera-video"></i>
                </button>
                <button class="fs-2 btn btn-dark" type="submit"><i class="bi bi-telephone-plus"></i></button>
            </form>
        </div>
    </div>
    </nav>
</template>
<script setup>

defineProps({
    name: {
        type: String,
        required: true
    }
});

</script>
