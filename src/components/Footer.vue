<template>
  <nav class="navbar bg-dark fixed-bottom">
    <div class="container align-items-center">
      <router-link to="/" class="navbar-brand text-center position-relative" active-class="active-link">
        <i class="bi bi-house-door">
          <div class="fs-4">Home</div>
        </i>
      </router-link>
      <router-link to="/verifications" class="navbar-brand text-center position-relative" active-class="active-link">
        <span class="badge badge-sm">
          3
        </span>
        <i class="bi bi-card-checklist">
          <div class="fs-4">Nachweise</div>
        </i>
      </router-link>
      <router-link to="/activities" class="navbar-brand text-center position-relative" active-class="active-link">
        <i class="bi bi-zoom-in">
          <div class="fs-4">Aktivitäten</div>
        </i>
      </router-link>
      <router-link to="/chat" class="navbar-brand text-center position-relative" active-class="active-link">
        <span class="badge badge-sm">
          1
          <span class="visually-hidden">unread messages</span>
        </span>
        <i class="bi bi-chat">
          <div class="fs-4">Chat</div>
        </i>
      </router-link>
      <router-link to="/community" class="navbar-brand text-center position-relative" active-class="active-link">
        <i class="bi bi-emoji-sunglasses">
          <div class="fs-4">Community</div>
        </i>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  color: white;
  text-decoration: none;
}

.active-link {
  color: var(--bs-primary) /* Bootstrap primary color */
}
.badge-sm{
  position: absolute;
  font-size: 0.75rem;
  left:55%;
  bottom:70%;
  border-radius: 50%;
  background-color: var(--bs-primary);
}
</style>
