<template>
  <nav class="navbar bg-dark sticky-bottom">
    <div class="container align-items-center">
      <router-link to="/" class="navbar-brand text-center position-relative text-light">
        <i class="bi bi-house-door text-light">
          <div class="fs-4">Home</div>
        </i>
      </router-link>
      <router-link to="/verifications" class="navbar-brand text-center position-relative text-light">
        <i class="bi bi-card-checklist text-light">
          <div class="fs-4">Nachweise</div>
        </i>
      </router-link>
      <router-link to="/activities" class="navbar-brand text-center position-relative text-primary">
        <i class="bi bi-zoom-in ">
          <div class="fs-4">Aktivitäten</div>
        </i>
      </router-link>
      <router-link to="/chat" class="navbar-brand text-center position-relative text-light">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
          1
          <span class="visually-hidden">unread messages</span>
        </span>
        <i class="bi bi-chat">
          <div class="fs-4">Chat</div>
        </i>
      </router-link>
      <router-link to="/community" class="navbar-brand text-center position-relative text-light">
        <i class="bi bi-emoji-sunglasses">
          <div class="fs-4">Community</div>
        </i>
      </router-link>
    </div>
  </nav>
</template>