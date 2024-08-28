<template>

  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar  ">
  <div class="layout-container">

    
    
<!-- Menu -->

<SideMenu v-if="store.get_token"/>

<!-- / Menu -->

    

<!-- Layout container -->
    <div class="layout-page">
      
      



<!-- Navbar -->




<nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar" v-if="store.get_token">
  

  

  

      
      

      
      
      <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
          <i class="bx bx-menu bx-sm"></i>
        </a>
      </div>
      



      <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

        

        


        
        <!-- Search -->
        <div class="navbar-nav align-items-center">
          <div class="nav-item d-flex align-items-center">
            <i class="bx bx-search fs-4 lh-0"></i>
            <input type="text" class="form-control border-0 shadow-none ps-1 ps-sm-2" placeholder="Search..." aria-label="Search...">
          </div>
        </div>
        <!-- /Search -->
        

        <ul class="navbar-nav flex-row align-items-center ms-auto">
          

          
          <!-- Place this tag where you want the button to render. -->
          <li class="nav-item lh-1 me-3">
            <a class="github-button" href="https://github.com/themeselection/sneat-html-admin-template-free" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themeselection/sneat-html-admin-template-free on GitHub">ຫຍຸຍ</a>
          </li>
          


          <!-- User -->
          <li class="nav-item navbar-dropdown dropdown-user dropdown">
            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
              <div class="avatar avatar-online">
                <img src="../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle">
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar avatar-online">
                        <img src="../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle">
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <span class="fw-medium d-block">ຫຍຸຍ</span>
                      <small class="text-muted">ຜູ້ດູແລລະບົບ</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-user me-2"></i>
                  <span class="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-cog me-2"></i>
                  <span class="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="d-flex align-items-center align-middle">
                    <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span class="flex-grow-1 align-middle ms-1">Billing</span>
                    <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                  </span>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);">
                  <i class="bx bx-power-off me-2"></i>
                  <span class="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
          <!--/ User -->
          

        </ul>
      </div>

      
      
  </nav>
  

  
<!-- / Navbar -->

      

      <!-- Content wrapper -->
      <div class="content-wrapper">

        <!-- Content -->
        
          <div class="container-xxl flex-grow-1 container-p-y">
            
           <router-view></router-view>


          </div>
          <!-- / Content -->

          
          

<!-- Footer -->
<footer class="content-footer footer bg-footer-theme " v-if="store.get_token">
  <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column text-center">
    <div class="mb-2 mb-md-0 ">
 
    



      <!-- <a href="https://themeselection.com" target="_blank" class="footer-link fw-medium">ThemeSelection</a> -->
    </div>
    <div class="d-none d-lg-inline-block">
      
      <div class="text-center">
    <p style="color:blue;" class="footer-link me-4">{{ tomorrow }}</p>
    
  </div>
  <div >
    <p style="color:blue;" class="footer-link me-4">End of Year Time remaining: {{ timeRemaining}}</p>
  </div>

      
    </div>
  </div>
</footer>
<!-- / Footer -->

          
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    
    
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
    
    
  </div>
  <!-- / Layout wrapper -->
</template>

<script>

import { useStore } from "./store/auth";
export default {
  setup(){
    const store = useStore();
    return{store}
  },
  data() {
    return {
      targetDate: new Date('2024-12-31T23:59:59'), // Set your target date and time here
      currentDate: new Date(),
    };
  },
  computed: {
    tomorrow() {
    const d = new Date()
    d.setFullYear(d.getFullYear())
    return ` Today is : ${d}`
  },
    timeRemaining() {
      const diffTime = this.targetDate - this.currentDate;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    },
  },
  mounted() {
    // Update the current date every second to keep the countdown accurate
    this.timer = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>

</style>
