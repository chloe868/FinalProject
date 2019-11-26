<template>
  <div class=" container">
    <v-card  class="mx-auto my-12" max-width="374" @submit="onsubmit">
      <v-subheader height="200">
        <h1>Login</h1>
      </v-subheader>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-text-field v-model="input.username" :type="'email' " :rules="emailRules" required :prepend-icon="'mdi-account'" name="input-10-1" label="Email"></v-text-field>
          <v-text-field v-model="input.password" :rules="passwordRules"  required :type="'password'" :prepend-icon="'mdi-key-variant'" name="input-10-1" label="Password" hint="At least 8 characters"></v-text-field>
        </v-row>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <!-- <v-card-actions> -->
        <!-- <v-btn color="deep-purple accent-4" >Login</v-btn> -->
      <!-- </v-card-actions> -->
       <v-card-actions>
        <v-btn  id="customer">Customer</v-btn>
        <v-btn id="company" >Company</v-btn>
      </v-card-actions>
       <v-card-actions>
        <h2 >Dont have account? Click <u><a @click="register">Register</a></u></h2>
      </v-card-actions>
    </v-card>
    
  </div>
</template>
<script>
import AUTH from '../services/auth'
  export default {
    name:'login',
    data: () => ({
      input: {
        email: null,
        password: null
      },
      emailRules: [v => !!v || 'Email is required'],
      passwordRules: [ 
    v => !!v || 'Password is required', 
    v => (v && v.length >= 5) || 'Password must have 5+ characters',
    v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character', 
    v => /(?=.*\d)/.test(v) || 'Must have one number', 
    v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]' 
]
    }),
    methods: {
      onsubmit(e) {
        e.preventDefault();
        let user=AUTH.login(this.input.email,this.input.password);
        if(this.input.email===""|| this.input.password===""){
          alert("Field is required...")
        }else{
          AUTH.setUser(user);
          if(user!==null){
             this.$router.push("/reserved");
          }
        }
      },
      register(){
        this.$router.push('/register');
      }
    }
  };
</script>
<style scoped>
  .theme--light.v-subheader {
    background-color: #1976d2;
    height: 100px;
  }
  .btn {
    margin-left: 30px;
  }
  .v-card__actions .v-btn.v-btn {
    padding: 0 8px;
    background-color: #1976d2;
    margin-left: 109px;
    width: 135px;
  }
  #customer,#company{
    margin-left: 8%;
  }
  h2{
    font-size: 15px;
    margin-left: 20%;
  }
</style>
