<template>
 <!--
  <nav class="navbar justify-content-center bottom border-top text-center">
    <img src="/src/assets/images/logo.png" alt="icon" class="footer-logo mb-2" />
    <small>
      <strong>Copyright © Fpass 2024</strong> |
      <router-link to="/impressum">Impressum</router-link> |
      <router-link to="/datenschutz">Datenschutz</router-link>
    </small>
    <small>Ihre Informationen zu Ihren Tätigkeiten und Job Angebote</small>

    <div class="mt-2">
      <a href="https://facebook.com" target="_blank" class="btn btn-icon btn-sm btn-facebook">
        <ion-icon name="logo-facebook" role="img" class="md hydrated" aria-label="logo facebook"></ion-icon>
      </a>
      <a href="https://twitter.com" target="_blank" class="btn btn-icon btn-sm btn-twitter">
        <ion-icon name="logo-twitter" role="img" class="md hydrated" aria-label="logo twitter"></ion-icon>
      </a>
      <a href="https://instagram.com" target="_blank" class="btn btn-icon btn-sm btn-instagram">
        <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram"></ion-icon>
      </a>
      <a href="#" class="btn btn-icon btn-sm btn-secondary goTop show">
        <ion-icon name="arrow-up-outline" role="img" class="md hydrated" aria-label="arrow up outline"></ion-icon>
      </a>
    </div>
  </nav>
-->
  <nav class="navbar bg-dark sticky-bottom">
    <div class="container align-items-center">
      <!-- Home -->
      <router-link to="/" class="navbar-brand text-center position-relative text-light">
        <i class="bi bi-house-door text-light">
          <div class="fs-4">Home</div>
        </i>
      </router-link>
      <!-- Nachweise -->
      <router-link to="/verifications" class="navbar-brand text-center position-relative text-light">
        <i class="bi bi-card-checklist text-light">
          <div class="fs-4">Nachweise</div>
        </i>
      </router-link>
      <!-- Aktivitäten -->
      <router-link to="/activities" class="navbar-brand text-center position-relative text-primary">
        <i class="bi bi-zoom-in ">
          <div class="fs-4">Aktivitäten</div>
        </i>
      </router-link>
      <!-- Chat -->
      <router-link to="/chat" class="navbar-brand text-center position-relative text-light">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
          1
          <span class="visually-hidden">unread messages</span>
        </span>
        <i class="bi bi-chat">
          <div class="fs-4">Chat</div>
        </i>
      </router-link>
      <!-- Community -->
      <router-link to="/community" class="navbar-brand text-center position-relative text-light">
        <i class="bi bi-emoji-sunglasses">
          <div class="fs-4">Community</div>
        </i>
      </router-link>
    </div>
  </nav>
</template>