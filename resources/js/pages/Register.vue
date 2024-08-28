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
       <h4 class="d-flex justify-content-center mb-2">Welcome To Resgister</h4>
       <!-- <p class="d-flex justify-content-center mb-4">Welcome to Resgister </p> -->

      
         <div class="mb-3">
           <label for="email" class="form-label">User Name <span class=" text-danger">*</span></label>
           <input type="text" class="form-control" id="user"  placeholder="User Name" autofocus="" v-model="user_name">
         </div>
         <div class="mb-3">
           <label for="email" class="form-label">E-mail <span class=" text-danger">*</span></label>
           <input type="text" class="form-control" id="email"  placeholder="Email"  v-model="email">
         </div>
         <div class="mb-3 form-password-toggle">
          <div class="d-flex justify-content-between">
             <label class="form-label" for="password">Password <span class=" text-danger">*</span></label>
          </div>
           <div class="input-group input-group-merge">
             <input type="password" id="password" class="form-control" name="password" placeholder="Password" aria-describedby="password" v-model="password">
             <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
           </div>
         </div>
         <div class="mb-3 form-password-toggle">
          <div class="d-flex justify-content-between">
             <label class="form-label" for="password">Confirm Password <span class=" text-danger">*</span></label>
          </div>
           <div class="input-group input-group-merge">
             <input type="password" id="password" class="form-control" name="password" placeholder="Confirm Password" aria-describedby="password" v-model="password2">
             <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
           </div>
         </div>
   
         <div class="alert alert-warning" role="alert" v-if="show_error">
        {{ text_error }} 
         </div>


         <div class="mb-3">
           <button class="btn btn-primary d-grid w-100" @click="Register" >Register</button>
         </div>

       

     
    
       <p class="text-center">
      
         <router-link to='/login'> <span >Login</span> </router-link>
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
            user_name:'',
            email:'',
            password:'',
            password2:'',
            show_error: false,
            text_error:'',
          }
      },
      mounted(){
  
      },
      methods:{
        Register(){
          if(this.user_name=='' || this.email == '' || this.password=='' || this.password2 == '' ){
            this.show_error =true;
            this.text_error = 'ກາລຸນາກວດສອບຂໍ້ມູນໃນຊ່ອງປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນດ້ວຍ ຂໍຂອບໃຈ'
          } else{
            if(this.password ==this.password2){
              this.show_error =false;
              this.text_error='';
            }else{
              this.show_error =true;
              this.text_error='ລະຫັດຜ່ານບໍ່ກົງກັນ ຂໍຂອບໃຈ';
            }
            
          }

        },
  
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
  