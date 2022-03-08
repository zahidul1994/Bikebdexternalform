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
                    <p class="mb-5"> বাইক মানেই বাইক বিডি, আর আমরা টীম বাইক বিডি সব সময় চাই সবাই নিরাপদে বাইক রাইড করুক। আপনার পছন্দের বাইক ব্যাংক লোনে কিনতে আমরা আপনাকে সাহায্য করতে পারি। <br> <br>
* ফর্ম টি সঠিক ও নির্ভুল তথ্য দিয়ে পূরণ করুন। একজন ব্যাংক প্রতিনিধি অতি সত্ত্বর আপনার সাথে যোগাযোগ করবেন ও বিস্তারিত প্রসেসিং খুব দ্রুত সমাধান করবেন। 
<br> <br> 

* এছাড়াও টীম বাইক বিডি এর পক্ষ থেকে আপনার জন্য থাকবে উপহার। 
<br> <br> 
* ফর্ম এ দেয়া আপনার সকল তথ্য গোপন রাখা হবে । <br> <br>
* শর্ত প্রযোজ্য । 
<br> 
হ্যাপি বাইকিং</p>
                    
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
                                <input type="tel"  class="form-control" v-model="form.phone" required id="phone" :class="{ 'is-invalid': form.errors.has('phone') }" >
                              
                                    <has-error :form="form" field="phone"></has-error>
                              
                            </div>
                                  <div class="col-md-12">
                                <label for="email" class="form-label">Your Email </label>
                                <input type="email"  class="form-control" v-model="form.email"  id="email" :class="{ 'is-invalid': form.errors.has('email') }" >
                              
                                    <has-error :form="form" field="email"></has-error>
                              
                            </div>
                               <div class="col-md-6">
                                <label for="division" class="form-label">Your Division *</label>
                                  <v-select :class="{ 'is-invalid': form.errors.has('division') }" v-model="form.division" :options="Division" label=divisionname :reduce="divisionname=>divisionname.slug" @input="Divisioninfo"  />
                              
                                 <has-error :form="form" field="division"></has-error>
                            </div>

                            <div class="col-md-6">
                                <label for="district" class="form-label">Your District *</label>
                                  <v-select :class="{ 'is-invalid': form.errors.has('district') }" v-model="form.district" :options="District" label=districtname :reduce="districtname=>districtname.slug" @input="Districtinfo"  />
                              
                                 <has-error :form="form" field="district"></has-error>
                            </div>
                            <div class="col-md-6">
                                <label for="thana" class="form-label">Your Thana * </label>
                                 <v-select :class="{ 'is-invalid': form.errors.has('thana') }"  v-model="form.thana" :options="Thana" label=thananame :reduce="thananame=>thananame.slug" />
                               <has-error :form="form" field="thana"></has-error>
                            </div>
                            <div class="col-md-6">
                                <label for="profession" class="form-label">Your Profession *</label>
                                      <v-select  :class="{ 'is-invalid': form.errors.has('profession') }"  v-model="form.profession" :options="Profession" label=text :reduce="text=>text.value" />
                               
                                 <has-error :form="form" field="profession"></has-error>
                            </div>
                               <div class="col-md-6">
                                <label for="monthlyincome" class="form-label">Your Monthly Income *</label>
                                <input type="number" class="form-control" v-model="form.monthlyincome" required id="monthlyincome" :class="{ 'is-invalid': form.errors.has('monthlyincome') }" >
                                 <has-error :form="form" field="monthlyincome"></has-error>
                            </div>
                              <div class="col-md-6">
                                <label for="salarytype" class="form-label">Salary type *</label>
                               
                                <v-select :class="{ 'is-invalid': form.errors.has('salarytype') }"  v-model="form.salarytype" :options="Salarytypes" label=text :reduce="text=>text.value" />
                                 <has-error :form="form" field="salarytype"></has-error>
                            </div>
                            <div class="col-md-12">
                                <label for="bankaccounttype" class="form-label">Bank Account Type *</label>
                               
                                <v-select :class="{ 'is-invalid': form.errors.has('bankaccounttype') }"  v-model="form.bankaccounttype" :options="Accounttypes" label=text :reduce="text=>text.value" />
                                 <has-error :form="form" field="bankaccounttype"></has-error>
                            </div>
                             <div class="col-md-6">
                                <label for="brand" class="form-label">Interested Bike Brand * </label>
                           <v-select :class="{ 'is-invalid': form.errors.has('brand') }"  v-model="form.brand" :options="Brands" label=brand :reduce="brand=>brand.slug"  @input="Brandinfo"/>
                                                             
                                 <has-error :form="form" field="brand"></has-error>
                            </div>

                            <div class="col-md-6">
                                <label for="bikename" class="form-label">Select Bike * </label>
                           <v-select :class="{ 'is-invalid': form.errors.has('bikename') }"  v-model="form.bikename" :options="BikeName" label=bikename :reduce="bikename=>bikename.bikename" />
                                                             
                                 <has-error :form="form" field="bikename"></has-error>
                            </div>
                            <div class="col-md-12">
                                <label for="bikecolor" class="form-label">Interested Bike  Color *</label>
                                <input type="text" required  class="form-control" v-model="form.bikecolor"  id="bikecolor" :class="{ 'is-invalid': form.errors.has('bikecolor') }" >
                              
                                    <has-error :form="form" field="bikecolor"></has-error>
                              
                            </div>
                            <div class="col-md-12">
                                <label for="showroomname" class="form-label">Preferred Showroom Name </label>
                                <input type="text"  class="form-control" v-model="form.showroomname"  id="showroomname" :class="{ 'is-invalid': form.errors.has('showroomname') }" >
                              
                                    <has-error :form="form" field="showroomname"></has-error>
                              
                            </div>
                            <div class="col-md-12">
                                <label for="showroomaddress" class="form-label">Preferred Showroom Address </label>
                                <input type="text"  class="form-control" v-model="form.showroomaddress"  id="showroomaddress" :class="{ 'is-invalid': form.errors.has('showroomaddress') }"  placeholder="House/Village, PO, Thana, District">
                              
                                    <has-error :form="form" field="showroomaddress"></has-error>
                              
                            </div>
                              <div class="col-md-12">
                                <label for="buydate" class="form-label">Interested to buy within date *</label>
                                <input type="date"  class="form-control" v-model="form.buydate" required id="buydate" :class="{ 'is-invalid': form.errors.has('buydate') }" >
                              
                                    <has-error :form="form" field="buydate"></has-error>
                              
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
    
  name: 'Bikeloan',
  data () {
    return {
       form: new Form({
        name: "",
        email: "",
        phone: "",
       bikename: "",
       brand:'',
        division: "",
        district: "",
        thana: "",
        bikecolor: "",
       profession:'',
       monthlyincome:'',
       salarytype:'',
       bankaccounttype:'',
       showroomname:'',
       showroomaddress:'',
       buydate:'',
       }),
       Brands:[],
      Company:[],
        Division: [],
        District: [],
        Thana: [],
        BikeName: [],
        Profession: [
          { value: null, text: 'Please select One' },
          { value: 'Service', text: 'Service' },
          { value: 'Business', text: 'Business' },
          { value: 'Land-lord', text: 'Land lord' },
          { value: 'Foreign-remittance-receiver', text: 'Foreign Remittance Receiver' },
          { value: 'Ride-sharing', text: 'Ride-sharing' },
          { value: 'Freelencer', text: 'Freelencer' },
           { value: 'Professional', text: 'Professional' },
           { value: 'Other', text: 'Other' }
          
        ],
        Salarytypes: [
          { value: null, text: 'Please select One' },
          { value: 'Cash', text: 'Cash' },
          { value: 'Account-Payee', text: 'Account Payee' },
          { value: 'Partial-account', text: 'Partial Account' },
          
          
        ], 
        Accounttypes: [
          { value: null, text: 'Please select One' },
          { value: 'Personal', text: 'Personal' },
          { value: 'Business', text: 'Business' },
          { value: 'No-Account', text: 'No-Account' },
          
          
        ],
    }
    
  },
    mounted() {

       axios.get(`https://bikebd.com/den/api/brandname`)
          .then(response=>{
          this.Brands=response.data.company;
              
          });
axios.get("https:///bikebd.com/den/api/forminfo")
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
      .get("https:///bikebd.com/den/api/getdistrict/"+value)
      .then((response) => {
        this.District=response.data;
        
      })
    },  
      Districtinfo(value){
    axios
      .get("https:///bikebd.com/den/api/getthana/"+value)
      .then((response) => {
        this.Thana=response.data;
       //  console.log(response);
      })
    },
        Firstbrand(value){
      axios
      .get("https:///bikebd.com/den/api/getbike/"+value)
      .then((response) => {
        this.Firstbike=response.data;
      //  console.log(response);
      })
    },
     Secondtbrand(value){
      axios
      .get("https:///bikebd.com/den/api/getbike/"+value)
      .then((response) => {
        this.Secondbike=response.data;
        // console.log(response);
      })
    },  
       Brandinfo(value){
        axios.get(`https://bikebd.com/den/api/brandname/${encodeURI(value)}`)
          .then(response=>{
          this.BikeName=response.data;
              
          });
     
    },
    async ContactForm() {
      await this.form
        .post("https://bikebd.com/den/api/bikeloan", this.form)
        .then((response) => {
         toastr.success(
            "Your Request Sent Successfully.Please Verify Your Phone Number"
          );
           this.$router.push('/bikeloanphoneverify/'+this.form.phone);
        })
        .catch((error) => toastr.warning(error.response.data.message));
    },
  },
};
</script>