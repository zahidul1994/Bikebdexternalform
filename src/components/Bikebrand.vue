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
                        <a href="#">
                            <img src="https://www.bikebd.com/wp-content/uploads/2021/09/bikebd.com_logo.png" alt="">
                        </a>
                    </div>
                    <p class="mb-5"> <b style="padding-bottom: 10px; display: block">অফার সন্মন্ধে বিস্তারিতঃ</b> ১। অফার ফর্ম পুরন করার পর আপনার সাথে যোগাযোগ করা হবে। <br> ২। বাইক কেনার পর উপহার আপনার ঠিকানায় কুরিয়ার করা হবে। <br> ৩। সকল তথ্য নির্ভুল ভাবে পুরন করার চেস্টা করুন।</p>
                    
                </div>
                <div class="col-md-6">
                    <div class="biker-form shadow-lg">
                       <form class="row g-3 needs-validation"   @submit.prevent="ContactForm" @keydown="form.onKeydown($event)">
                    
                            <div class="col-md-12">
                                <label for="name" class="form-label">Your Name *</label>
                                <input type="text" class="form-control" v-model="form.name" required id="name" :class="{ 'is-invalid': form.errors.has('name') }" >
                                 <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="col-md-12">
                                <label for="phone" class="form-label">Your Phone *</label>
                                <input type="tel"  class="form-control" v-model="form.phone" required id="name" :class="{ 'is-invalid': form.errors.has('phone') }" >
                              
                                    <has-error :form="form" field="phone"></has-error>
                              
                            </div>



                            <div class="col-md-6">
                                <label for="validationCustom04" class="form-label">Your District *</label>
                                  <v-select :class="{ 'is-invalid': form.errors.has('district') }" v-model="form.district" :options="District" label=districtname :reduce="districtname=>districtname.slug" @input="Districtinfo"  />
                              
                                 <has-error :form="form" field="district"></has-error>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom04" class="form-label">Your Thana * </label>
                                 <v-select :class="{ 'is-invalid': form.errors.has('thana') }"  v-model="form.thana" :options="Thana" label=thananame :reduce="thananame=>thananame.slug" />
                               <has-error :form="form" field="thana"></has-error>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom04" class="form-label">Your Profession</label>
                                      <v-select  :class="{ 'is-invalid': form.errors.has('profession') }"  v-model="form.profession" :options="Profession" label=text :reduce="text=>text.value" />
                               
                                 <has-error :form="form" field="profession"></has-error>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom04" class="form-label">Select Bike * </label>
                           <v-select :class="{ 'is-invalid': form.errors.has('bikename') }"  v-model="form.bikename" :options="BikeName" label=bikename :reduce="bikename=>bikename.bikename" />
                                                             
                                 <has-error :form="form" field="bikename"></has-error>
                            </div>

                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
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

export default {
    
  name: 'Bikebrand',
  data () {
    return {
       form: new Form({
        name: "",
        phone: "",
       bikename: "",
       brand:this.$route.params.id,
        district: "",
        thana: "",
       profession:'',
       }),
       BikebName:[],
      Company:[],
        Division: [],
        District: [],
        Thana: [],
        BikeName: [],
        Profession: [
          { value: null, text: 'Please select One' },
          { value: 'Job', text: 'Job' },
          { value: 'Service', text: 'Service' },
          { value: 'Business', text: 'Business' },
          { value: 'Student', text: 'Student' },
           { value: 'Freelencer', text: 'Freelencer' },
           { value: 'Unemployed', text: 'Unemployed' },
           { value: 'Self Employed', text: 'Self Employed' }
          
        ],
    }
    
  },
    mounted() {

       axios.get(`https://bikebd.info/den/api/brandname/${encodeURI(this.$route.params.id)}`)
          .then(response=>{
          this.BikeName=response.data;
              
          });
axios.get("https:///bikebd.info/den/api/forminfo")
      .then((response) => {
        this.Company=response.data.company;
        this.Division=response.data.division;
        this.District=response.data.district;
        this.Thana=response.data.thana;
       
      });

  },
  methods: {
    Divisioninfo(value){
    axios
      .get("https:///bikebd.info/den/api/getdistrict/"+value)
      .then((response) => {
        this.District=response.data;
        
      })
    },  
      Districtinfo(value){
    axios
      .get("https:///bikebd.info/den/api/getthana/"+value)
      .then((response) => {
        this.Thana=response.data;
       //  console.log(response);
      })
    },
        Firstbrand(value){
      axios
      .get("https:///bikebd.info/den/api/getbike/"+value)
      .then((response) => {
        this.Firstbike=response.data;
      //  console.log(response);
      })
    },
     Secondtbrand(value){
      axios
      .get("https:///bikebd.info/den/api/getbike/"+value)
      .then((response) => {
        this.Secondbike=response.data;
        // console.log(response);
      })
    },
    async ContactForm() {
      await this.form
        .post("https://bykbd.com/den/api/bikebdform", this.form)
        .then((response) => {
         toastr.success(
            "Your Request Sent Successfully.Please Verify Your Phone Number"
          );
           this.$router.push('/phoneverify/'+this.form.phone);
        })
        .catch((error) => toastr.warning(error.response.data.message));
    },
  },
};
</script>