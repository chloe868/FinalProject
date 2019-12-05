<template>
  <div class="container">
    <v-card class="mx-auto my-12" max-width="374" @submit="onsubmit()">
      <v-subheader height="200">
        <h1>LOGIN TO ABANG</h1>
      </v-subheader>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-text-field
            v-model="username"
            :type="'email' "
            required
            :prepend-icon="'mdi-account'"
            name="input-10-1"
            label="Username"
          ></v-text-field>
          <v-text-field
            v-model="password"
            required
            :type="'password'"
            :prepend-icon="'mdi-key-variant'"
            name="input-10-1"
            label="Password"
          ></v-text-field>
        </v-row>
      </v-card-text>
      <center>
        <v-card-actions>
          <v-btn id="customer" @click="onsubmit()">LOGIN</v-btn>
          <!-- <v-btn id="company" >Company</v-btn> -->
        </v-card-actions>
      </center>
      <v-card-actions>
        <h2>
          Dont have account? Click
          <u>
            <a @click="register">Register</a>
          </u>
        </h2>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import AUTH from "../services/auth";
import axios from "axios";
export default {
  name: "login",
  // data: () => ({
  //   input: {
  //     username: "",
  //     password: ""
  //   },
  //  // emailRules: [v => !!v || "username is required"],
  //   // passwordRules: [
  //   //   v => !!v || "Password is required",
  //   //   v => (v && v.length >= 5) || "Password must have 5+ characters",
  //   //   v => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
  //   //   v => /(?=.*\d)/.test(v) || "Must have one number",
  //   //   v => /([!@$%])/.test(v) || "Must have one special character [!@#$%]"
  //   // ]
  // }),
  data() {
    return{
      username: "",
      password: ""
    }
  },
  methods: {
    onsubmit() {
     // e.preventDefault();
      // let user = AUTH.login(this.input.username, this.input.password);
      // if (this.input.username === "" || this.input.password === "") {
        var data = {
          username: this.username,
          password: this.password
        }
        axios.get("http://localhost:5000/login", data)
          .then(response => {
            console.log(response);
            this.data = "";
            this.$router.push("/mainpage");
          })
          .catch(err => {
            alert("Username or Password doesn't match")
            console.log(err)
          })
      // } else {
      //   AUTH.setUser(user);
      //   if (user !== null) {
      //     Router.push("/reserved");
      //   }
      // }
    },
    register() {
      this.$router.push("/register");
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
#customer,
#company {
  margin-left: 8%;
}
h2 {
  font-size: 15px;
  margin-left: 20%;
}
h1{
  font-size: 20px;
  color: aliceblue;
  font-family: 'Franklin Gothic Medium'
  
}
</style>