<template>
  <Navbar :message="'Profile'"></Navbar>
  <nav class="p-0  navbar bg-primary" data-bs-theme="dark">
    <div class="container">

      <div class="scrollmenu   ">
        <a class="btn text-white" href="#">Stammdaten</a>
        <a class="btn text-white" href="#">Interessen</a>
        <a class="btn text-white" href="#">Kompetenzen</a>
        <a class="btn text-white" href="#">Privacy</a>
        <a class="btn text-white" href="#">?</a>
      </div>
    </div>

  </nav>


  <div class="col-lg-8 mx-auto">
    <div class="bg-white shadow overflow-hidden">
      <div class="px-4 cover">
        <div class="media profile-head">
          <div class="profile mr-3 d-flex justify-content-between align-items-start">
            <div class="col-sm-2">
              <img src="/src/assets/images/profile.png" alt="..." width="130" class="rounded-circle mb-2 img-thumbnail">
            </div>
            <!--    <a href="#" class="btn btn-outline-light btn-sm">Edit profile</a>-->
            <a href="#" class="btn text-white "><img src="/src/assets/icons/handshake.svg"><br>Verbinden</a>
          </div>
        </div>
      </div>
      <div class="bg-primary-subtle pt-5 p-4 d-flex justify-content-between ">
        <div class="profile-info">
          <div class="fs-5 fw-bold">Robert Berger</div>
          <div class="fs-6">
            <i class="bi bi-geo-alt"></i>
            Baumstraße 23, 2650 Payerbach
          </div>
          <div class="fs-6">
            <i class="bi bi-envelope"></i>
            robert.berger@gmx.at
          </div>
        </div>
        <img src="/src/assets/images/chart.png" width="25%" height="25% " style="max-width:100px;">
      </div>
      <div class="px-4 py-3">
        <h5 class="mb-0">About</h5>
        <div class="p-4 rounded shadow-sm bg-light">
          <p class="font-italic mb-0">Web Developer</p>
          <p class="font-italic mb-0">Lives in New York</p>
          <p class="font-italic mb-0">Photographer</p>
        </div>
      </div>
      <div class="py-4 px-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-2 pr-lg-1"><img
              src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="" class="img-fluid rounded shadow-sm"></div>
          <div class="col-lg-6 mb-2 pl-lg-1"><img
              src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="" class="img-fluid rounded shadow-sm"></div>
          <div class="col-lg-6 pr-lg-1 mb-2"><img
              src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="" class="img-fluid rounded shadow-sm"></div>
          <div class="col-lg-6 pl-lg-1"><img
              src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="" class="img-fluid rounded shadow-sm"></div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

</script>
