<template>
  <v-app class="form" id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>SIGNUP</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <template>
                  <v-form ref="form" v-model="valid">
                    <v-text-field v-model="data.firstname" :rules="nameRules" label="Firtsname" required></v-text-field>
                    <v-text-field v-model="data.lastname" :rules="nameRules" label="Lastname" required></v-text-field>
                    <v-text-field v-model="data.address" :rules="nameRules" label="Address" required></v-text-field>
                    <v-text-field v-model="data.age" label="Age" type="number" min="1" required></v-text-field>

                    <v-text-field
                      v-model="data.contactnumber"
                      label="Contact Number"
                      type="string"
                      min="0"
                      required
                    ></v-text-field>
                    <v-text-field v-model="data.email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field v-model="data.username" :rules="nameRules" label="Username" required></v-text-field>
                    <v-text-field
                      v-model="data.password"
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-form>
                </template>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn v-on:click="submit()" color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  props: {
    source: String
  },
  data() {
    return {
    data:{
      lastname: null,
      firstname: null,
      address: null,
      age: null,
      contactnumber: null,
      email: null,
      username: null,
      password: null
        }
    };
  },
  methods: {
    submit() {
      console.log(this.address);
      axios.post("http://localhost:5000/accountsUsers",this.data).then(response => {
        alert(response);
        this.data ="";
        this.$router.push("/login");
      });
    }
  }
};
</script>
<style scoped>
</style>