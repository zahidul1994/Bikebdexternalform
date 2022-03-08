<template>
    <section id="main-form">
        <div class="container">
           
           <div class="row">
               <div class="col-md-12">
          
              
              
               </div>
           </div>
           
            <div class="row">
                <div class="col-md-6">
                    <div class="bikebd-logo pb-5">
                        <!-- <a href="#">
                            <img src="https://www.bikebd.com/wp-content/uploads/2021/09/bikebd.com_logo.png" alt="">
                        </a> -->
                    </div>
                    <p class="mb-5"> <b style="padding-bottom: 10px; display: block">OTP</b> আপনার মোবাইলে  পাঠানো OTP নম্বরটি লিখুন</p>
                    
                </div>
                <div class="col-md-6">
                    <div class="biker-form shadow-lg">
                       <form class="row g-3 needs-validation"   @submit.prevent="Phoneverify" @keydown="form.onKeydown($event)">
                    
                            <div class="col-md-12">
                                <label for="name" class="form-label">OTP *</label>
                                <input v-model="form.otp" type="number"  class="form-control" required id="name" :class="{ 'is-invalid': form.errors.has('otp') }" >
                                 <span class="text-danger">{{error}}</span>

                            </div>
                           
                           
                            <div class="col-12 text-end">
                                <button class="btn btn-primary" type="submit" :disabled="form.busy" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

     <script>
export default  {
  name: "Bikeloanotpverify",
  data() {
    return {
          form: new Form({
        phone:this.$route.params.id,
        otp: '',
         }),
         error:null

    };
  },
  mounted() {
  
   
  },
  methods: {
  async Phoneverify(){
         
             await  this.form.post("https://bikebd.com/den/api/bikeloanotpverify", this.form)
              .then(response => { 
                  toastr.success('Well Done, Verify  Successfully');
                     window.location.href = 'https://bikebd.com';
             
              })
               .catch(response=> {
                 this.error="Invaid Code";
               toastr.warning("Invaild Code");
           
               });
              
                    
            },
   
   
  }
};
</script>
