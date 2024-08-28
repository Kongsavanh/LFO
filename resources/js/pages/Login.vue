<template>
    <div class=" d-flex justify-content-center">


<div class="authentication-wrapper authentication-basic container-p-y col-md-4">
 <div class="authentication-inner">
   <!-- Register -->
   <div class="card">
     <div class="card-body">
       <!-- Logo -->
       <div class="app-brand justify-content-center">
         <a href="index.html" class="app-brand-link gap-2">
           <span class="app-brand-logo demo">



</span>
           
         </a>
         <br>

       </div>
       <!-- /Logo -->
       <h2 class="d-flex justify-content-center mb-2">ສະບາຍດີ! 👋</h2>
       <p class="d-flex justify-content-center mb-4">Welcome to Login </p>

      
         <div class="mb-3">
           <label for="email" class="form-label">E-mail</label>
           <input type="text" class="form-control" id="email"  placeholder=".............." autofocus="">
         </div>
         <div class="mb-3 form-password-toggle">
           <div class="d-flex justify-content-between">
             <label class="form-label" for="password">Password</label>
          
           </div>
           <div class="input-group input-group-merge">
             <input type="password" id="password" class="form-control" name="password" placeholder="············" aria-describedby="password">
             <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
           </div>
         </div>
   
         <!-- <div class="alert alert-warning" role="alert" v-if="show_error">
         {{ text_error }}
         </div> -->


         <div class="mb-3">
           <button class="btn btn-primary d-grid w-100" >Sign in</button>
         </div>

       

       <p class="text-center mt-2" style="color:seagreen">
         <span>New on our platform? </span>
       </p>
    
       <p class="text-center">
      
         <router-link to='/register'> <span >Create an account</span> </router-link>
          <!-- <a href="https://themeselection.com" target="_blank" class="footer-link fw-medium">Create an account</a> -->
         
         
       
       </p>
     </div>
   </div>
   <!-- /Register -->
 </div>
</div>
</div>
  </template>
  
  <script>
  
  
  export default  {
      name: 'LFO',
      data(){
          return{
  
          }
      },
      mounted(){
  
      },
      methods(){
  
      },
      mounted(){
  
      },
  
  
    setup() {
      
  
      return {
        
      };
    },
  };
  </script>
    <style lang="scss" scoped>

    </style>
  